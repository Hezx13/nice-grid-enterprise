import cssAutoPrefix from 'autoprefixer';
import cssNano from 'cssnano';
import fs from 'fs';
import { globSync } from 'glob';
import { basename, dirname, join } from 'path';
import postcss from 'postcss';
import cssImport from 'postcss-import';
import cssRtl from 'postcss-rtlcss';
import cssUrl from 'postcss-url';


const DEV_MODE = false;
const srcFolders = join(__dirname, './src');
const written = new Set<string>();

const generateAllCSSEmbeds = async () => {
    const basePath = join(process.cwd(), 'src');
    console.log('Base path:', basePath);
    const cssEntryPoints = globSync('**/*.css', { cwd: basePath });
    console.log('Found CSS files:', cssEntryPoints);
    for (const cssEntryPoint of cssEntryPoints) {
        await generateCSSEmbed(cssEntryPoint);
    }
    console.log(cssEntryPoints);
    deleteUntouchedFilesMatching(join(srcFolders, '**/*.css-GENERATED.ts'));
};

const generateCSSEmbed = async (entry: string) => {
    const basePath = join(process.cwd(), 'src');
    const dir = dirname(entry);
    const entryName = basename(entry, '.css');
    if (entryName.startsWith('_')) {
        return;
    }
    const outputFile = join(basePath, dir, `${entryName}.css-GENERATED.ts`);
    const cssString = (DEV_MODE ? '\n' : '') + (await loadAndProcessCSSFile(entry));
    const exportName = camelCase(entryName) + 'CSS';
    const result = `export const ${exportName} = /*css*/ \`${cssString.replace(/`/g, '\\`')}\`;\n`;

    await writeTsFile(outputFile, result);
    written.add(outputFile);
};

const loadAndProcessCSSFile = async (cssFile: string) => {
    const basePath = join(process.cwd(), 'src');
    const fullPath = join(basePath, cssFile);
    const content = fs.readFileSync(fullPath, 'utf8');
    const result = await postcss(
        // inline @import(./path.css)
        cssImport(),
        // embed e.g. url(./path.svg) as data uri
        cssUrl({ url: 'inline' }),
        // add vendor prefixes
        cssAutoPrefix(),
        // auto RTL support
        cssRtl({
            ltrPrefix: `:where(.ag-ltr)`,
            rtlPrefix: `:where(.ag-rtl)`,
            bothPrefix: `:where(.ag-ltr, .ag-rtl)`,
        }),
        cssNano({
            preset: [
                'default',
                {
                    discardComments: !DEV_MODE,
                    normalizeWhitespace: !DEV_MODE,
                    minifySelectors: !DEV_MODE,
                },
            ],
        })
    ).process(content, { from: fullPath, to: fullPath });
    return result.css;
};

const deleteUntouchedFilesMatching = (pattern: string) => {
    const generatedFiles = globSync(pattern);
    for (const generatedFile of generatedFiles) {
        if (!written.has(generatedFile)) {
            fs.rmSync(generatedFile);
        }
    }
};

const writeTsFile = async (path: string, content: string) => {
    const fs = await import('fs');
    // write to a tmp file and rename over the existing file to provide atomic modification
    const tmpFile = path + '.tmp';
    fs.writeFileSync(tmpFile, content);
    fs.renameSync(tmpFile, path);
};

const camelCase = (str: string) => str.replace(/[\W_]+([a-z])/g, (_, letter) => letter.toUpperCase());

generateAllCSSEmbeds();

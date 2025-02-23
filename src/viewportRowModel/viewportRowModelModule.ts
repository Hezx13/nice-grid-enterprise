import type { _ModuleWithoutApi } from 'ag-grid-community';

import { EnterpriseCoreModule } from '../GridEnterpriseModule';
import { VERSION } from '../version';
import { ViewportRowModel } from './viewportRowModel';

/**
 * @feature Viewport Row Model
 */
export const ViewportRowModelModule: _ModuleWithoutApi = {
    moduleName: 'ViewportRowModel',
    version: VERSION,
    rowModels: ['viewport'],
    beans: [ViewportRowModel],
    dependsOn: [EnterpriseCoreModule],
};

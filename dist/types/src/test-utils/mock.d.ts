type GenericFunction = (...args: any[]) => any;
type PickByTypeKeyFilter<T, C> = {
    [K in keyof T]: T[K] extends C ? K : never;
};
type KeysByType<T, C> = PickByTypeKeyFilter<T, C>[keyof T];
type MethodsOf<T> = KeysByType<Required<T>, GenericFunction>;
export declare function mock<T>(...mockedMethods: MethodsOf<T>[]): jest.Mocked<T>;
export {};

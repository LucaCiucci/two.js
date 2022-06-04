export namespace CanvasShim {
    const Image: any;
    const isHeadless: boolean;
    function shim(canvas: any, Image?: new (width?: number, height?: number) => HTMLImageElement): any;
}

/**
 * @name Two.Collection
 * @class
 * @extends Two.Events
 * @description An `Array` like object with additional event propagation on actions. `pop`, `shift`, and `splice` trigger `removed` events. `push`, `unshift`, and `splice` with more than 2 arguments trigger 'inserted'. Finally, `sort` and `reverse` trigger `order` events.
 */
export class Collection {
    constructor(...args: any[]);
    /**
     * @private
     */
    private _events;
    set _bound(arg: boolean);
    get _bound(): boolean;
    addEventListener(...args: any[]): any;
    on(...args: any[]): any;
    bind(...args: any[]): any;
    removeEventListener(...args: any[]): any;
    off(...args: any[]): any;
    unbind(...args: any[]): any;
    dispatchEvent(...args: any[]): any;
    trigger(...args: any[]): any;
    listen(...args: any[]): any;
    ignore(...args: any[]): any;
    pop(...args: any[]): any;
    shift(...args: any[]): any;
    push(...args: any[]): any;
    unshift(...args: any[]): any;
    splice(...args: any[]): any;
    sort(...args: any[]): Collection;
    reverse(...args: any[]): Collection;
    indexOf(...args: any[]): any;
}

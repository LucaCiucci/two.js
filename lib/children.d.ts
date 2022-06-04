import { Collection } from './collection.js';
import type { Shape } from './shape.js';
/**
 * @class
 * @name Two.Group.Children
 * @extends Two.Collection
 * @description A children collection which is accesible both by index and by object `id`.
 */
export declare class Children extends Collection {
    /**
     * @name Two.Group.Children#ids
     * @property {Object} - Map of all elements in the list keyed by `id`s.
     */
    ids: {};
    constructor(children: any);
    /**
     * @function
     * @name Two.Group.Children#attach
     * @param {Two.Shape[]} children - The objects which extend {@link Two.Shape} to be added.
     * @description Adds elements to the `ids` map.
     */
    attach(children: Shape[]): this;
    /**
     * @function
     * @name Two.Group.Children#detach
     * @param {Two.Shape[]} children - The objects which extend {@link Two.Shape} to be removed.
     * @description Removes elements to the `ids` map.
     */
    detach(children: any): this;
}

/**
 * @name Two.Rectangle
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the rectangle.
 * @param {Number} [y=0] - The y position of the rectangle.
 * @param {Number} [width=1] - The width value of the rectangle.
 * @param {Number} [height=1] - The width value of the rectangle.
 */
export class Rectangle {
    /**
     * @name Two.Rectangle.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Rectangle}.
     */
    static Properties: string[];
    constructor(x: any, y: any, width: any, height: any);
    /**
     * @name Two.Rectangle#width
     * @property {Number} - The size of the width of the rectangle.
     */
    width: number;
    /**
     * @name Two.Rectangle#height
     * @property {Number} - The size of the height of the rectangle.
     */
    height: number;
    /**
     * @name Two.Rectangle#origin
     * @property {Number} - A two-component vector describing the origin offset to draw the rectangle. Default is `0, 0`.
     */
    origin: Vector;
    /**
     * @name Two.Rectangle#_flagWidth
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Rectangle#width} needs updating.
     */
    private _flagWidth;
    /**
     * @name Two.Rectangle#_flagHeight
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Rectangle#height} needs updating.
     */
    private _flagHeight;
    /**
     * @name Two.Rectangle#_width
     * @private
     * @see {@link Two.Rectangle#width}
     */
    private _width;
    /**
     * @name Two.Rectangle#_height
     * @private
     * @see {@link Two.Rectangle#height}
     */
    private _height;
    _origin: any;
    /**
     * @name Two.Rectangle#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Rectangle#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
    /**
     * @name Two.Rectangle#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Rectangle}
     * @description Create a new instance of {@link Two.Rectangle} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.Rectangle;
    /**
     * @name Two.Rectangle#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
}
import { Vector } from "../vector.js";

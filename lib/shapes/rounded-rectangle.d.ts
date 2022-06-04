/**
 * @name Two.RoundedRectangle
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the rounded rectangle.
 * @param {Number} [y=0] - The y position of the rounded rectangle.
 * @param {Number} [width=0] - The width value of the rounded rectangle.
 * @param {Number} [height=0] - The width value of the rounded rectangle.
 * @param {Number} [radius=0] - The radius value of the rounded rectangle.
 * @param {Number} [resolution=12] - The number of vertices used to construct the rounded rectangle.
 */
export class RoundedRectangle {
    /**
     * @name Two.RoundedRectangle.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.RoundedRectangle}.
     */
    static Properties: string[];
    constructor(x: any, y: any, width: any, height: any, radius: any);
    /**
     * @name Two.RoundedRectangle#_flagWidth
     * @private
     * @property {Boolean} - Determines whether the {@link Two.RoundedRectangle#width} needs updating.
     */
    private _flagWidth;
    /**
     * @name Two.RoundedRectangle#_flagHeight
     * @private
     * @property {Boolean} - Determines whether the {@link Two.RoundedRectangle#height} needs updating.
     */
    private _flagHeight;
    /**
     * @name Two.RoundedRectangle#_flagRadius
     * @private
     * @property {Boolean} - Determines whether the {@link Two.RoundedRectangle#radius} needs updating.
     */
    private _flagRadius;
    /**
     * @name Two.RoundedRectangle#_width
     * @private
     * @see {@link Two.RoundedRectangle#width}
     */
    private _width;
    /**
     * @name Two.RoundedRectangle#_height
     * @private
     * @see {@link Two.RoundedRectangle#height}
     */
    private _height;
    /**
     * @name Two.RoundedRectangle#_radius
     * @private
     * @see {@link Two.RoundedRectangle#radius}
     */
    private _radius;
    closed: boolean;
    automatic: boolean;
    width: number;
    height: number;
    radius: number;
    /**
     * @name Two.RoundedRectangle#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.RoundedRectangle#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
    /**
     * @name Two.RoundedRectangle#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.RoundedRectangle}
     * @description Create a new instance of {@link Two.RoundedRectangle} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.RoundedRectangle;
    /**
     * @name Two.RoundedRectangle#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
}

/**
 * @name Two.Ellipse
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the ellipse.
 * @param {Number} [y=0] - The y position of the ellipse.
 * @param {Number} [rx=0] - The radius value of the ellipse in the x direction.
 * @param {Number} [ry=0] - The radius value of the ellipse in the y direction.
 * @param {Number} [resolution=4] - The number of vertices used to construct the ellipse.
 */
export class Ellipse {
    /**
     * @name Two.Ellipse.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Ellipse}.
     */
    static Properties: string[];
    constructor(x: any, y: any, rx: any, ry: any, resolution: any);
    /**
     * @name Two.Ellipse#_flagWidth
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Ellipse#width} needs updating.
     */
    private _flagWidth;
    /**
     * @name Two.Ellipse#_flagHeight
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Ellipse#height} needs updating.
     */
    private _flagHeight;
    /**
     * @name Two.Ellipse#_width
     * @private
     * @see {@link Two.Ellipse#width}
     */
    private _width;
    /**
     * @name Two.Ellipse#_height
     * @private
     * @see {@link Two.Ellipse#height}
     */
    private _height;
    width: number;
    height: number;
    /**
     * @name Two.Ellipse#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Ellipse#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
    /**
     * @name Two.Ellipse#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Ellipse}
     * @description Create a new instance of {@link Two.Ellipse} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.Ellipse;
    /**
     * @name Two.Ellipse#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
}

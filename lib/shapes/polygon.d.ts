/**
 * @name Two.Polygon
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the polygon.
 * @param {Number} [y=0] - The y position of the polygon.
 * @param {Number} [radius=0] - The radius value of the polygon.
 * @param {Number} [sides=12] - The number of vertices used to construct the polygon.
 */
export class Polygon {
    /**
     * @name Two.Polygon.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Polygon}.
     */
    static Properties: string[];
    constructor(x: any, y: any, radius: any, sides: any);
    /**
     * @name Two.Polygon#_flagWidth
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Polygon#width} needs updating.
     */
    private _flagWidth;
    /**
     * @name Two.Polygon#_flagHeight
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Polygon#height} needs updating.
     */
    private _flagHeight;
    /**
     * @name Two.Polygon#_flagSides
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Polygon#sides} needs updating.
     */
    private _flagSides;
    /**
     * @name Two.Polygon#_radius
     * @private
     * @see {@link Two.Polygon#radius}
     */
    private _radius;
    /**
     * @name Two.Polygon#_width
     * @private
     * @see {@link Two.Polygon#width}
     */
    private _width;
    /**
     * @name Two.Polygon#_height
     * @private
     * @see {@link Two.Polygon#height}
     */
    private _height;
    /**
     * @name Two.Polygon#_sides
     * @private
     * @see {@link Two.Polygon#sides}
     */
    private _sides;
    closed: boolean;
    automatic: boolean;
    radius: number;
    sides: number;
    /**
     * @name Two.Polygon#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Polygon#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
    /**
     * @name Two.Polygon#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Polygon}
     * @description Create a new instance of {@link Two.Polygon} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.Polygon;
    /**
     * @name Two.Polygon#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
}

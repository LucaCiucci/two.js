/**
 * @name Two.Circle
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the circle.
 * @param {Number} [y=0] - The y position of the circle.
 * @param {Number} [radius=0] - The radius value of the circle.
 * @param {Number} [resolution=4] - The number of vertices used to construct the circle.
 */
export class Circle {
    /**
     * @name Two.Circle.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Circle}.
     */
    static Properties: string[];
    constructor(ox: any, oy: any, r: any, resolution: any);
    /**
     * @name Two.Circle#_flagRadius
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Circle#radius} needs updating.
     */
    private _flagRadius;
    /**
     * @name Two.Circle#_radius
     * @private
     * @see {@link Two.Circle#radius}
     */
    private _radius;
    radius: number;
    /**
     * @name Two.Circle#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Circle#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
    /**
     * @name Two.Circle#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Circle}
     * @description Create a new instance of {@link Two.Circle} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.Circle;
    /**
     * @name Two.Circle#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
}

/**
 * @name Two.Star
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the star.
 * @param {Number} [y=0] - The y position of the star.
 * @param {Number} [innerRadius=0] - The inner radius value of the star.
 * @param {Number} [outerRadius=0] - The outer radius value of the star.
 * @param {Number} [sides=5] - The number of sides used to construct the star.
 */
export class Star {
    /**
     * @name Two.Star.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Star}.
     */
    static Properties: string[];
    constructor(ox: any, oy: any, ir: any, or: any, sides: any, ...args: any[]);
    /**
     * @name Two.Star#_flagInnerRadius
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Star#innerRadius} needs updating.
     */
    private _flagInnerRadius;
    /**
     * @name Two.Star#_flagOuterRadius
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Star#outerRadius} needs updating.
     */
    private _flagOuterRadius;
    /**
     * @name Two.Star#_flagSides
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Star#sides} needs updating.
     */
    private _flagSides;
    /**
     * @name Two.Star#_innerRadius
     * @private
     * @see {@link Two.Star#innerRadius}
     */
    private _innerRadius;
    /**
     * @name Two.Star#_outerRadius
     * @private
     * @see {@link Two.Star#outerRadius}
     */
    private _outerRadius;
    /**
     * @name Two.Star#_sides
     * @private
     * @see {@link Two.Star#sides}
     */
    private _sides;
    closed: boolean;
    automatic: boolean;
    innerRadius: number;
    outerRadius: number;
    sides: number;
    /**
     * @name Two.Star#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Star#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
    /**
     * @name Two.Star#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Star}
     * @description Create a new instance of {@link Two.Star} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.Star;
    /**
     * @name Two.Star#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
}

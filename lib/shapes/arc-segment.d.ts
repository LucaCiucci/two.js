/**
 * @name Two.ArcSegment
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the arc segment.
 * @param {Number} [y=0] - The y position of the arc segment.
 * @param {Number} [innerRadius=0] - The inner radius value of the arc segment.
 * @param {Number} [outerRadius=0] - The outer radius value of the arc segment.
 * @param {Number} [startAngle=0] - The start angle of the arc segment in Number.
 * @param {Number} [endAngle=6.2831] - The end angle of the arc segment in Number.
 * @param {Number} [resolution=24] - The number of vertices used to construct the arc segment.
 */
export class ArcSegment {
    /**
     * @name Two.ArcSegment.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.ArcSegment}.
     */
    static Properties: string[];
    constructor(x: any, y: any, ir: any, or: any, sa: any, ea: any, res: any);
    /**
     * @name Two.ArcSegment#_flagStartAngle
     * @private
     * @property {Boolean} - Determines whether the {@link Two.ArcSegment#startAngle} needs updating.
     */
    private _flagStartAngle;
    /**
     * @name Two.ArcSegment#_flagEndAngle
     * @private
     * @property {Boolean} - Determines whether the {@link Two.ArcSegment#endAngle} needs updating.
     */
    private _flagEndAngle;
    /**
     * @name Two.ArcSegment#_flagInnerRadius
     * @private
     * @property {Boolean} - Determines whether the {@link Two.ArcSegment#innerRadius} needs updating.
     */
    private _flagInnerRadius;
    /**
     * @name Two.ArcSegment#_flagOuterRadius
     * @private
     * @property {Boolean} - Determines whether the {@link Two.ArcSegment#outerRadius} needs updating.
     */
    private _flagOuterRadius;
    /**
     * @name Two.ArcSegment#_startAngle
     * @private
     * @see {@link Two.ArcSegment#startAngle}
     */
    private _startAngle;
    /**
     * @name Two.ArcSegment#_endAngle
     * @private
     * @see {@link Two.ArcSegment#endAngle}
     */
    private _endAngle;
    /**
     * @name Two.ArcSegment#_innerRadius
     * @private
     * @see {@link Two.ArcSegment#innerRadius}
     */
    private _innerRadius;
    /**
     * @name Two.ArcSegment#_outerRadius
     * @private
     * @see {@link Two.ArcSegment#outerRadius}
     */
    private _outerRadius;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    /**
     * @name Two.ArcSegment#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.ArcSegment#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
    /**
     * @name Two.ArcSegment#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.ArcSegment}
     * @description Create a new instance of {@link Two.ArcSegment} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.ArcSegment;
    /**
     * @name Two.ArcSegment#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
}

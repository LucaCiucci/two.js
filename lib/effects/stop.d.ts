/**
 * @name Two.Stop
 * @class
 * @extends Two.Element
 * @param {Number} [offset] - The offset percentage of the stop represented as a zero-to-one value. Default value flip flops from zero-to-one as new stops are created.
 * @param {String} [color] - The color of the stop. Default value flip flops from white to black as new stops are created.
 * @param {Number} [opacity] - The opacity value. Default value is 1, cannot be lower than 0.
 * @nota-bene Used specifically in conjunction with {@link Two.Gradient}s to control color graduation.
 */
export class Stop {
    /**
     * @name Two.Stop.Index
     * @property {Number} - The current index being referenced for calculating a stop's default offset value.
     */
    static Index: number;
    /**
     * @name Two.Stop.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Stop}.
     */
    static Properties: string[];
    constructor(offset: any, color: any, opacity: any);
    /**
     * @name Two.Stop#_flagOffset
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Stop#offset} needs updating.
     */
    private _flagOffset;
    /**
     * @name Two.Stop#_flagOpacity
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Stop#opacity} needs updating.
     */
    private _flagOpacity;
    /**
     * @name Two.Stop#_flagColor
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Stop#color} needs updating.
     */
    private _flagColor;
    /**
     * @name Two.Stop#_offset
     * @private
     * @see {@link Two.Stop#offset}
     */
    private _offset;
    /**
     * @name Two.Stop#_opacity
     * @private
     * @see {@link Two.Stop#opacity}
     */
    private _opacity;
    /**
     * @name Two.Stop#_color
     * @private
     * @see {@link Two.Stop#color}
     */
    private _color;
    /**
     * @name Two.Stop#offset
     * @property {Number} - The offset percentage of the stop represented as a zero-to-one value.
     */
    offset: number;
    /**
     * @name Two.Stop#opacity
     * @property {Number} - The alpha percentage of the stop represented as a zero-to-one value.
     */
    opacity: number;
    /**
     * @name Two.Stop#color
     * @property {String} - The color of the stop.
     */
    color: string;
    /**
     * @name Two.Stop#clone
     * @function
     * @param {Two.Gradient} [parent] - The parent gradient to add the clone to.
     * @returns {Two.Stop}
     * @description Create a new instance of {@link Two.Stop} with the same properties of the current path.
     */
    clone(parent?: Two.Gradient): Two.Stop;
    /**
     * @name Two.Stop#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
    /**
     * @name Two.Stop#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}

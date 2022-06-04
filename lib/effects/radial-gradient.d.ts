/**
 * @name Two.RadialGradient
 * @class
 * @extends Two.Gradient
 * @param {Number} [x=0] - The x position of the origin of the radial gradient.
 * @param {Number} [y=0] - The y position of the origin of the radial gradient.
 * @param {Number} [radius=0] - The radius of the radial gradient.
 * @param {Two.Stop[]} [stops] - A list of {@link Two.Stop}s that contain the gradient fill pattern for the gradient.
 * @param {Number} [focalX=0] - The x position of the focal point on the radial gradient.
 * @param {Number} [focalY=0] - The y position of the focal point on the radial gradient.
 * @nota-bene The radial gradient lives within the space of the parent object's matrix space.
 */
export class RadialGradient {
    /**
     * @name Two.RadialGradient.Stop
     * @see {@link Two.Stop}
     */
    static Stop: typeof Stop;
    /**
     * @name Two.RadialGradient.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.RadialGradient}.
     */
    static Properties: string[];
    constructor(cx: any, cy: any, r: any, stops: any, fx: any, fy: any);
    /**
     * @name Two.RadialGradient#_flagRadius
     * @private
     * @property {Boolean} - Determines whether the {@link Two.RadialGradient#radius} changed and needs to update.
     */
    private _flagRadius;
    /**
     * @name Two.RadialGradient#_flagCenter
     * @private
     * @property {Boolean} - Determines whether the {@link Two.RadialGradient#center} changed and needs to update.
     */
    private _flagCenter;
    /**
     * @name Two.RadialGradient#_flagFocal
     * @private
     * @property {Boolean} - Determines whether the {@link Two.RadialGradient#focal} changed and needs to update.
     */
    private _flagFocal;
    _radius: number;
    _center: any;
    _focal: any;
    /**
     * @name Two.RadialGradient#center
     * @property {Two.Vector} - The x and y value for where the origin of the radial gradient is.
     */
    center: Vector;
    radius: number;
    /**
     * @name Two.RadialGradient#focal
     * @property {Two.Vector} - The x and y value for where the focal point of the radial gradient is.
     * @nota-bene This effects the spray or spread of the radial gradient.
     */
    focal: Vector;
    /**
     * @name Two.RadialGradient#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Gradient}
     * @description Create a new instance of {@link Two.RadialGradient} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.Gradient;
    /**
     * @name Two.RadialGradient#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
    /**
     * @name Two.RadialGradient#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.RadialGradient#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}
import { Vector } from "../vector.js";
import { Stop } from "./stop.js";

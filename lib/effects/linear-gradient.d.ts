/**
 * @name Two.LinearGradient
 * @class
 * @extends Two.Gradient
 * @param {Number} [x1=0] - The x position of the first end point of the linear gradient.
 * @param {Number} [y1=0] - The y position of the first end point of the linear gradient.
 * @param {Number} [x2=0] - The x position of the second end point of the linear gradient.
 * @param {Number} [y2=0] - The y position of the second end point of the linear gradient.
 * @param {Two.Stop[]} [stops] - A list of {@link Two.Stop}s that contain the gradient fill pattern for the gradient.
 * @nota-bene The linear gradient lives within the space of the parent object's matrix space.
 */
export class LinearGradient {
    static Properties: string[];
    /**
     * @name Two.LinearGradient.Stop
     * @see {@link Two.Stop}
     */
    static Stop: typeof Stop;
    constructor(x1: any, y1: any, x2: any, y2: any, stops: any);
    /**
     * @name Two.LinearGradient#_flagEndPoints
     * @private
     * @property {Boolean} - Determines whether the {@link Two.LinearGradient#left} or {@link Two.LinearGradient#right} changed and needs to update.
     */
    private _flagEndPoints;
    _left: any;
    _right: any;
    /**
     * @name Two.LinearGradient#left
     * @property {Two.Vector} - The x and y value for where the first end point is placed on the canvas.
     */
    left: Vector;
    /**
     * @name Two.LinearGradient#right
     * @property {Two.Vector} - The x and y value for where the second end point is placed on the canvas.
     */
    right: Vector;
    /**
     * @name Two.LinearGradient#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Gradient}
     * @description Create a new instance of {@link Two.LinearGradient} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.Gradient;
    /**
     * @name Two.LinearGradient#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
    /**
     * @name Two.LinearGradient#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.LinearGradient#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}
import { Vector } from "../vector.js";
import { Stop } from "./stop.js";

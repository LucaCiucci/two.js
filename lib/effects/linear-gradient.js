import { Events } from '../events.js';
import { _ } from '../utils/underscore.js';
import { Stop } from './stop.js';
import { Gradient } from './gradient.js';
import { Vector } from '../vector.js';
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
export class LinearGradient extends Gradient {
    constructor(x1, y1, x2, y2, stops) {
        super(stops);
        /**
         * @name Two.LinearGradient#_flagEndPoints
         * @private
         * @property {Boolean} - Determines whether the {@link Two.LinearGradient#left} or {@link Two.LinearGradient#right} changed and needs to update.
         */
        this._flagEndPoints = false;
        this._left = null;
        this._right = null;
        for (let prop in proto) {
            Object.defineProperty(this, prop, proto[prop]);
        }
        this._renderer.type = 'linear-gradient';
        this._renderer.flagEndPoints = FlagEndPoints.bind(this);
        /**
         * @name Two.LinearGradient#left
         * @property {Two.Vector} - The x and y value for where the first end point is placed on the canvas.
         */
        this.left = new Vector();
        /**
         * @name Two.LinearGradient#right
         * @property {Two.Vector} - The x and y value for where the second end point is placed on the canvas.
         */
        this.right = new Vector();
        if (typeof x1 === 'number') {
            this.left.x = x1;
        }
        if (typeof y1 === 'number') {
            this.left.y = y1;
        }
        if (typeof x2 === 'number') {
            this.right.x = x2;
        }
        if (typeof y2 === 'number') {
            this.right.y = y2;
        }
    }
    /**
     * @name Two.LinearGradient#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Gradient}
     * @description Create a new instance of {@link Two.LinearGradient} with the same properties of the current path.
     */
    clone(parent) {
        const stops = this.stops.map(function (stop) {
            return stop.clone();
        });
        const clone = new LinearGradient(this.left._x, this.left._y, this.right._x, this.right._y, stops);
        _.each(Gradient.Properties, function (k) {
            clone[k] = this[k];
        }, this);
        if (parent) {
            parent.add(clone);
        }
        return clone;
    }
    /**
     * @name Two.LinearGradient#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject() {
        const result = super.toObject.call(this);
        result.left = this.left.toObject();
        result.right = this.right.toObject();
        return result;
    }
    /**
     * @name Two.LinearGradient#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    _update() {
        if (this._flagEndPoints || this._flagSpread || this._flagStops) {
            this.trigger(Events.Types.change);
        }
        return this;
    }
    /**
     * @name Two.LinearGradient#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    flagReset() {
        this._flagEndPoints = false;
        super.flagReset.call(this);
        return this;
    }
}
LinearGradient.Properties = ['left', 'right'];
/**
 * @name Two.LinearGradient.Stop
 * @see {@link Two.Stop}
 */
LinearGradient.Stop = Stop;
const proto = {
    left: {
        enumerable: true,
        get: function () {
            return this._left;
        },
        set: function (v) {
            if (this._left instanceof Vector) {
                this._left.unbind(Events.Types.change, this._renderer.flagEndPoints);
            }
            this._left = v;
            this._left.bind(Events.Types.change, this._renderer.flagEndPoints);
            this._flagEndPoints = true;
        }
    },
    right: {
        enumerable: true,
        get: function () {
            return this._right;
        },
        set: function (v) {
            if (this._right instanceof Vector) {
                this._right.unbind(Events.Types.change, this._renderer.flagEndPoints);
            }
            this._right = v;
            this._right.bind(Events.Types.change, this._renderer.flagEndPoints);
            this._flagEndPoints = true;
        }
    }
};
/**
 * @name FlagEndPoints
 * @private
 * @function
 * @description Cached method to let renderers know end points have been updated on a {@link Two.LinearGradient}.
 */
function FlagEndPoints() {
    this._flagEndPoints = true;
}

import { _ } from '../utils/underscore.js';
import { Element } from '../element.js';
/**
 * @name Two.Stop
 * @class
 * @extends Two.Element
 * @param {Number} [offset] - The offset percentage of the stop represented as a zero-to-one value. Default value flip flops from zero-to-one as new stops are created.
 * @param {String} [color] - The color of the stop. Default value flip flops from white to black as new stops are created.
 * @param {Number} [opacity] - The opacity value. Default value is 1, cannot be lower than 0.
 * @nota-bene Used specifically in conjunction with {@link Two.Gradient}s to control color graduation.
 */
export class Stop extends Element {
    constructor(offset, color, opacity) {
        super();
        /**
         * @name Two.Stop#_flagOffset
         * @private
         * @property {Boolean} - Determines whether the {@link Two.Stop#offset} needs updating.
         */
        this._flagOffset = true;
        /**
         * @name Two.Stop#_flagOpacity
         * @private
         * @property {Boolean} - Determines whether the {@link Two.Stop#opacity} needs updating.
         */
        this._flagOpacity = true;
        /**
         * @name Two.Stop#_flagColor
         * @private
         * @property {Boolean} - Determines whether the {@link Two.Stop#color} needs updating.
         */
        this._flagColor = true;
        /**
         * @name Two.Stop#_offset
         * @private
         * @see {@link Two.Stop#offset}
         */
        this._offset = 0;
        /**
         * @name Two.Stop#_opacity
         * @private
         * @see {@link Two.Stop#opacity}
         */
        this._opacity = 1;
        /**
         * @name Two.Stop#_color
         * @private
         * @see {@link Two.Stop#color}
         */
        this._color = '#fff';
        for (let prop in proto) {
            Object.defineProperty(this, prop, proto[prop]);
        }
        this._renderer.type = 'stop';
        /**
         * @name Two.Stop#offset
         * @property {Number} - The offset percentage of the stop represented as a zero-to-one value.
         */
        this.offset = typeof offset === 'number' ? offset
            : Stop.Index <= 0 ? 0 : 1;
        /**
         * @name Two.Stop#opacity
         * @property {Number} - The alpha percentage of the stop represented as a zero-to-one value.
         */
        this.opacity = typeof opacity === 'number' ? opacity : 1;
        /**
         * @name Two.Stop#color
         * @property {String} - The color of the stop.
         */
        this.color = (typeof color === 'string') ? color
            : Stop.Index <= 0 ? '#fff' : '#000';
        Stop.Index = (Stop.Index + 1) % 2;
    }
    /**
     * @name Two.Stop#clone
     * @function
     * @param {Two.Gradient} [parent] - The parent gradient to add the clone to.
     * @returns {Two.Stop}
     * @description Create a new instance of {@link Two.Stop} with the same properties of the current path.
     */
    clone(parent) {
        const clone = new Stop();
        _.each(Stop.Properties, function (property) {
            clone[property] = this[property];
        }, this);
        if (parent && parent.stops) {
            parent.stops.push(clone);
        }
        return clone;
    }
    /**
     * @name Two.Stop#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject() {
        const result = {};
        _.each(Stop.Properties, function (k) {
            result[k] = this[k];
        }, this);
        return result;
    }
    /**
     * @name Two.Stop#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    flagReset() {
        this._flagOffset = this._flagColor = this._flagOpacity = false;
        super.flagReset.call(this);
        return this;
    }
}
/**
 * @name Two.Stop.Index
 * @property {Number} - The current index being referenced for calculating a stop's default offset value.
 */
Stop.Index = 0;
/**
 * @name Two.Stop.Properties
 * @property {String[]} - A list of properties that are on every {@link Two.Stop}.
 */
Stop.Properties = ['offset', 'opacity', 'color'];
const proto = {
    offset: {
        enumerable: true,
        get: function () {
            return this._offset;
        },
        set: function (v) {
            this._offset = v;
            this._flagOffset = true;
            if (this.parent) {
                this.parent._flagStops = true;
            }
        }
    },
    opacity: {
        enumerable: true,
        get: function () {
            return this._opacity;
        },
        set: function (v) {
            this._opacity = v;
            this._flagOpacity = true;
            if (this.parent) {
                this.parent._flagStops = true;
            }
        }
    },
    color: {
        enumerable: true,
        get: function () {
            return this._color;
        },
        set: function (v) {
            this._color = v;
            this._flagColor = true;
            if (this.parent) {
                this.parent._flagStops = true;
            }
        }
    }
};

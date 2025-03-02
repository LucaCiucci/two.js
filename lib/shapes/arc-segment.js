import { Commands } from '../utils/path-commands.js';
import { mod, HALF_PI, TWO_PI } from '../utils/math.js';
import { Path } from '../path.js';
import { Anchor } from '../anchor.js';
import { Constants } from '../constants.js';
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
export class ArcSegment extends Path {
    constructor(x, y, ir, or, sa, ea, res) {
        const amount = res || (Constants.Resolution * 3);
        const points = [];
        for (let i = 0; i < amount; i++) {
            points.push(new Anchor());
        }
        super(points, true, false, true);
        /**
         * @name Two.ArcSegment#_flagStartAngle
         * @private
         * @property {Boolean} - Determines whether the {@link Two.ArcSegment#startAngle} needs updating.
         */
        this._flagStartAngle = false;
        /**
         * @name Two.ArcSegment#_flagEndAngle
         * @private
         * @property {Boolean} - Determines whether the {@link Two.ArcSegment#endAngle} needs updating.
         */
        this._flagEndAngle = false;
        /**
         * @name Two.ArcSegment#_flagInnerRadius
         * @private
         * @property {Boolean} - Determines whether the {@link Two.ArcSegment#innerRadius} needs updating.
         */
        this._flagInnerRadius = false;
        /**
         * @name Two.ArcSegment#_flagOuterRadius
         * @private
         * @property {Boolean} - Determines whether the {@link Two.ArcSegment#outerRadius} needs updating.
         */
        this._flagOuterRadius = false;
        /**
         * @name Two.ArcSegment#_startAngle
         * @private
         * @see {@link Two.ArcSegment#startAngle}
         */
        this._startAngle = 0;
        /**
         * @name Two.ArcSegment#_endAngle
         * @private
         * @see {@link Two.ArcSegment#endAngle}
         */
        this._endAngle = TWO_PI;
        /**
         * @name Two.ArcSegment#_innerRadius
         * @private
         * @see {@link Two.ArcSegment#innerRadius}
         */
        this._innerRadius = 0;
        /**
         * @name Two.ArcSegment#_outerRadius
         * @private
         * @see {@link Two.ArcSegment#outerRadius}
         */
        this._outerRadius = 0;
        for (let prop in proto) {
            Object.defineProperty(this, prop, proto[prop]);
        }
        /**
         * @name Two.ArcSegment#innerRadius
         * @property {Number} - The size of the inner radius of the arc segment.
         */
        if (typeof ir === 'number') {
            this.innerRadius = ir;
        }
        /**
         * @name Two.ArcSegment#outerRadius
         * @property {Number} - The size of the outer radius of the arc segment.
         */
        if (typeof or === 'number') {
            this.outerRadius = or;
        }
        /**
         * @name Two.ArcSegment#startAngle
         * @property {Number} - The angle of one side for the arc segment.
         */
        if (typeof sa === 'number') {
            this.startAngle = sa;
        }
        /**
         * @name Two.ArcSegment#endAngle
         * @property {Number} - The angle of the other side for the arc segment.
         */
        if (typeof ea === 'number') {
            this.endAngle = ea;
        }
        this._update();
        if (typeof x === 'number') {
            this.translation.x = x;
        }
        if (typeof y === 'number') {
            this.translation.y = y;
        }
    }
    /**
     * @name Two.ArcSegment#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    _update() {
        if (this._flagVertices || this._flagStartAngle || this._flagEndAngle
            || this._flagInnerRadius || this._flagOuterRadius) {
            const sa = this._startAngle;
            const ea = this._endAngle;
            const ir = this._innerRadius;
            const or = this._outerRadius;
            const connected = mod(sa, TWO_PI) === mod(ea, TWO_PI);
            const punctured = ir > 0;
            const vertices = this.vertices;
            let length = (punctured ? vertices.length / 2 : vertices.length);
            let command, id = 0;
            let i, last, pct, v, theta, step, x, y, amp;
            if (connected) {
                length--;
            }
            else if (!punctured) {
                length -= 2;
            }
            /**
             * Outer Circle
             */
            for (i = 0, last = length - 1; i < length; i++) {
                pct = i / last;
                v = vertices[id];
                theta = pct * (ea - sa) + sa;
                step = (ea - sa) / length;
                x = or * Math.cos(theta);
                y = or * Math.sin(theta);
                switch (i) {
                    case 0:
                        command = Commands.move;
                        break;
                    default:
                        command = Commands.curve;
                }
                v.command = command;
                v.x = x;
                v.y = y;
                v.controls.left.clear();
                v.controls.right.clear();
                if (v.command === Commands.curve) {
                    amp = or * step / Math.PI;
                    v.controls.left.x = amp * Math.cos(theta - HALF_PI);
                    v.controls.left.y = amp * Math.sin(theta - HALF_PI);
                    v.controls.right.x = amp * Math.cos(theta + HALF_PI);
                    v.controls.right.y = amp * Math.sin(theta + HALF_PI);
                    if (i === 1) {
                        v.controls.left.multiplyScalar(2);
                    }
                    if (i === last) {
                        v.controls.right.multiplyScalar(2);
                    }
                }
                id++;
            }
            if (punctured) {
                if (connected) {
                    vertices[id].command = Commands.close;
                    id++;
                }
                else {
                    length--;
                    last = length - 1;
                }
                /**
                 * Inner Circle
                 */
                for (i = 0; i < length; i++) {
                    pct = i / last;
                    v = vertices[id];
                    theta = (1 - pct) * (ea - sa) + sa;
                    step = (ea - sa) / length;
                    x = ir * Math.cos(theta);
                    y = ir * Math.sin(theta);
                    command = Commands.curve;
                    if (i <= 0) {
                        command = connected ? Commands.move : Commands.line;
                    }
                    v.command = command;
                    v.x = x;
                    v.y = y;
                    v.controls.left.clear();
                    v.controls.right.clear();
                    if (v.command === Commands.curve) {
                        amp = ir * step / Math.PI;
                        v.controls.left.x = amp * Math.cos(theta + HALF_PI);
                        v.controls.left.y = amp * Math.sin(theta + HALF_PI);
                        v.controls.right.x = amp * Math.cos(theta - HALF_PI);
                        v.controls.right.y = amp * Math.sin(theta - HALF_PI);
                        if (i === 1) {
                            v.controls.left.multiplyScalar(2);
                        }
                        if (i === last) {
                            v.controls.right.multiplyScalar(2);
                        }
                    }
                    id++;
                }
                // Final Point
                vertices[id].copy(vertices[0]);
                vertices[id].command = Commands.line;
            }
            else if (!connected) {
                vertices[id].command = Commands.line;
                vertices[id].x = 0;
                vertices[id].y = 0;
                id++;
                // Final Point
                vertices[id].copy(vertices[0]);
                vertices[id].command = Commands.line;
            }
        }
        super._update.call(this);
        return this;
    }
    /**
     * @name Two.ArcSegment#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    flagReset() {
        super.flagReset.call(this);
        this._flagStartAngle = this._flagEndAngle
            = this._flagInnerRadius = this._flagOuterRadius = false;
        return this;
    }
    /**
     * @name Two.ArcSegment#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.ArcSegment}
     * @description Create a new instance of {@link Two.ArcSegment} with the same properties of the current path.
     */
    clone(parent) {
        const ir = this.innerRadius;
        const or = this.outerRadius;
        const sa = this.startAngle;
        const ea = this.endAngle;
        const resolution = this.vertices.length;
        const clone = new ArcSegment(0, 0, ir, or, sa, ea, resolution);
        clone.translation.copy(this.translation);
        clone.rotation = this.rotation;
        clone.scale = this.scale;
        clone.skewX = this.skewX;
        clone.skewY = this.skewY;
        if (this.matrix.manual) {
            clone.matrix.copy(this.matrix);
        }
        for (let i = 0; i < Path.Properties.length; i++) {
            const k = Path.Properties[i];
            clone[k] = this[k];
        }
        if (parent) {
            parent.add(clone);
        }
        return clone;
    }
    /**
     * @name Two.ArcSegment#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject() {
        const object = super.toObject.call(this);
        for (let i = 0; i < ArcSegment.Properties.length; i++) {
            const k = ArcSegment.Properties[i];
            object[k] = this[k];
        }
        return object;
    }
}
/**
 * @name Two.ArcSegment.Properties
 * @property {String[]} - A list of properties that are on every {@link Two.ArcSegment}.
 */
ArcSegment.Properties = ['startAngle', 'endAngle', 'innerRadius', 'outerRadius'];
const proto = {
    startAngle: {
        enumerable: true,
        get: function () {
            return this._startAngle;
        },
        set: function (v) {
            this._startAngle = v;
            this._flagStartAngle = true;
        }
    },
    endAngle: {
        enumerable: true,
        get: function () {
            return this._endAngle;
        },
        set: function (v) {
            this._endAngle = v;
            this._flagEndAngle = true;
        }
    },
    innerRadius: {
        enumerable: true,
        get: function () {
            return this._innerRadius;
        },
        set: function (v) {
            this._innerRadius = v;
            this._flagInnerRadius = true;
        }
    },
    outerRadius: {
        enumerable: true,
        get: function () {
            return this._outerRadius;
        },
        set: function (v) {
            this._outerRadius = v;
            this._flagOuterRadius = true;
        }
    }
};

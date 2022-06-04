import { Events } from './events';
/**
 * @name Two.Vector
 * @class
 * @extends Two.Events
 * @param {Number} [x=0] - Any number to represent the horizontal x-component of the vector.
 * @param {Number} [y=0] - Any number to represent the vertical y-component of the vector.
 * @description A class to store x / y component vector data. In addition to storing data `Two.Vector` has suped up methods for commonplace mathematical operations.
 */
export declare class Vector extends Events {
    _x: number;
    _y: number;
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    constructor(x?: number, y?: number);
    /**
     * @name Two.Vector.zero
     * @readonly
     * @property {Two.Vector} - Handy reference to a vector with component values 0, 0 at all times.
     */
    static zero: Vector;
    /**
     * @name Two.Vector.left
     * @readonly
     * @property {Two.Vector} - Handy reference to a vector with component values -1, 0 at all times.
     */
    static left: Vector;
    /**
     * @name Two.Vector.right
     * @readonly
     * @property {Two.Vector} - Handy reference to a vector with component values 1, 0 at all times.
     */
    static right: Vector;
    /**
     * @name Two.Vector.up
     * @readonly
     * @property {Two.Vector} - Handy reference to a vector with component values 0, -1 at all times.
     */
    static up: Vector;
    /**
     * @name Two.Vector.down
     * @readonly
     * @property {Two.Vector} - Handy reference to a vector with component values 0, 1 at all times.
     */
    static down: Vector;
    /**
     * @name Two.Vector.add
     * @function
     * @param {Two.Vector} v1
     * @param {Two.Vector} v2
     * @returns {Two.Vector}
     * @description Add two vectors together.
     */
    static add(v1: any, v2: any): Vector;
    /**
     * @name Two.Vector.sub
     * @function
     * @param {Two.Vector} v1
     * @param {Two.Vector} v2
     * @returns {Two.Vector}
     * @description Subtract two vectors: `v2` from `v1`.
     */
    static sub(v1: any, v2: any): Vector;
    /**
     * @name Two.Vector.subtract
     * @function
     * @description Alias for {@link Two.Vector.sub}.
     */
    static subtract(v1: any, v2: any): Vector;
    /**
     * @name Two.Vector.ratioBetween
     * @function
     * @param {Two.Vector} v1
     * @param {Two.Vector} v2
     * @returns {Number} The ratio betwen two points `v1` and `v2`.
     */
    static ratioBetween(v1: any, v2: any): number;
    /**
     * @name Two.Vector.angleBetween
     * @function
     * @param {Two.Vector} v1
     * @param {Two.Vector} v2
     * @returns {Number} The angle between points `v1` and `v2`.
     */
    static angleBetween(v1: any, v2: any): number;
    /**
     * @name Two.Vector.distanceBetween
     * @function
     * @param {Two.Vector} v1
     * @param {Two.Vector} v2
     * @returns {Number} The distance between points `v1` and `v2`. Distance is always positive.
     */
    static distanceBetween(v1: any, v2: any): number;
    /**
     * @name Two.Vector.distanceBetweenSquared
     * @function
     * @param {Two.Vector} v1
     * @param {Two.Vector} v2
     * @returns {Number} The squared distance between points `v1` and `v2`.
     */
    static distanceBetweenSquared(v1: any, v2: any): number;
    set(x: any, y: any): this;
    /**
     * @name Two.Vector#copy
     * @function
     * @param {Two.Vector} v
     * @description Copy the x / y components of another object `v`.
     */
    copy(v: any): this;
    /**
     * @name Two.Vector#clear
     * @function
     * @description Set the x / y component values of the vector to zero.
     */
    clear(): this;
    /**
     * @name Two.Vector#clone
     * @function
     * @description Create a new vector and copy the existing values onto the newly created instance.
     */
    clone(): Vector;
    /**
     * @name Two.Vector#add
     * @function
     * @param {Two.Vector} v
     * @description Add an object with x / y component values to the instance.
     * @overloaded
     */
    /**
     * @name Two.Vector#add
     * @function
     * @param {Number} v
     * @description Add the **same** number to both x / y component values of the instance.
     * @overloaded
     */
    /**
     * @name Two.Vector#add
     * @function
     * @param {Number} x
     * @param {Number} y
     * @description Add `x` / `y` values to their respective component value on the instance.
     * @overloaded
     */
    add(x: any, y: any): this;
    /**
     * @name Two.Vector#addSelf
     * @function
     * @description Alias for {@link Two.Vector.add}.
     */
    addSelf(v: any): any;
    /**
     * @name Two.Vector#sub
     * @function
     * @param {Two.Vector} v
     * @description Subtract an object with x / y component values to the instance.
     * @overloaded
     */
    /**
     * @name Two.Vector#sub
     * @function
     * @param {Number} v
     * @description Subtract the **same** number to both x / y component values of the instance.
     * @overloaded
     */
    /**
     * @name Two.Vector#sub
     * @function
     * @param {Number} x
     * @param {Number} y
     * @description Subtract `x` / `y` values to their respective component value on the instance.
     * @overloaded
     */
    sub(x: any, y: any): this;
    /**
     * @name Two.Vector#subtract
     * @function
     * @description Alias for {@link Two.Vector.sub}.
     */
    subtract(): any;
    /**
     * @name Two.Vector#subSelf
     * @function
     * @description Alias for {@link Two.Vector.sub}.
     */
    subSelf(v: any): any;
    /**
     * @name Two.Vector#subtractSelf
     * @function
     * @description Alias for {@link Two.Vector.sub}.
     */
    subtractSelf(v: any): any;
    /**
     * @name Two.Vector#multiply
     * @function
     * @param {Two.Vector} v
     * @description Multiply an object with x / y component values to the instance.
     * @overloaded
     */
    /**
     * @name Two.Vector#multiply
     * @function
     * @param {Number} v
     * @description Multiply the **same** number to both x / y component values of the instance.
     * @overloaded
     */
    /**
     * @name Two.Vector#multiply
     * @function
     * @description Multiply `x` / `y` values to their respective component value on the instance.
     * @overloaded
     */
    multiply(x: number | {
        x: any;
        y: any;
    }, y?: number | null): this;
    /**
     * @name Two.Vector#multiplySelf
     * @function
     * @description Alias for {@link Two.Vector.multiply}.
     */
    multiplySelf(v: any): any;
    /**
     * @name Two.Vector#multiplyScalar
     * @function
     * @param {Number} s - The scalar to multiply by.
     * @description Mulitiply the vector by a single number. Shorthand to call {@link Two.Vector#multiply} directly.
     */
    multiplyScalar(s: any): this;
    /**
     * @name Two.Vector#divide
     * @function
     * @param {Two.Vector} v
     * @description Divide an object with x / y component values to the instance.
     * @overloaded
     */
    /**
     * @name Two.Vector#divide
     * @function
     * @param {Number} v
     * @description Divide the **same** number to both x / y component values of the instance.
     * @overloaded
     */
    /**
     * @name Two.Vector#divide
     * @function
     * @description Divide `x` / `y` values to their respective component value on the instance.
     * @overloaded
     */
    divide(x: number | {
        x: number;
        y: number;
    }, y?: number | null): this;
    /**
     * @name Two.Vector#divideSelf
     * @function
     * @description Alias for {@link Two.Vector.divide}.
     */
    divideSelf(v: any): any;
    /**
     * @name Two.Vector#divideScalar
     * @function
     * @param {Number} s - The scalar to divide by.
     * @description Divide the vector by a single number. Shorthand to call {@link Two.Vector#divide} directly.
     */
    divideScalar(s: any): this;
    /**
     * @name Two.Vector#negate
     * @function
     * @description Invert each component's sign value.
     */
    negate(): this;
    /**
     * @name Two.Vector#dot
     * @function
     * @returns {Number}
     * @description Get the [dot product](https://en.wikipedia.org/wiki/Dot_product) of the vector.
     */
    dot(v: any): number;
    /**
     * @name Two.Vector#length
     * @function
     * @returns {Number}
     * @description Get the length of a vector.
     */
    length(): number;
    /**
     * @name Two.Vector#lengthSquared
     * @function
     * @returns {Number}
     * @description Get the length of the vector to the power of two. Widely used as less expensive than {@link Two.Vector#length} because it isn't square-rooting any numbers.
     */
    lengthSquared(): number;
    /**
     * @name Two.Vector#normalize
     * @function
     * @description Normalize the vector from negative one to one.
     */
    normalize(): this;
    /**
     * @name Two.Vector#distanceTo
     * @function
     * @returns {Number}
     * @description Get the distance between two vectors.
     */
    distanceTo(v: any): number;
    /**
     * @name Two.Vector#distanceToSquared
     * @function
     * @returns {Number}
     * @description Get the distance between two vectors to the power of two. Widely used as less expensive than {@link Two.Vector#distanceTo} because it isn't square-rooting any numbers.
     */
    distanceToSquared(v: any): number;
    /**
     * @name Two.Vector#setLength
     * @function
     * @param {Number} l - length to set vector to.
     * @description Set the length of a vector.
     */
    setLength(l: any): this;
    /**
     * @name Two.Vector#equals
     * @function
     * @param {Two.Vector} v - The vector to compare against.
     * @param {Number} [eps=0.0001] - An options epsilon for precision.
     * @returns {Boolean}
     * @description Qualify if one vector roughly equal another. With a margin of error defined by epsilon.
     */
    equals(v: any, eps: any): boolean;
    /**
     * @name Two.Vector#lerp
     * @function
     * @param {Two.Vector} v - The destination vector to step towards.
     * @param {Number} t - The zero to one value of how close the current vector gets to the destination vector.
     * @description Linear interpolate one vector to another by an amount `t` defined as a zero to one number.
     * @see [Matt DesLauriers](https://twitter.com/mattdesl/status/1031305279227478016) has a good thread about this.
     */
    lerp(v: any, t: any): this;
    /**
     * @name Two.Vector#isZero
     * @function
     * @param {Number} [eps=0.0001] - Optional precision amount to check against.
     * @returns {Boolean}
     * @description Check to see if vector is roughly zero, based on the `epsilon` precision value.
     */
    isZero(eps: any): boolean;
    /**
     * @name Two.Vector#toString
     * @function
     * @returns {String}
     * @description Return a comma-separated string of x, y value. Great for storing in a database.
     */
    toString(): string;
    /**
     * @name Two.Vector#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the vector.
     */
    toObject(): {
        x: number;
        y: number;
    };
    /**
     * @name Two.Vector#rotate
     * @function
     * @param {Number} radians - The amount to rotate the vector by in radians.
     * @description Rotate a vector.
     */
    rotate(radians: any): this;
}

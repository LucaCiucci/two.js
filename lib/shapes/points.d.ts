/**
 * @name Two.Points
 * @class
 * @extends Two.Shape
 * @param {Two.Vector[]} [vertices] - A list of {@link Two.Vector}s that represent the order and coordinates to construct a rendered set of points.
 * @description This is a primary primitive class for quickly and easily drawing points in Two.js. Unless specified methods return their instance of `Two.Points` for the purpose of chaining.
 */
export class Points {
    static Properties: string[];
    constructor(vertices: any);
    _flagVertices: boolean;
    _flagLength: boolean;
    _flagFill: boolean;
    _flagStroke: boolean;
    _flagLinewidth: boolean;
    _flagOpacity: boolean;
    _flagVisible: boolean;
    _flagSize: boolean;
    _flagSizeAttenuation: boolean;
    _length: number;
    _fill: string;
    _stroke: string;
    _linewidth: number;
    _opacity: number;
    _visible: boolean;
    _size: number;
    _sizeAttenuation: boolean;
    _beginning: number;
    _ending: number;
    _dashes: any;
    /**
     * @name Two.Points#sizeAttenuation
     * @property {Boolean} - Boolean dictating whether Two.js should scale the size of the points based on its matrix hierarcy.
     * @description Set to `true` if you'd like the size of the points to be relative to the scale of its parents; `false` to disregard. Default is `false`.
     */
    sizeAttenuation: boolean;
    /**
     * @name Two.Points#beginning
     * @property {Number} - Number between zero and one to state the beginning of where the path is rendered.
     * @description {@link Two.Points#beginning} is a percentage value that represents at what percentage into the path should the renderer start drawing.
     */
    beginning: number;
    /**
     * @name Two.Points#ending
     * @property {Number} - Number between zero and one to state the ending of where the path is rendered.
     * @description {@link Two.Points#ending} is a percentage value that represents at what percentage into the path should the renderer start drawing.
     */
    ending: number;
    /**
     * @name Two.Points#fill
     * @property {(String|Two.Gradient|Two.Texture)} - The value of what the path should be filled in with.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    fill: string;
    /**
     * @name Two.Points#stroke
     * @property {(String|Two.Gradient|Two.Texture)} - The value of what the path should be outlined in with.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    stroke: string;
    /**
     * @name Two.Points#className
     * @property {String} - A class to be applied to the element to be compatible with CSS styling.
     * @nota-bene Only available for the SVG renderer.
     */
    className: string;
    /**
     * @name Two.Points#visible
     * @property {Boolean} - Display the points or not.
     * @nota-bene For {@link Two.CanvasRenderer} and {@link Two.WebGLRenderer} when set to false all updating is disabled improving performance dramatically with many objects in the scene.
     */
    visible: boolean;
    /**
     * @name Two.Points#vertices
     * @property {Two.Vector[]} - An ordered list of vector points for rendering points.
     * @description A list of {@link Two.Vector} objects that consist of which coordinates to draw points at.
     * @nota-bene The array when manipulating is actually a {@link Two.Collection}.
     */
    vertices: any;
    /**
     * @name Two.Points#dashes
     * @property {Number[]} - Array of numbers. Odd indices represent dash length. Even indices represent dash space.
     * @description A list of numbers that represent the repeated dash length and dash space applied to the stroke of the text.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray} for more information on the SVG stroke-dasharray attribute.
     */
    dashes: any[];
    /**
     * @name Two.Points#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Points}
     * @description Create a new instance of {@link Two.Points} with the same properties of the current path.
     */
    clone(parent?: Two.Group): Two.Points;
    /**
     * @name Two.Points#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the points object.
     */
    toObject(): any;
    /**
     * @name Two.Points#noFill
     * @function
     * @description Short hand method to set fill to `transparent`.
     */
    noFill: () => Path;
    /**
     * @name Two.Points#noStroke
     * @function
     * @description Short hand method to set stroke to `transparent`.
     */
    noStroke: () => Path;
    /**
     * @name Two.Points#corner
     * @function
     * @description Orient the vertices of the shape to the upper left-hand corner of the points object.
     */
    corner: () => Path;
    /**
     * @name Two.Points#center
     * @function
     * @description Orient the vertices of the shape to the center of the points object.
     */
    center: () => Path;
    /**
     * @name Two.Points#getBoundingClientRect
     * @function
     * @param {Boolean} [shallow=false] - Describes whether to calculate off local matrix or world matrix.
     * @returns {Object} - Returns object with top, left, right, bottom, width, height attributes.
     * @description Return an object with top, left, right, bottom, width, and height parameters of the path.
     */
    getBoundingClientRect: (shallow?: boolean) => any;
    /**
     * @name Two.Points#subdivide
     * @function
     * @param {Number} limit - How many times to recurse subdivisions.
     * @description Insert a {@link Two.Vector} at the midpoint between every item in {@link Two.Points#vertices}.
     */
    subdivide(limit: number): Points;
    /**
     * @name Two.Points#_updateLength
     * @function
     * @private
     * @param {Number} [limit] -
     * @param {Boolean} [silent=false] - If set to `true` then the points object isn't updated before calculation. Useful for internal use.
     * @description Recalculate the {@link Two.Points#length} value.
     */
    private _updateLength;
    /**
     * @name Two.Points#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Points#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}
import { Path } from "../path.js";

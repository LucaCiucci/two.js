/**
 * @name Two.Shape
 * @class
 * @extends Two.Element
 * @description The foundational transformation object for the Two.js scenegraph.
 */
export class Shape {
    /**
     * @name Two.Shape#_flagMatrix
     * @private
     * @property {Boolean} - Determines whether the matrix needs updating.
     */
    private _flagMatrix;
    /**
     * @name Two.Shape#_flagScale
     * @private
     * @property {Boolean} - Determines whether the scale needs updating.
     */
    private _flagScale;
    /**
     * @name Two.Shape#_matrix
     * @private
     * @property {Two.Matrix} - The matrix value of the shape's position, rotation, and scale.
     */
    private _matrix;
    /**
     * @name Two.Shape#_worldMatrix
     * @private
     * @property {Two.Matrix} - The matrix value of the shape's position, rotation, and scale in the scene.
     */
    private _worldMatrix;
    /**
     * @name Two.Shape#_position
     * @private
     * @property {Two.Vector} - The translation values as a {@link Two.Vector}.
     */
    private _position;
    /**
     * @name Two.Shape#_rotation
     * @private
     * @property {Number} - The rotation value in Number.
     */
    private _rotation;
    /**
     * @name Two.Shape#_scale
     * @private
     * @property {Number|Two.Vector} - The scale value in Number. Can be a vector for non-uniform scaling.
     */
    private _scale;
    /**
     * @name Two.Shape#_skewX
     * @private
     * @property {Number} - The rotation value in Number.
     */
    private _skewX;
    /**
     * @name Two.Shape#_skewY
     * @private
     * @property {Number} - The rotation value in Number.
     */
    private _skewY;
    isShape: boolean;
    /**
     * @name Two.Shape#id
     * @property {String} - Session specific unique identifier.
     * @nota-bene In the {@link Two.SvgRenderer} change this to change the underlying SVG element's id too.
     */
    id: string;
    /**
     * @name Two.Shape#matrix
     * @property {Two.Matrix}
     * @description The transformation matrix of the shape.
     * @nota-bene {@link Two.Shape#position}, {@link Two.Shape#rotation}, {@link Two.Shape#scale}, {@link Two.Shape#skewX}, and {@link Two.Shape#skewY} apply their values to the matrix when changed. The matrix is what is sent to the renderer to be drawn.
     */
    matrix: Matrix;
    /**
     * @name Two.Shape#worldMatrix
     * @property {Two.Matrix}
     * @description The transformation matrix of the shape in the scene.
     */
    worldMatrix: Matrix;
    /**
     * @name Two.Shape#position
     * @property {Two.Vector} - The x and y value for where the shape is placed relative to its parent.
     */
    position: Vector;
    /**
     * @name Two.Shape#rotation
     * @property {Number} - The value in Number for how much the shape is rotated relative to its parent.
     */
    rotation: number;
    /**
     * @name Two.Shape#scale
     * @property {Number} - The value for how much the shape is scaled relative to its parent.
     * @nota-bene This value can be replaced with a {@link Two.Vector} to do non-uniform scaling. e.g: `shape.scale = new Two.Vector(2, 1);`
     */
    scale: number;
    /**
     * @name Two.Shape#skewX
     * @property {Number} - The value in Number for how much the shape is skewed relative to its parent.
     * @description Skew the shape by an angle in the x axis direction.
     */
    skewX: number;
    /**
     * @name Two.Shape#skewY
     * @property {Number} - The value in Number for how much the shape is skewed relative to its parent.
     * @description Skew the shape by an angle in the y axis direction.
     */
    skewY: number;
    set renderer(arg: any);
    get renderer(): any;
    _renderer: any;
    set translation(arg: any);
    /**
     * @name Two.Shape#translation
     * @description Alias for {@link Two.Shape#position}.
     */
    get translation(): any;
    /**
     * @name Two.Shape#addTo
     * @function
     * @param {Two.Group} group - The parent the shape adds itself to.
     * @description Convenience method to add itself to the scenegraph.
     */
    addTo(group: Two.Group): Shape;
    /**
     * @name Two.Shape#remove
     * @function
     * @description Remove self from the scene / parent.
     */
    remove(): Shape;
    /**
     * @name Two.Shape#clone
     * @function
     * @param {Two.Group} [parent] - Optional argument to automatically add the shape to a scenegraph.
     * @returns {Two.Shape}
     * @description Create a new {@link Two.Shape} with the same values as the current shape.
     */
    clone(parent?: Two.Group): Two.Shape;
    /**
     * @name Two.Shape#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Shape#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}
import { Matrix } from "./matrix.js";
import { Vector } from "./vector.js";

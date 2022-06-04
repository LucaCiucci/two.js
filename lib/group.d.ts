/**
 * @name Two.Group
 * @class
 * @extends Two.Shape
 * @param {Two.Shape[]} [children] - A list of objects that inherit {@link Two.Shape}. For instance, the array could be a {@link Two.Path}, {@link Two.Text}, and {@link Two.RoundedRectangle}.
 * @description This is the primary class for grouping objects that are then drawn in Two.js. In Illustrator this is a group, in After Effects it would be a Null Object. Whichever the case, the `Two.Group` contains a transformation matrix and commands to style its children, but it by itself doesn't render to the screen.
 * @nota-bene The {@link Two#scene} is an instance of `Two.Group`.
 */
export class Group {
    static Children: typeof Children;
    /**
     * @name Two.Group.InsertChildren
     * @function
     * @param {Two.Shape[]} children - The objects to be inserted.
     * @description Cached method to let renderers know children have been added to a {@link Two.Group}.
     */
    static InsertChildren(children: Two.Shape[]): void;
    /**
     * @name Two.Group.RemoveChildren
     * @function
     * @param {Two.Shape[]} children - The objects to be removed.
     * @description Cached method to let renderers know children have been removed from a {@link Two.Group}.
     */
    static RemoveChildren(children: Two.Shape[]): void;
    /**
     * @name Two.Group.OrderChildren
     * @function
     * @description Cached method to let renderers know order has been updated on a {@link Two.Group}.
     */
    static OrderChildren(children: any): void;
    /**
     * @name Two.Group.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Group}.
     */
    static Properties: string[];
    constructor(children: any, ...args: any[]);
    /**
     * @name Two.Group#_flagAdditions
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#additions} needs updating.
     */
    private _flagAdditions;
    /**
     * @name Two.Group#_flagSubtractions
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#subtractions} needs updating.
     */
    private _flagSubtractions;
    /**
     * @name Two.Group#_flagOrder
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#order} needs updating.
     */
    private _flagOrder;
    /**
     * @name Two.Group#_flagVisible
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#visible} needs updating.
     */
    /**
     * @name Two.Group#_flagOpacity
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#opacity} needs updating.
     */
    private _flagOpacity;
    /**
     * @name Two.Group#_flagBeginning
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#beginning} needs updating.
     */
    private _flagBeginning;
    /**
     * @name Two.Group#_flagEnding
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#ending} needs updating.
     */
    private _flagEnding;
    /**
     * @name Two.Group#_flagLength
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#length} needs updating.
     */
    private _flagLength;
    /**
     * @name Two.Group#_flagMask
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#mask} needs updating.
     */
    private _flagMask;
    /**
     * @name Two.Group#fill
     * @property {(String|Two.Gradient|Two.Texture)} - The value of what all child shapes should be filled in with.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    _fill: string;
    /**
     * @name Two.Group#stroke
     * @property {(String|Two.Gradient|Two.Texture)} - The value of what all child shapes should be outlined in with.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    _stroke: string;
    /**
     * @name Two.Group#linewidth
     * @property {Number} - The thickness in pixels of the stroke for all child shapes.
     */
    _linewidth: number;
    /**
     * @name Two.Group#opacity
     * @property {Number} - The opaqueness of all child shapes.
     * @nota-bene Becomes multiplied by the individual child's opacity property.
     */
    _opacity: number;
    /**
     * @name Two.Group#visible
     * @property {Boolean} - Display the path or not.
     * @nota-bene For {@link Two.CanvasRenderer} and {@link Two.WebGLRenderer} when set to false all updating is disabled improving performance dramatically with many objects in the scene.
     */
    _visible: boolean;
    /**
     * @name Two.Group#cap
     * @property {String}
     * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty}
     */
    _cap: string;
    /**
     * @name Two.Group#join
     * @property {String}
     * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeLinejoinProperty}
     */
    _join: string;
    /**
     * @name Two.Group#miter
     * @property {String}
     * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeMiterlimitProperty}
     */
    _miter: number;
    /**
     * @name Two.Group#closed
     * @property {Boolean} - Determines whether a final line is drawn between the final point in the `vertices` array and the first point of all child shapes.
     */
    _closed: boolean;
    /**
     * @name Two.Group#curved
     * @property {Boolean} - When the child's path is `automatic = true` this boolean determines whether the lines between the points are curved or not.
     */
    _curved: boolean;
    /**
     * @name Two.Group#automatic
     * @property {Boolean} - Determines whether or not Two.js should calculate curves, lines, and commands automatically for you or to let the developer manipulate them for themselves.
     */
    _automatic: boolean;
    /**
     * @name Two.Group#beginning
     * @property {Number} - Number between zero and one to state the beginning of where the path is rendered.
     * @description {@link Two.Group#beginning} is a percentage value that represents at what percentage into all child shapes should the renderer start drawing.
     * @nota-bene This is great for animating in and out stroked paths in conjunction with {@link Two.Group#ending}.
     */
    _beginning: number;
    /**
     * @name Two.Group#ending
     * @property {Number} - Number between zero and one to state the ending of where the path is rendered.
     * @description {@link Two.Group#ending} is a percentage value that represents at what percentage into all child shapes should the renderer start drawing.
     * @nota-bene This is great for animating in and out stroked paths in conjunction with {@link Two.Group#beginning}.
     */
    _ending: number;
    /**
     * @name Two.Group#length
     * @property {Number} - The sum of distances between all child lengths.
     */
    _length: number;
    /**
     * @name Two.Group#mask
     * @property {Two.Shape} - The Two.js object to clip from a group's rendering.
     */
    _mask: any;
    /**
     * @name Two.Group#additions
     * @property {Two.Shape[]}
     * @description An automatically updated list of children that need to be appended to the renderer's scenegraph.
     */
    additions: any[];
    /**
     * @name Two.Group#subtractions
     * @property {Two.Shape[]}
     * @description An automatically updated list of children that need to be removed from the renderer's scenegraph.
     */
    subtractions: any[];
    /**
     * @name Two.Group#children
     * @property {Two.Group.Children}
     * @description A list of all the children in the scenegraph.
     * @nota-bene Ther order of this list indicates the order each element is rendered to the screen.
     */
    children: any;
    /**
     * @name Two.Group#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Group}
     * @description Create a new instance of {@link Two.Group} with the same properties of the current group.
     */
    clone(parent?: Two.Group): Two.Group;
    /**
     * @name Two.Group#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the group.
     */
    toObject(): any;
    /**
     * @name Two.Group#corner
     * @function
     * @description Orient the children of the group to the upper left-hand corner of that group.
     */
    corner(): Group;
    /**
     * @name Two.Group#center
     * @function
     * @description Orient the children of the group to the center of that group.
     */
    center(): Group;
    /**
     * @name Two.Group#getById
     * @function
     * @description Recursively search for id. Returns the first element found.
     * @returns {Two.Shape} - Or `null` if nothing is found.
     */
    getById(id: any): Two.Shape;
    /**
     * @name Two.Group#getByClassName
     * @function
     * @description Recursively search for classes. Returns an array of matching elements.
     * @returns {Two.Shape[]} - Or empty array if nothing is found.
     */
    getByClassName(className: any): Two.Shape[];
    /**
     * @name Two.Group#getByType
     * @function
     * @description Recursively search for children of a specific type, e.g. {@link Two.Path}. Pass a reference to this type as the param. Returns an array of matching elements.
     * @returns {Two.Shape[]} - Empty array if nothing is found.
     */
    getByType(type: any): Two.Shape[];
    /**
     * @name Two.Group#add
     * @function
     * @param {Two.Shape[]|...Two.Shape} objects - An array of objects to be added. Can also be supplied as individual arguments.
     * @description Add objects to the group.
     */
    add(objects: any, ...args: any[]): Group;
    /**
     * @name Two.Group#remove
     * @function
     * @param {Two.Shape[]|...Two.Shape} [objects=self] - An array of objects to be removed. Can be also removed as individual arguments. If no arguments are passed, then it removes itself from its parent.
     * @description Remove objects from the group.
     */
    remove(objects: any, ...args: any[]): Group;
    /**
     * @name Two.Group#getBoundingClientRect
     * @function
     * @param {Boolean} [shallow=false] - Describes whether to calculate off local matrix or world matrix.
     * @returns {Object} - Returns object with top, left, right, bottom, width, height attributes.
     * @description Return an object with top, left, right, bottom, width, and height parameters of the group.
     */
    getBoundingClientRect(shallow?: boolean): any;
    /**
     * @name Two.Group#noFill
     * @function
     * @description Apply `noFill` method to all child shapes.
     */
    noFill(): Group;
    /**
     * @name Two.Group#noStroke
     * @function
     * @description Apply `noStroke` method to all child shapes.
     */
    noStroke(): Group;
    /**
     * @name Two.Group#subdivide
     * @function
     * @description Apply `subdivide` method to all child shapes.
     */
    subdivide(...args: any[]): Group;
    /**
     * @name Two.Group#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Group#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}
import { Children } from "./children.js";

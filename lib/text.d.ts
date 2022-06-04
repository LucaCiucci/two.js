/**
 * @name Two.Text
 * @class
 * @extends Two.Shape
 * @param {String} [message] - The String to be rendered to the scene.
 * @param {Number} [x=0] - The position in the x direction for the object.
 * @param {Number} [y=0] - The position in the y direction for the object.
 * @param {Object} [styles] - An object where styles are applied. Attribute must exist in Two.Text.Properties.
 * @description This is a primitive class for creating drawable text that can be added to the scenegraph.
 * @returns {Two.Text}
 */
export class Text {
    /**
     * @name Two.Text.Ratio
     * @property {Number} - Approximate aspect ratio of a typeface's character width to height.
     */
    static Ratio: number;
    /**
     * @name Two.Text.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Text}.
     */
    static Properties: string[];
    constructor(message: any, x: any, y: any, styles: any);
    /**
     * @name Two.Text#_flagValue
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#value} need updating.
     */
    private _flagValue;
    /**
     * @name Two.Text#_flagFamily
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#family} need updating.
     */
    private _flagFamily;
    /**
     * @name Two.Text#_flagSize
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#size} need updating.
     */
    private _flagSize;
    /**
     * @name Two.Text#_flagLeading
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#leading} need updating.
     */
    private _flagLeading;
    /**
     * @name Two.Text#_flagAlignment
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#alignment} need updating.
     */
    private _flagAlignment;
    /**
     * @name Two.Text#_flagBaseline
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#baseline} need updating.
     */
    private _flagBaseline;
    /**
     * @name Two.Text#_flagStyle
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#style} need updating.
     */
    private _flagStyle;
    /**
     * @name Two.Text#_flagWeight
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#weight} need updating.
     */
    private _flagWeight;
    /**
     * @name Two.Text#_flagDecoration
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#decoration} need updating.
     */
    private _flagDecoration;
    /**
     * @name Two.Text#_flagFill
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#fill} need updating.
     */
    private _flagFill;
    /**
     * @name Two.Text#_flagStroke
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#stroke} need updating.
     */
    private _flagStroke;
    /**
     * @name Two.Text#_flagLinewidth
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#linewidth} need updating.
     */
    private _flagLinewidth;
    /**
     * @name Two.Text#_flagOpacity
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#opacity} need updating.
     */
    private _flagOpacity;
    /**
     * @name Two.Text#_flagVisible
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#visible} need updating.
     */
    private _flagVisible;
    /**
     * @name Two.Path#_flagMask
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Path#mask} needs updating.
     */
    private _flagMask;
    /**
     * @name Two.Text#_flagClip
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Text#clip} need updating.
     */
    private _flagClip;
    /**
     * @name Two.Text#value
     * @property {String} - The characters to be rendered to the the screen. Referred to in the documentation sometimes as the `message`.
     */
    _value: string;
    /**
     * @name Two.Text#family
     * @property {String} - The font family Two.js should attempt to regsiter for rendering. The default value is `'sans-serif'`. Comma separated font names can be supplied as a "stack", similar to the CSS implementation of `font-family`.
     */
    _family: string;
    /**
     * @name Two.Text#size
     * @property {Number} - The font size in Two.js point space. Defaults to `13`.
     */
    _size: number;
    /**
     * @name Two.Text#leading
     * @property {Number} - The height between lines measured from base to base in Two.js point space. Defaults to `17`.
     */
    _leading: number;
    /**
     * @name Two.Text#alignment
     * @property {String} - Alignment of text in relation to {@link Two.Text#translation}'s coordinates. Possible values include `'left'`, `'center'`, `'right'`. Defaults to `'center'`.
     */
    _alignment: string;
    /**
     * @name Two.Text#baseline
     * @property {String} - The vertical aligment of the text in relation to {@link Two.Text#translation}'s coordinates. Possible values include `'top'`, `'middle'`, `'bottom'`, and `'baseline'`. Defaults to `'baseline'`.
     */
    _baseline: string;
    /**
     * @name Two.Text#style
     * @property {String} - The font's style. Possible values include '`normal`', `'italic'`. Defaults to `'normal'`.
     */
    _style: string;
    /**
     * @name Two.Text#weight
     * @property {Number} - A number at intervals of 100 to describe the font's weight. This compatibility varies with the typeface's variant weights. Larger values are bolder. Smaller values are thinner. Defaults to `'500'`.
     */
    _weight: number;
    /**
     * @name Two.Text#decoration
     * @property {String} - String to delineate whether text should be decorated with for instance an `'underline'`. Defaults to `'none'`.
     */
    _decoration: string;
    /**
     * @name Two.Text#fill
     * @property {(String|Two.Gradient|Two.Texture)} - The value of what the text object should be filled in with.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    _fill: string;
    /**
     * @name Two.Text#stroke
     * @property {(String|Two.Gradient|Two.Texture)} - The value of what the text object should be filled in with.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    _stroke: string;
    /**
     * @name Two.Text#linewidth
     * @property {Number} - The thickness in pixels of the stroke.
     */
    _linewidth: number;
    /**
     * @name Two.Text#opacity
     * @property {Number} - The opaqueness of the text object.
     * @nota-bene Can be used in conjunction with CSS Colors that have an alpha value.
     */
    _opacity: number;
    /**
     * @name Two.Text#visible
     * @property {Boolean} - Display the text object or not.
     * @nota-bene For {@link Two.CanvasRenderer} and {@link Two.WebGLRenderer} when set to false all updating is disabled improving performance dramatically with many objects in the scene.
     */
    _visible: boolean;
    /**
     * @name Two.Text#mask
     * @property {Two.Shape} - The shape whose alpha property becomes a clipping area for the text.
     * @nota-bene This property is currently not working becuase of SVG spec issues found here {@link https://code.google.com/p/chromium/issues/detail?id=370951}.
     */
    _mask: any;
    /**
     * @name Two.Text#clip
     * @property {Two.Shape} - Object to define clipping area.
     * @nota-bene This property is currently not working becuase of SVG spec issues found here {@link https://code.google.com/p/chromium/issues/detail?id=370951}.
     */
    _clip: boolean;
    /**
     * @name Two.Text#_dashes
     * @private
     * @see {@link Two.Text#dashes}
     */
    private _dashes;
    value: any;
    /**
     * @name Two.Text#dashes
     * @property {Number[]} - Array of numbers. Odd indices represent dash length. Even indices represent dash space.
     * @description A list of numbers that represent the repeated dash length and dash space applied to the stroke of the text.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray} for more information on the SVG stroke-dasharray attribute.
     */
    dashes: any[];
    /**
     * @name Two.Text#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Text}
     * @description Create a new instance of {@link Two.Text} with the same properties of the current text object.
     */
    clone(parent?: Two.Group): Two.Text;
    /**
     * @name Two.Text#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the text object.
     */
    toObject(): any;
    /**
     * @name Two.Text#noFill
     * @function
     * @description Short hand method to set fill to `transparent`.
     */
    noFill(): Text;
    fill: string;
    /**
     * @name Two.Text#noStroke
     * @function
     * @description Short hand method to set stroke to `transparent`.
     */
    noStroke(): Text;
    stroke: any;
    linewidth: any;
    /**
     * @name Two.Text#getBoundingClientRect
     * @function
     * @param {Boolean} [shallow=false] - Describes whether to calculate off local matrix or world matrix.
     * @returns {Object} - Returns object with top, left, right, bottom, width, height attributes.
     * @description Return an object with top, left, right, bottom, width, and height parameters of the text object.
     */
    getBoundingClientRect(shallow?: boolean): any;
    /**
     * @name Two.Text#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
    _flagClassName: boolean;
}

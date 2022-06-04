/**
 * @name Two.Texture
 * @class
 * @extends Two.Element
 * @param {String|HTMLImageElement} [src] - The URL path to an image file or an `<img />` element.
 * @param {Function} [callback] - An optional callback function once the image has been loaded.
 * @description Fundamental to work with bitmap data, a.k.a. pregenerated imagery, in Two.js. Supported formats include jpg, png, gif, and tiff. See {@link Two.Texture.RegularExpressions} for a full list of supported formats.
 */
export class Texture {
    /**
     * @name Two.Texture.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Texture}.
     */
    static Properties: string[];
    /**
     * @name Two.Texture.RegularExpressions
     * @property {Object} - A map of compatible DOM Elements categorized by media format.
     */
    static RegularExpressions: {
        video: RegExp;
        image: RegExp;
        effect: RegExp;
    };
    /**
     * @name Two.Texture.ImageRegistry
     * @property {Two.Registry} - A canonical listing of image data used in a single session of Two.js.
     * @nota-bene This object is used to cache image data between different textures.
     */
    static ImageRegistry: Registry;
    /**
     * @name Two.Texture.getAbsoluteURL
     * @property {Function} - Serializes a URL as an absolute path for canonical attribution in {@link Two.ImageRegistry}.
     * @param {String} path
     * @returns {String} - The serialized absolute path.
     */
    static getAbsoluteURL(path: string): string;
    /**
     * @name Two.Texture.loadHeadlessBuffer
     * @property {Function} - Loads an image as a buffer in headless environments.
     * @param {Two.Texture} texture - The {@link Two.Texture} to be loaded.
     * @param {Function} loaded - The callback function to be triggered once the image is loaded.
     * @nota-bene - This function uses node's `fs.readFileSync` to spoof the `<img />` loading process in the browser.
     */
    static loadHeadlessBuffer(texture: Two.Texture, loaded: Function): void;
    /**
     * @name Two.Texture.getTag
     * @property {Function} - Retrieves the tag name of an image, video, or canvas node.
     * @param {HTMLImageElement} image - The image to infer the tag name from.
     * @returns {String} - Returns the tag name of an image, video, or canvas node.
     */
    static getTag(image: HTMLImageElement): string;
    /**
     * @name Two.Texture.getImage
     * @property {Function} - Convenience function to set {@link Two.Texture#image} properties with canonincal versions set in {@link Two.Texture.ImageRegistry}.
     * @param {String} src - The URL path of the image.
     * @returns {HTMLImageElement} - Returns either a cached version of the image or a new one that is registered in {@link Two.Texture.ImageRegistry}.
     */
    static getImage(src: string): HTMLImageElement;
    /**
     * @name Two.Register
     * @interface
     * @description A collection of functions to register different types of textures. Used internally by a {@link Two.Texture}.
     */
    static Register: {
        canvas: (texture: any, callback: any) => void;
        img: (texture: any, callback: any) => void;
        video: (texture: any, callback: any) => void;
    };
    /**
     * @name Two.Texture.load
     * @function
     * @param {Two.Texture} texture - The texture to load.
     * @param {Function} callback - The function to be called once the texture is loaded.
     */
    static load(texture: Two.Texture, callback: Function): void;
    constructor(src: any, callback: any);
    /**
     * @name Two.Texture#_flagSrc
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Texture#src} needs updating.
     */
    private _flagSrc;
    /**
     * @name Two.Texture#_flagImage
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Texture#image} needs updating.
     */
    private _flagImage;
    /**
     * @name Two.Texture#_flagVideo
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Texture#video} needs updating.
     */
    private _flagVideo;
    /**
     * @name Two.Texture#_flagLoaded
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Texture#loaded} needs updating.
     */
    private _flagLoaded;
    /**
     * @name Two.Texture#_flagRepeat
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Texture#repeat} needs updating.
     */
    private _flagRepeat;
    /**
     * @name Two.Texture#_flagOffset
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Texture#offset} needs updating.
     */
    private _flagOffset;
    /**
     * @name Two.Texture#_flagScale
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Texture#scale} needs updating.
     */
    private _flagScale;
    /**
     * @name Two.Texture#_src
     * @private
     * @see {@link Two.Texture#src}
     */
    private _src;
    /**
     * @name Two.Texture#_image
     * @private
     * @see {@link Two.Texture#image}
     */
    private _image;
    /**
     * @name Two.Texture#_loaded
     * @private
     * @see {@link Two.Texture#loaded}
     */
    private _loaded;
    /**
     * @name Two.Texture#_repeat
     * @private
     * @see {@link Two.Texture#repeat}
     */
    private _repeat;
    /**
     * @name Two.Texture#_scale
     * @private
     * @see {@link Two.Texture#scale}
     */
    private _scale;
    /**
     * @name Two.Texture#_offset
     * @private
     * @see {@link Two.Texture#offset}
     */
    private _offset;
    _renderer: {};
    id: string;
    classList: any[];
    /**
     * @name Two.Texture#loaded
     * @property {Boolean} - Shorthand value to determine if image has been loaded into the texture.
     */
    loaded: boolean;
    /**
     * @name Two.Texture#repeat
     * @property {String} - CSS style declaration to tile {@link Two.Path}. Valid values include: `'no-repeat'`, `'repeat'`, `'repeat-x'`, `'repeat-y'`.
     * @see {@link https://www.w3.org/TR/2dcontext/#dom-context-2d-createpattern}
     */
    repeat: string;
    /**
     * @name Two.Texture#offset
     * @property {Two.Vector} - A two-component vector describing any pixel offset of the texture when applied to a {@link Two.Path}.
     */
    offset: Vector;
    src: string;
    /**
     * @name Two.Texture#image
     * @property {Element} - The corresponding DOM Element of the texture. Can be a `<img />`, `<canvas />`, or `<video />` element. See {@link Two.Texture.RegularExpressions} for a full list of supported elements.
     * @nota-bene In headless environments this is a `Canvas.Image` object. See {@link https://github.com/Automattic/node-canvas} for more information on headless image objects.
     */
    image: any;
    /**
     * @name Two.Texture#clone
     * @function
     * @returns {Two.Texture}
     * @description Create a new instance of {@link Two.Texture} with the same properties of the current texture.
     */
    clone(): Two.Texture;
    /**
     * @name Two.Texture#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the texture.
     */
    toObject(): any;
    /**
     * @name Two.Texture#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    /**
     * @name Two.Texture#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}
import { Vector } from "../vector.js";
import { Registry } from "../registry.js";

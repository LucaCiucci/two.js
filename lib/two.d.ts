/**
 * @name Two
 * @class
 * @global
 * @extends Two.Events
 * @param {Object} [options]
 * @param {Boolean} [options.fullscreen=false] - Set to `true` to automatically make the stage adapt to the width and height of the parent document. This parameter overrides `width` and `height` parameters if set to `true`. This overrides `options.fitted` as well.
 * @param {Boolean} [options.fitted=false] - Set to `true` to automatically make the stage adapt to the width and height of the parent element. This parameter overrides `width` and `height` parameters if set to `true`.
 * @param {Number} [options.width=640] - The width of the stage on construction. This can be set at a later time.
 * @param {Number} [options.height=480] - The height of the stage on construction. This can be set at a later time.
 * @param {String} [options.type=Two.Types.svg] - The type of renderer to setup drawing with. See {@link Two.Types} for available options.
 * @param {Boolean} [options.autostart=false] - Set to `true` to add the instance to draw on `requestAnimationFrame`. This is a convenient substitute for {@link Two#play}.
 * @param {Element} [options.domElement] - The canvas or SVG element to draw into. This overrides the `options.type` argument.
 * @description The entrypoint for Two.js. Instantiate a `new Two` in order to setup a scene to render to. `Two` is also the publicly accessible namespace that all other sub-classes, functions, and utilities attach to.
 */
export default class Two {
    static nextFrameID: any;
    /**
     * @name Two.Types
     * @property {Object} - The different rendering types available in the library.
     */
    static Types: {
        webgl: string;
        svg: string;
        canvas: string;
    };
    /**
     * @name Two.Version
     * @property {String} - The current working version of the library, `$version`.
     */
    static Version: string;
    /**
     * @name Two.PublishDate
     * @property {String} - The automatically generated publish date in the build process to verify version release candidates.
     */
    static PublishDate: string;
    /**
     * @name Two.Identifier
     * @property {String} - String prefix for all Two.js object's ids. This trickles down to SVG ids.
     */
    static Identifier: string;
    /**
     * @name Two.Resolution
     * @property {Number} - Default amount of vertices to be used for interpreting Arcs and ArcSegments.
     */
    static Resolution: number;
    /**
     * @name Two.AutoCalculateImportedMatrices
     * @property {Boolean} - When importing SVGs through the {@link Two#interpret} and {@link Two#load}, this boolean determines whether Two.js infers and then overrides the exact transformation matrix of the reference SVG.
     * @nota-bene `false` copies the exact transformation matrix values, but also sets the path's `matrix.manual = true`.
     */
    static AutoCalculateImportedMatrices: boolean;
    /**
     * @name Two.Instances
     * @property {Two[]} - Registered list of all Two.js instances in the current session.
     */
    static Instances: any[];
    /**
     * @function Two.uniqueId
     * @description Simple method to access an incrementing value. Used for `id` allocation on all Two.js objects.
     * @returns {Number} Ever increasing Number.
     */
    static uniqueId: () => number;
    static Anchor: typeof Anchor;
    static Collection: typeof Collection;
    static Events: typeof Events;
    static Group: typeof Group;
    static Matrix: typeof Matrix;
    static Path: typeof Path;
    static Registry: typeof Registry;
    static Shape: typeof Shape;
    static Text: typeof Text;
    static Vector: typeof Vector;
    static Gradient: typeof Gradient;
    static ImageSequence: typeof ImageSequence;
    static LinearGradient: typeof LinearGradient;
    static RadialGradient: typeof RadialGradient;
    static Sprite: typeof Sprite;
    static Stop: typeof Stop;
    static Texture: typeof Texture;
    static ArcSegment: typeof ArcSegment;
    static Circle: typeof Circle;
    static Ellipse: typeof Ellipse;
    static Line: typeof Line;
    static Points: typeof Points;
    static Polygon: typeof Polygon;
    static Rectangle: typeof Rectangle;
    static RoundedRectangle: typeof RoundedRectangle;
    static Star: typeof Star;
    static CanvasRenderer: typeof CanvasRenderer;
    static SVGRenderer: typeof SVGRenderer;
    static WebGLRenderer: typeof WebGLRenderer;
    static Commands: {
        move: string;
        line: string;
        curve: string;
        arc: string;
        close: string;
    };
    /**
     * @name Two.Utils
     * @property {Object} Utils - A massive object filled with utility functions and properties.
     * @property {Object} Two.Utils.read - A collection of SVG parsing functions indexed by element name.
     * @property {Function} Two.Utils.read.path - Parse SVG path element or `d` attribute string.
     */
    static Utils: any;
    constructor(options: any);
    /**
     * @private
     */
    private _events;
    set _bound(arg: boolean);
    get _bound(): boolean;
    addEventListener(...args: any[]): any;
    on(...args: any[]): any;
    bind(...args: any[]): any;
    removeEventListener(...args: any[]): any;
    off(...args: any[]): any;
    unbind(...args: any[]): any;
    dispatchEvent(...args: any[]): any;
    trigger(...args: any[]): any;
    listen(...args: any[]): any;
    ignore(...args: any[]): any;
    /**
     * @name Two#type
     * @property {String} - A string representing which type of renderer the instance has instantiated.
     */
    type: string;
    /**
     * @name Two#renderer
     * @property {(Two.SVGRenderer|Two.CanvasRenderer|Two.WebGLRenderer)} - The instantiated rendering class for the instance. For a list of possible rendering types check out Two.Types.
     */
    renderer: any;
    /**
     * @name Two#scene
     * @property {Two.Group} - The base level {@link Two.Group} which houses all objects for the instance. Because it is a {@link Two.Group} transformations can be applied to it that will affect all objects in the instance. This is handy as a makeshift inverted camera.
     */
    scene: any;
    /**
     * @name Two#width
     * @property {Number} - The width of the instance's dom element.
     */
    width: number;
    /**
     * @name Two#height
     * @property {Number} - The height of the instance's dom element.
     */
    height: number;
    /**
     * @name Two#frameCount
     * @property {Number} - An integer representing how many frames have elapsed.
     */
    frameCount: number;
    /**
     * @name Two#timeDelta
     * @property {Number} - A number representing how much time has elapsed since the last frame in milliseconds.
     */
    timeDelta: number;
    /**
     * @name Two#playing
     * @property {Boolean} - A boolean representing whether or not the instance is being updated through the automatic `requestAnimationFrame`.
     */
    playing: boolean;
    fit: any;
    /**
     * @name Two#appendTo
     * @function
     * @param {Element} elem - The DOM element to append the Two.js stage to.
     * @description Shorthand method to append your instance of Two.js to the `document`.
     */
    appendTo(elem: Element): Two;
    /**
     * @name Two#play
     * @function
     * @fires play
     * @description Call to start an internal animation loop.
     * @nota-bene This function initiates a `requestAnimationFrame` loop.
     */
    play(): any;
    /**
     * @name Two#pause
     * @function
     * @fires pause
     * @description Call to stop the internal animation loop for a specific instance of Two.js.
     */
    pause(): any;
    setPlaying(p: any): void;
    /**
     * @name Two#release
     * @function
     * @param {Object} obj
     * @returns {Object} The object passed for event deallocation.
     * @description Release an arbitrary class' events from the Two.js corpus and recurse through its children and or vertices.
     */
    release(obj: any): any;
    /**
     * @name Two#update
     * @function
     * @fires update
     * @description Update positions and calculations in one pass before rendering. Then render to the canvas.
     * @nota-bene This function is called automatically if using {@link Two#play} or the `autostart` parameter in construction.
     */
    update(): any;
    _lastFrame: any;
    /**
     * @name Two#render
     * @function
     * @fires render
     * @description Render all drawable and visible objects of the scene.
     */
    render(): any;
    /**
     * @name Two#add
     * @function
     * @param {(Two.Shape[]|...Two.Shape)} [objects] - An array of Two.js objects. Alternatively can add objects as individual arguments.
     * @description A shorthand method to add specific Two.js objects to the scene.
     */
    add(objects: any, ...args: any[]): Two;
    /**
     * @name Two#remove
     * @function
     * @param {(Two.Shape[]|...Two.Shape)} [objects] - An array of Two.js objects.
     * @description A shorthand method to remove specific Two.js objects from the scene.
     */
    remove(objects: any, ...args: any[]): Two;
    /**
     * @name Two#clear
     * @function
     * @description Removes all objects from the instance's scene. If you intend to have the browser garbage collect this, don't forget to delete the references in your application as well.
     */
    clear(): Two;
    /**
     * @name Two#makeLine
     * @function
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} x2
     * @param {Number} y2
     * @returns {Two.Line}
     * @description Creates a Two.js line and adds it to the scene.
     */
    makeLine(x1: number, y1: number, x2: number, y2: number): typeof Line;
    /**
     * @name Two#makeArrow
     * @function
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} x2
     * @param {Number} y2
     * @returns {Two.Path}
     * @description Creates a Two.js arrow and adds it to the scene.
     */
    makeArrow(x1: number, y1: number, x2: number, y2: number, size: any): typeof Path;
    /**
     * @name Two#makeRectangle
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @returns {Two.Rectangle}
     * @description Creates a Two.js rectangle and adds it to the scene.
     */
    makeRectangle(x: number, y: number, width: number, height: number): typeof Rectangle;
    /**
     * @name Two#makeRoundedRectangle
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @param {Number} sides
     * @returns {Two.Rectangle}
     * @description Creates a Two.js rounded rectangle and adds it to the scene.
     */
    makeRoundedRectangle(x: number, y: number, width: number, height: number, sides: number): typeof Rectangle;
    /**
     * @name Two#makeCircle
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} radius
     * @param {Number} [resolution=4]
     * @returns {Two.Circle}
     * @description Creates a Two.js circle and adds it to the scene.
     */
    makeCircle(x: number, y: number, radius: number, resolution?: number): typeof Circle;
    /**
     * @name Two#makeEllipse
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} rx
     * @param {Number} ry
     * @param {Number} [resolution=4]
     * @returns {Two.Ellipse}
     * @description Creates a Two.js ellipse and adds it to the scene.
     */
    makeEllipse(x: number, y: number, rx: number, ry: number, resolution?: number): typeof Ellipse;
    /**
     * @name Two#makeStar
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} outerRadius
     * @param {Number} innerRadius
     * @param {Number} sides
     * @returns {Two.Star}
     * @description Creates a Two.js star and adds it to the scene.
     */
    makeStar(x: number, y: number, outerRadius: number, innerRadius: number, sides: number): typeof Star;
    /**
     * @name Two#makeCurve
     * @function
     * @param {Two.Anchor[]} [points] - An array of {@link Two.Anchor} points.
     * @param {...Number} - Alternatively you can pass alternating `x` / `y` coordinate values as individual arguments. These will be combined into {@link Two.Anchor}s for use in the path.
     * @returns {Two.Path} - Where `path.curved` is set to `true`.
     * @description Creates a Two.js path that is curved and adds it to the scene.
     * @nota-bene In either case of passing an array or passing numbered arguments the last argument is an optional `Boolean` that defines whether the path should be open or closed.
     */
    makeCurve(points?: (typeof Anchor)[], ...args: any[]): typeof Path;
    /**
     * @name Two#makePolygon
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} radius
     * @param {Number} sides
     * @returns {Two.Polygon}
     * @description Creates a Two.js polygon and adds it to the scene.
     */
    makePolygon(x: number, y: number, radius: number, sides: number): typeof Polygon;
    /**
     * @name Two#makeArcSegment
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} innerRadius
     * @param {Number} outerRadius
     * @param {Number} startAngle
     * @param {Number} endAngle
     * @param {Number} [resolution=Two.Resolution] - The number of vertices that should comprise the arc segment.
     * @returns {Two.ArcSegment}
     */
    makeArcSegment(x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, resolution?: number): typeof ArcSegment;
    /**
     * @name Two#makePoints
     * @function
     * @param {Two.Vector[]} [points] - An array of {@link Two.Vector} points
     * @param {...Number} - Alternatively you can pass alternating `x` / `y` coordinate values as individual agrguments. These will be combined into {@link Two.Vector}s for use in the points object.
     * @returns {Two.Points}
     * @description Creates a Two.js points object and adds it to the current scene.
     */
    makePoints(p: any, ...args: any[]): typeof Points;
    /**
     * @name Two#makePath
     * @function
     * @param {Two.Anchor[]} [points] - An array of {@link Two.Anchor} points
     * @param {...Number} - Alternatively you can pass alternating `x` / `y` coordinate values as individual arguments. These will be combined into {@link Two.Anchor}s for use in the path.
     * @returns {Two.Path}
     * @description Creates a Two.js path and adds it to the scene.
     * @nota-bene In either case of passing an array or passing numbered arguments the last argument is an optional `Boolean` that defines whether the path should be open or closed.
     */
    makePath(p: any, ...args: any[]): typeof Path;
    /**
     * @name Two#makeText
     * @function
     * @param {String} message
     * @param {Number} x
     * @param {Number} y
     * @param {Object} [styles] - An object to describe any of the {@link Two.Text.Properties} including `fill`, `stroke`, `linewidth`, `family`, `alignment`, `leading`, `opacity`, etc..
     * @returns {Two.Text}
     * @description Creates a Two.js text object and adds it to the scene.
     */
    makeText(message: string, x: number, y: number, styles?: any): typeof Text;
    /**
     * @name Two#makeLinearGradient
     * @function
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} x2
     * @param {Number} y2
     * @param {...Two.Stop} args - Any number of color stops sometimes reffered to as ramp stops. If none are supplied then the default black-to-white two stop gradient is applied.
     * @returns {Two.LinearGradient}
     * @description Creates a Two.js linear gradient and ads it to the scene. In the case of an effect it's added to an invisible "definitions" group.
     */
    makeLinearGradient(x1: number, y1: number, x2: number, y2: number, ...args: any[]): typeof LinearGradient;
    /**
     * @name Two#makeRadialGradient
     * @function
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} radius
     * @param {...Two.Stop} args - Any number of color stops sometimes reffered to as ramp stops. If none are supplied then the default black-to-white two stop gradient is applied.
     * @returns {Two.RadialGradient}
     * @description Creates a Two.js linear-gradient object and ads it to the scene. In the case of an effect it's added to an invisible "definitions" group.
     */
    makeRadialGradient(x1: number, y1: number, radius: number, ...args: any[]): typeof RadialGradient;
    /**
     * @name Two#makeSprite
     * @function
     * @param {(String|Two.Texture)} pathOrTexture - The URL path to an image or an already created {@link Two.Texture}.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} [columns=1]
     * @param {Number} [rows=1]
     * @param {Number} [frameRate=0]
     * @param {Boolean} [autostart=false]
     * @returns {Two.Sprite}
     * @description Creates a Two.js sprite object and adds it to the scene. Sprites can be used for still images as well as animations.
     */
    makeSprite(pathOrTexture: (string | typeof Texture), x: number, y: number, columns?: number, rows?: number, frameRate?: number, autostart?: boolean): typeof Sprite;
    /**
     * @name Two#makeImageSequence
     * @function
     * @param {(String[]|Two.Texture[])} pathsOrTextures - An array of paths or of {@link Two.Textures}.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} [frameRate=0]
     * @param {Boolean} [autostart=false]
     * @returns {Two.ImageSequence}
     * @description Creates a Two.js image sequence object and adds it to the scene.
     */
    makeImageSequence(pathsOrTextures: (string[] | (typeof Texture)[]), x: number, y: number, frameRate?: number, autostart?: boolean): typeof ImageSequence;
    /**
     * @name Two#makeTexture
     * @function
     * @param {(String|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement)} [pathOrSource] - The URL path to an image or a DOM image-like element.
     * @param {Function} [callback] - Function to be invoked when the image is loaded.
     * @returns {Two.Texture}
     * @description Creates a Two.js texture object.
     */
    makeTexture(pathOrSource?: (string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement), callback?: Function): typeof Texture;
    /**
     * @name Two#makeGroup
     * @function
     * @param {(Two.Shape[]|...Two.Shape)} [objects] - Two.js objects to be added to the group in the form of an array or as individual arguments.
     * @returns {Two.Group}
     * @description Creates a Two.js group object and adds it to the scene.
     */
    makeGroup(objects: any, ...args: any[]): typeof Group;
    /**
     * @name Two#interpret
     * @function
     * @param {SVGElement} svg - The SVG node to be parsed.
     * @param {Boolean} shallow - Don't create a top-most group but append all content directly.
     * @param {Boolean} [add=true] – Automatically add the reconstructed SVG node to scene.
     * @returns {Two.Group}
     * @description Interpret an SVG Node and add it to this instance's scene. The distinction should be made that this doesn't `import` svg's, it solely interprets them into something compatible for Two.js - this is slightly different than a direct transcription.
     */
    interpret(svg: SVGElement, shallow: boolean, add?: boolean): typeof Group;
    /**
     * @name Two#load
     * @function
     * @param {String|SVGElement} pathOrSVGContent - The URL path of an SVG file or an SVG document as text.
     * @param {Function} callback - Function to call once loading has completed.
     * @returns {Two.Group}
     * @description Load an SVG file or SVG text and interpret it into Two.js legible objects.
     */
    load(pathOrSVGContent: string | SVGElement, callback: Function): typeof Group;
}
import { Line } from "./shapes/line.js";
import { Path } from "./path.js";
import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Ellipse } from "./shapes/ellipse.js";
import { Star } from "./shapes/star.js";
import { Anchor } from "./anchor.js";
import { Polygon } from "./shapes/polygon.js";
import { ArcSegment } from "./shapes/arc-segment.js";
import { Points } from "./shapes/points.js";
import { Text } from "./text.js";
import { LinearGradient } from "./effects/linear-gradient.js";
import { RadialGradient } from "./effects/radial-gradient.js";
import { Texture } from "./effects/texture.js";
import { Sprite } from "./effects/sprite.js";
import { ImageSequence } from "./effects/image-sequence.js";
import { Group } from "./group.js";
import { Collection } from "./collection.js";
import { Events } from "./events.js";
import { Matrix } from "./matrix.js";
import { Registry } from "./registry.js";
import { Shape } from "./shape.js";
import { Vector } from "./vector.js";
import { Gradient } from "./effects/gradient.js";
import { Stop } from "./effects/stop.js";
import { RoundedRectangle } from "./shapes/rounded-rectangle.js";
import { Renderer as CanvasRenderer } from "./renderers/canvas.js";
import { Renderer as SVGRenderer } from "./renderers/svg.js";
import { Renderer as WebGLRenderer } from "./renderers/webgl.js";

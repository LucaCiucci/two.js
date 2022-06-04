/**
 * @name Two.ImageSequence
 * @class
 * @extends Two.Rectangle
 * @param {String|String[]|Two.Texture|Two.Texture[]} paths - A list of URLs or {@link Two.Texture}s.
 * @param {Number} [ox=0] - The initial `x` position of the Two.ImageSequence.
 * @param {Number} [oy=0] - The initial `y` position of the Two.ImageSequence.
 * @param {Number} [frameRate=30] - The frame rate at which the images should playback at.
 * @description A convenient package to display still or animated images organized as a series of still images.
 */
export class ImageSequence {
    /**
     * @name Two.ImageSequence.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.ImageSequence}.
     */
    static Properties: string[];
    /**
     * @name Two.ImageSequence.DefaultFrameRate
     * @property The default frame rate that {@link Two.ImageSequence#frameRate} is set to when instantiated.
     */
    static DefaultFrameRate: number;
    constructor(paths: any, ox: any, oy: any, frameRate: any);
    /**
     * @name Two.ImageSequence#_flagTextures
     * @private
     * @property {Boolean} - Determines whether the {@link Two.ImageSequence#textures} need updating.
     */
    private _flagTextures;
    /**
     * @name Two.ImageSequence#_flagFrameRate
     * @private
     * @property {Boolean} - Determines whether the {@link Two.ImageSequence#frameRate} needs updating.
     */
    private _flagFrameRate;
    /**
     * @name Two.ImageSequence#_flagIndex
     * @private
     * @property {Boolean} - Determines whether the {@link Two.ImageSequence#index} needs updating.
     */
    private _flagIndex;
    /**
     * @name Two.ImageSequence#_amount
     * @private
     * @property {Number} - Number of frames for a given {@link Two.ImageSequence}.
     */
    private _amount;
    /**
     * @name Two.ImageSequence#_duration
     * @private
     * @property {Number} - Number of milliseconds a {@link Two.ImageSequence}.
     */
    private _duration;
    /**
     * @name Two.ImageSequence#_index
     * @private
     * @property {Number} - The current frame the {@link Two.ImageSequence} is currently displaying.
     */
    private _index;
    /**
     * @name Two.ImageSequence#_startTime
     * @private
     * @property {Milliseconds} - Epoch time in milliseconds of when the {@link Two.ImageSequence} started.
     */
    private _startTime;
    /**
     * @name Two.ImageSequence#_playing
     * @private
     * @property {Boolean} - Dictates whether the {@link Two.ImageSequence} is animating or not.
     */
    private _playing;
    /**
     * @name Two.ImageSequence#_firstFrame
     * @private
     * @property {Number} - The frame the {@link Two.ImageSequence} should start with.
     */
    private _firstFrame;
    /**
     * @name Two.ImageSequence#_lastFrame
     * @private
     * @property {Number} - The frame the {@link Two.ImageSequence} should end with.
     */
    private _lastFrame;
    /**
     * @name Two.ImageSequence#_playing
     * @private
     * @property {Boolean} - Dictates whether the {@link Two.ImageSequence} should loop or not.
     */
    private _loop;
    /**
     * @name Two.ImageSequence#_textures
     * @private
     * @see {@link Two.ImageSequence#textures}
     */
    private _textures;
    /**
     * @name Two.ImageSequence#_frameRate
     * @private
     * @see {@link Two.ImageSequence#frameRate}
     */
    private _frameRate;
    /**
     * @name Two.ImageSequence#_origin
     * @private
     * @see {@link Two.ImageSequence#origin}
     */
    private _origin;
    textures: any[];
    origin: Vector;
    frameRate: number;
    /**
     * @name Two.ImageSequence#index
     * @property {Number} - The index of the current tile of the sprite to display. Defaults to `0`.
     */
    index: number;
    /**
     * @name Two.ImageSequence#play
     * @function
     * @param {Number} [firstFrame=0] - The index of the frame to start the animation with.
     * @param {Number} [lastFrame] - The index of the frame to end the animation with. Defaults to the last item in the {@link Two.ImageSequence#textures}.
     * @param {Function} [onLastFrame] - Optional callback function to be triggered after playing the last frame. This fires multiple times when the image sequence is looped.
     * @description Initiate animation playback of a {@link Two.ImageSequence}.
     */
    play(firstFrame?: number, lastFrame?: number, onLastFrame?: Function): ImageSequence;
    _onLastFrame: Function;
    /**
     * @name Two.ImageSequence#pause
     * @function
     * @description Halt animation playback of a {@link Two.ImageSequence}.
     */
    pause(): ImageSequence;
    /**
     * @name Two.ImageSequence#stop
     * @function
     * @description Halt animation playback of a {@link Two.ImageSequence} and set the current frame back to the first frame.
     */
    stop(): ImageSequence;
    /**
     * @name Two.ImageSequence#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.ImageSequence}
     * @description Create a new instance of {@link Two.ImageSequence} with the same properties of the current image sequence.
     */
    clone(parent?: Two.Group): Two.ImageSequence;
    /**
     * @name Two.ImageSequence#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
    /**
     * @name Two.ImageSequence#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    width: any;
    height: any;
    fill: any;
    /**
     * @name Two.ImageSequence#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}
import { Vector } from "../vector.js";

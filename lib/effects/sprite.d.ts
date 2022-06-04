/**
 * @name Two.Sprite
 * @class
 * @extends Two.Rectangle
 * @param {String|Two.Texture} [path] - The URL path or {@link Two.Texture} to be used as the bitmap data displayed on the sprite.
 * @param {Number} [ox=0] - The initial `x` position of the Two.Sprite.
 * @param {Number} [oy=0] - The initial `y` position of the Two.Sprite.
 * @param {Number} [cols=1] - The number of columns the sprite contains.
 * @param {Number} [rows=1] - The number of rows the sprite contains.
 * @param {Number} [frameRate=0] - The frame rate at which the partitions of the image should playback at.
 * @description A convenient package to display still or animated images through a tiled image source. For more information on the principals of animated imagery through tiling see [Texture Atlas](https://en.wikipedia.org/wiki/Texture_atlas) on Wikipedia.
 */
export class Sprite {
    /**
     * @name Two.Sprite.Properties
     * @property {String[]} - A list of properties that are on every {@link Two.Sprite}.
     */
    static Properties: string[];
    constructor(path: any, ox: any, oy: any, cols: any, rows: any, frameRate: any);
    /**
     * @name Two.Sprite#_flagTexture
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Sprite#texture} needs updating.
     */
    private _flagTexture;
    /**
     * @name Two.Sprite#_flagColumns
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Sprite#columns} need updating.
     */
    private _flagColumns;
    /**
     * @name Two.Sprite#_flagRows
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Sprite#rows} need updating.
     */
    private _flagRows;
    /**
     * @name Two.Sprite#_flagFrameRate
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Sprite#flagFrameRate} needs updating.
     */
    private _flagFrameRate;
    /**
     * @name Two.Sprite#_flagIndex
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Sprite#index} needs updating.
     */
    private _flagIndex;
    /**
     * @name Two.Sprite#_amount
     * @private
     * @property {Number} - Number of frames for a given {@link Two.Sprite}.
     */
    private _amount;
    /**
     * @name Two.Sprite#_duration
     * @private
     * @property {Number} - Number of milliseconds a {@link Two.Sprite}.
     */
    private _duration;
    /**
     * @name Two.Sprite#_startTime
     * @private
     * @property {Milliseconds} - Epoch time in milliseconds of when the {@link Two.Sprite} started.
     */
    private _startTime;
    /**
     * @name Two.Sprite#_playing
     * @private
     * @property {Boolean} - Dictates whether the {@link Two.Sprite} is animating or not.
     */
    private _playing;
    /**
     * @name Two.Sprite#_firstFrame
     * @private
     * @property {Number} - The frame the {@link Two.Sprite} should start with.
     */
    private _firstFrame;
    /**
     * @name Two.Sprite#_lastFrame
     * @private
     * @property {Number} - The frame the {@link Two.Sprite} should end with.
     */
    private _lastFrame;
    /**
     * @name Two.Sprite#_playing
     * @private
     * @property {Boolean} - Dictates whether the {@link Two.Sprite} should loop or not.
     */
    private _loop;
    /**
     * @name Two.Sprite#_texture
     * @private
     * @see {@link Two.Sprite#texture}
     */
    private _texture;
    /**
     * @name Two.Sprite#_columns
     * @private
     * @see {@link Two.Sprite#columns}
     */
    private _columns;
    /**
     * @name Two.Sprite#_rows
     * @private
     * @see {@link Two.Sprite#rows}
     */
    private _rows;
    /**
     * @name Two.Sprite#_frameRate
     * @private
     * @see {@link Two.Sprite#frameRate}
     */
    private _frameRate;
    /**
     * @name Two.Sprite#_index
     * @private
     * @property {Number} - The current frame the {@link Two.Sprite} is currently displaying.
     */
    private _index;
    /**
     * @name Two.Sprite#_origin
     * @private
     * @see {@link Two.Sprite#origin}
     */
    private _origin;
    texture: Texture;
    origin: Vector;
    columns: number;
    rows: number;
    frameRate: number;
    /**
     * @name Two.Sprite#index
     * @property {Number} - The index of the current tile of the sprite to display. Defaults to `0`.
     */
    index: number;
    /**
     * @name Two.Sprite#play
     * @function
     * @param {Number} [firstFrame=0] - The index of the frame to start the animation with.
     * @param {Number} [lastFrame] - The index of the frame to end the animation with. Defaults to the last item in the {@link Two.Sprite#textures}.
     * @param {Function} [onLastFrame] - Optional callback function to be triggered after playing the last frame. This fires multiple times when the sprite is looped.
     * @description Initiate animation playback of a {@link Two.Sprite}.
     */
    play(firstFrame?: number, lastFrame?: number, onLastFrame?: Function): Sprite;
    _onLastFrame: Function;
    /**
     * @name Two.Sprite#pause
     * @function
     * @description Halt animation playback of a {@link Two.Sprite}.
     */
    pause(): Sprite;
    /**
     * @name Two.Sprite#stop
     * @function
     * @description Halt animation playback of a {@link Two.Sprite} and set the current frame back to the first frame.
     */
    stop(): Sprite;
    /**
     * @name Two.Sprite#clone
     * @function
     * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
     * @returns {Two.Sprite}
     * @description Create a new instance of {@link Two.Sprite} with the same properties of the current sprite.
     */
    clone(parent?: Two.Group): Two.Sprite;
    /**
     * @name Two.Sprite#toObject
     * @function
     * @returns {Object}
     * @description Return a JSON compatible plain object that represents the path.
     */
    toObject(): any;
    /**
     * @name Two.Sprite#_update
     * @function
     * @private
     * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
     * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
     * @nota-bene Try not to call this method more than once a frame.
     */
    private _update;
    fill: any;
    width: any;
    height: any;
    /**
     * @name Two.Sprite#flagReset
     * @function
     * @private
     * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    private flagReset;
}
import { Texture } from "./texture.js";
import { Vector } from "../vector.js";

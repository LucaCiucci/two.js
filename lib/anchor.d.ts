import { Vector } from './vector.js';
/**
 * @class
 * @name Two.Anchor
 * @param {Number} [x=0] - The x position of the root anchor point.
 * @param {Number} [y=0] - The y position of the root anchor point.
 * @param {Number} [lx=0] - The x position of the left handle point.
 * @param {Number} [ly=0] - The y position of the left handle point.
 * @param {Number} [rx=0] - The x position of the right handle point.
 * @param {Number} [ry=0] - The y position of the right handle point.
 * @param {String} [command=Two.Commands.move] - The command to describe how to render. Applicable commands are {@link Two.Commands}
 * @extends Two.Vector
 * @description An object that holds 3 {@link Two.Vector}s, the anchor point and its corresponding handles: `left` and `right`. In order to properly describe the bezier curve about the point there is also a command property to describe what type of drawing should occur when Two.js renders the anchors.
 */
export declare class Anchor extends Vector {
    controls: {
        left: Vector;
        right: Vector;
    };
    _command: string;
    _relative: boolean;
    _rx: number;
    _ry: number;
    _xAxisRotation: number;
    _largeArcFlag: number;
    _sweepFlag: number;
    command: string;
    relative: boolean;
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArcFlag: number;
    sweepFlag: number;
    constructor(x?: number, y?: number, ax?: number, ay?: number, bx?: number, by?: number, command?: string);
    static makeBroadcast(scope: any): () => void;
    /**
     * @name Two.Anchor#copy
     * @function
     * @param {Two.Anchor} v - The anchor to apply values to.
     * @description Copy the properties of one {@link Two.Anchor} onto another.
     */
    copy(v: Anchor): this;
    /**
     * @name Two.Anchor#clone
     * @function
     * @returns {Two.Anchor}
     * @description Create a new {@link Two.Anchor}, set all its values to the current instance and return it for use.
     */
    clone(): Anchor;
    /**
     * @name Two.Anchor#toObject
     * @function
     * @returns {Object} - An object with properties filled out to mirror {@link Two.Anchor}.
     * @description Create a JSON compatible plain object of the current instance. Intended for use with storing values in a database.
     */
    toObject(): {
        x: number;
        y: number;
        command: string;
        relative: boolean;
        controls: {
            left: {
                x: number;
                y: number;
            };
            right: {
                x: number;
                y: number;
            };
        };
        rx: number;
        ry: number;
        xAxisRotation: number;
        largeArcFlag: number;
        sweepFlag: number;
    };
    /**
     * @name Two.Anchor#toString
     * @function
     * @returns {String} - A String with comma-separated values reflecting the various values on the current instance.
     * @description Create a string form of the current instance. Intended for use with storing values in a database. This is lighter to store than the JSON compatible {@link Two.Anchor#toObject}.
     */
    toString(): string;
}

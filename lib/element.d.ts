import { Events } from './events.js';
/**
 * @name Two.Element
 * @class
 * @extends Two.Events
 * @description The foundational object for the Two.js scenegraph.
 */
export declare class Element extends Events {
    /**
     * @name Two.Element#_flagId
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Element#id} needs updating.
     */
    _flagId: boolean;
    /**
     * @name Two.Element#_flagClassName
     * @private
     * @property {Boolean} - Determines whether the {@link Two.Group#className} need updating.
     */
    _flagClassName: boolean;
    /**
     * @name Two.Element#renderer
     * @property {Object} - Object access to store relevant renderer specific variables. Warning: manipulating this object can create unintended consequences.
     * @nota-bene With the {@link Two.SvgRenderer} you can access the underlying SVG element created via `shape.renderer.elem`.
     */
    _renderer: {};
    /**
     * @name Two.Element#id
     * @property {String} - Session specific unique identifier.
     * @nota-bene In the {@link Two.SvgRenderer} change this to change the underlying SVG element's id too.
     */
    _id: string;
    /**
     * @name Two.Element#className
     * @property {String} - A class to be applied to the element to be compatible with CSS styling.
     * @nota-bene Only available for the SVG renderer.
     */
    _className: string;
    /**
     * @name Two.Element#classList
     * @property {String[]}
     * @description A list of class strings stored if imported / interpreted  from an SVG element.
     */
    classList: any[];
    constructor();
    /**
     * @name Two.Element#flagReset
     * @function
     * @description Called internally by Two.js's renderer to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
     */
    flagReset(): void;
}

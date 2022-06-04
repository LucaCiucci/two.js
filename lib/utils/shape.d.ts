/**
 * @private
 * @param {Two.Path} path - The path to analyze against.
 * @param {Number} t -
 * @returns {Number}
 * @description
 */
export function contains(path: Two.Path, t: number): number;
/**
 * @private
 * @param {Two.Path} path - The path to analyze against.
 * @param {Number} target - The target length at which to find an anchor.
 * @returns {Number}
 * @description Return the id of an anchor based on a target length.
 */
export function getIdByLength(path: Two.Path, target: number): number;
export function getCurveLength(a: any, b: any, limit: any): number;
export function getSubdivisions(a: any, b: any, limit: any): import("../anchor.js").Anchor[];

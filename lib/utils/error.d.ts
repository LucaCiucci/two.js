/**
 * @name Two.Utils.Error
 * @class
 * @description Custom error throwing for Two.js specific identification.
 */
export class TwoError extends Error {
    constructor(message: any);
    message: any;
}

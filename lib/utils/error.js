/**
 * @name Two.Utils.Error
 * @class
 * @description Custom error throwing for Two.js specific identification.
 */
export class TwoError extends Error {
    constructor(message) {
        super();
        this.name = 'Two.js';
        this.message = message;
    }
}

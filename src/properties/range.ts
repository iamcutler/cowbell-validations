import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate maximum number value on a property
 *
 * @param {number} min
 * @param {number} max
 * @param {string} message - overwrite default message
 * @returns {object}
 * @throws {TypeError} - if value if not a number or string representation
 * @throws {Error} - if maximum is not met
 */
export function Range(min: number, max: number, message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        if(typeof newVal !== 'string' && typeof newVal !== 'number') {
            throw new TypeError(`${key} must be a number or string`);
        }
        if(+newVal < min || +newVal > max) {
            const msg = message || `${key} must be within range of ${min} and ${max}`;

            handlePropertyValidationFailure(msg, target);
        }
    });
}

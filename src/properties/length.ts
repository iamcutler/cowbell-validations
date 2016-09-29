import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate length of the string on the property
 *
 * @param {number} min
 * @param {number} max
 * @param {string} message - overwrite default message
 * @returns {object}
 * @throws {TypeError} - if value if not a string
 * @throws {Error} - if length is not met
 */
export function Length(min: number = 1, max: number = 100, message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        if(typeof newVal !== 'string' && !Array.isArray(newVal)) {
            handlePropertyValidationFailure(`${key} must be a string or array`, target);
        }
        if(newVal.length < min || newVal.length > max) {
            const msg = message || `the length of ${key} must be within ${min} and ${max}`;

            handlePropertyValidationFailure(msg, target);
        }
    });
}

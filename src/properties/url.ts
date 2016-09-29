import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate value as a valid URL on a property
 *
 * @param {string} message - overwrite default message
 * @returns {object}
 * @throws {TypeError} - if value is not a string
 * @throws {Error} - if value is not a valid URL
 */
export function URL(message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

        if(typeof newVal !== 'string') {
            handlePropertyValidationFailure(`${key} must be a string`, target);
        }
        if(!urlRegex.test(newVal)) {
            const msg = message || `${key} must be a valid URL`;

            handlePropertyValidationFailure(msg, target);
        }
    });
}

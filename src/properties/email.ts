import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate value as a valid email on a property
 *
 * @param {string} message - overwrite default message
 * @returns {object}
 * @throws {TypeError} - if value is not a string
 * @throws {Error} - if value is not a valid email
 */
export function Email(message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(typeof newVal !== 'string') {
            handlePropertyValidationFailure(`${key} must be a string`, target);
        }
        if(!emailRegex.test(newVal)) {
            const msg = message || `${key} must be a valid email`;

            handlePropertyValidationFailure(msg, target);
        }
    });
}

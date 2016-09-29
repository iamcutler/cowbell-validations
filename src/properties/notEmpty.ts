import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate value is not blank on a property
 *
 * @param {string} message - overwrite default message
 * @returns {object}
 * @throws {Error} - if property is blank
 */
export function NotEmpty(message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        if(newVal === null ||
            newVal === undefined ||
            (newVal.hasOwnProperty('length') && !newVal.length))
        {
            const msg = message || `${key} must not be empty`;

            handlePropertyValidationFailure(msg, target);
        }
    });
}

import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate data type is not undefined
 *
 * @param {string} message
 * @returns {object}
 * @throws {TypeError} - if value is undefined
 */
export function NotUndefined(message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        if(newVal === undefined) handlePropertyValidationFailure(message || `${key} can not be undefined`, target);
    });
}

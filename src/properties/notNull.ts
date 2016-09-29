import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate data type is not null
 *
 * @param {string} message
 * @returns {object}
 * @throws {TypeError} - if value is null
 */
export function NotNull(message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        const msg = message || `${key} can not be null`;

        if(newVal === null) handlePropertyValidationFailure(msg, target);
    });
}

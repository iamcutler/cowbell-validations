import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate minimum number value on a property
 *
 * @param {number} value
 * @returns {object}
 * @throws {TypeError} - if value if not a number
 * @throws {Error} - if minimum is not met
 */
export function Min(value: number = 1) {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        if(typeof newVal !== 'number') handlePropertyValidationFailure(`${key} must be a number`, target);
        if(newVal < value) handlePropertyValidationFailure(`${key} must be a minimum of ${value}`, target);
    });
}

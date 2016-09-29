import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate valid credit card number on the property
 *
 * @param {string} message - overwrite default message
 * @returns {object}
 * @throws {TypeError} - if value if not a string
 * @throws {Error} - if value is not a CC number
 */
export function CreditCardNum(message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        const ccRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*$/;
        const formatNum = newVal.trim().replace(/-|\s/g, '');

        if(typeof newVal !== 'string') {
            handlePropertyValidationFailure(`${key} must be a string`, target);
        }
        if(!ccRegex.test(formatNum)) {
            const msg = message || `${key} must be a valid credit card number`;

            handlePropertyValidationFailure(msg, target);
        }
    });
}

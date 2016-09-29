import {
    propertyValidation,
    handlePropertyValidationFailure
} from './helpers';

/**
 * Validate postal code by country on the property
 *
 * @param {string} countryCode - format based on location - US|AUS|CA|UK currently supported
 * @param {string} message - overwrite default message
 * @returns {object}
 * @throws {TypeError} - if value if not a string
 * @throws {Error} - if value is not a valid postal code
 */
export function PostalCode(countryCode: string = 'US', message: string = '') {
    return propertyValidation((newVal: any, key: string, target: PropertyDecorator) => {
        if(typeof newVal !== 'string') {
            throw new TypeError(`${key} must be a string`);
        }

        var regex;

        switch(countryCode) {
            // Australia
            case 'AUS':
                regex = /^((0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2}))*$/;
                _handleComparison(regex.test(newVal), key, countryCode, message);
                break;
            // Canada
            case 'CA':
                regex = /^([ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9])*$/;
                _handleComparison(regex.test(newVal), key, countryCode, message);
                break;
            // United Kingdom
            case 'UK':
                regex = /^([A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2})*$/;
                _handleComparison(regex.test(newVal), key, countryCode, message);
                break;
            // United States
            default:
                regex = /^\d{5}(?:[-\s]\d{4})?$/;
                _handleComparison(regex.test(newVal), key, countryCode, message);
        }

        function _handleComparison(compare: boolean, key: string, countryCode: string, message?: string) {
            if(!compare) {
                const msg = message || `${key} must be a valid ${countryCode} postal code`;

                handlePropertyValidationFailure(msg, target);
            }
        }
    });
}

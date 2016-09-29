export const defaultOptions: any = {
    validations: []
};

/**
 * Handle property decorator and execute validations
 *
 * @param {Function} validations
 * @returns {Object}
 */
export function propertyValidation(validations) {
    return function(target: any, key: string) {
        // property value
        let _val = this[key];

        // Setter and validation
        let set = (newVal): void => {
            try {
                // Check for main cowbell property on object
                if(!target.hasOwnProperty('$$cowbell')) {
                    target['$$cowbell'] = defaultOptions;
                }

                // set new value from setter
                _val = newVal;

                validations.call(this, newVal, key, target);
            } catch(err) {
                console.error(err);
            }
        };

        // Delete property.
        if(delete this[key]) {
            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: () => _val,
                set,
                enumerable: true,
                configurable: true
            });
        }
    };
}

/**
 * Handle property validation failures
 *
 * @param {string} message
 * @param {object} target
 * @returns void
 */
export function handlePropertyValidationFailure(
    message: string,
    target: PropertyDecorator
): void {
    let validations = target['$$cowbell']['validations'];

    if(~~validations.indexOf(message)) validations.push(message);
}

/**
 * Created by allancutler on 9/26/16.
 */

export class CowBellValidator {
    context: any;

    constructor(objContext: any) {
        this.context = objContext;
    }

    /**
     * check if context is valid
     *
     * @returns {boolean}
     */
    isValid(): boolean {
        if(this.context.__proto__.hasOwnProperty('$$cowbell')) {
            return !this.context.__proto__.$$cowbell.validations.length;
        }

        return false;
    }

    /**
     * Get list of validation messages
     *
     * @returns {Array}
     */
    getValidations(): string[] {
        if(this.context.__proto__.hasOwnProperty('$$cowbell')) {
            return this.context.__proto__.$$cowbell.validations;
        }

        return [];
    }
}

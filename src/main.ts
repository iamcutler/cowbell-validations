import { CowBellValidator } from './properties/cowbell';
import {
    NotNull,
    NotUndefined,
    NotEmpty,
    Length,
    Min,
    Max,
    Range,
    Email,
    URL,
    PostalCode,
    CreditCardNum
} from './properties/index';

export class Person {
    @NotEmpty()
    name: string;
    @NotUndefined()
    wifeName: any;
    @NotNull()
    sisterName: string;
    @Range(1, 30)
    age: number;
    @Email()
    email: string;
    @Min(2)
    kidsCount: number;
    @Max(5)
    desiredKidsCount: number;
    @URL()
    website: string;
    @PostalCode()
    postalCode: string;
    @CreditCardNum()
    cardNum: string;
    @Length(4, 8)
    nickname: string;

    constructor() {
        this.name = '';
        this.wifeName = undefined;
        this.sisterName = null;
        this.age = 31;
        this.email = 'iamcutler@icloud';
        this.kidsCount = 1;
        this.desiredKidsCount = 6;
        this.website = 'googlecom';
        this.postalCode = '23424423423-4432';
        this.cardNum = '5435345343453454535343';
        this.nickname = 'singingdev';
    }
}

let person = new Person();

// show validations
const validator = new CowBellValidator(person);

console.log('is valid:', validator.isValid());
validator.getValidations().map(i => console.log(i));

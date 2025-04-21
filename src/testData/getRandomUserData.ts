import { RegisterUserDetails } from "./registerUserTestData";
import { faker} from '@faker-js/faker';

export function getRandomUserData():RegisterUserDetails {
    return{
        firstname:faker.person.firstName(),
        lastname:faker.person.lastName(),
        email:faker.internet.email(),
        telephone:faker.phone.number(),
        password:faker.internet.password(),
        newsletter:faker.datatype.boolean(),
        privacyPolicy:faker.datatype.boolean()
    }
}
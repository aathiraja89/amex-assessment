import { faker } from '@faker-js/faker';

export function generateFakePersonData() {
  const civilityOptions = ['Mr.', 'Mrs.']; // Array of civility options

  const civility = faker.helpers.arrayElement(civilityOptions); // Randomly choose civility
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`; // Combine for full name

  const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age'}); // Realistic age range
  const formattedBirthDate = birthDate.toLocaleDateString('en-GB'); // ISO 8601 format (YYYY-MM-DD) - good for data entry

  const email = faker.internet.email({ firstName, lastName }); // Email based on name
  const mobileNumber = faker.phone.numerify('07########');

  return {
    civility: civility,
    firstName: firstName,
    lastName: lastName,
    fullName: fullName,
    birthDate: formattedBirthDate,
    email: email,
    mobileNumber: mobileNumber,
  };
}

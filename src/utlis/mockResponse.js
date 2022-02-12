import faker from "@faker-js/faker";

export const mockResponse = () => {
  let response = [];
  for (let i = 0; i < 10; i++) {
    const contact = {};
    contact.id = faker.datatype.uuid();
    contact.name = faker.name.findName();
    contact.address = faker.address.streetAddress();
    contact.email = faker.internet.email();
    contact.city = faker.address.city();
    contact.zipCode = faker.address.zipCode();
    contact.phone = faker.phone.phoneNumber();
    contact.state = faker.address.state();
    response.push(contact);
  }
  return response;
};

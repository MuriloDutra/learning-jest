export default class User {
  constructor(details) {
    const { firstName, lastName } = details;
    this.firstname = firstName;
    this.lastname = lastName;
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }
}

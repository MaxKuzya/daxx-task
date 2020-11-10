export default class PasswordService {
  static validate(password, confirmation = '') {
    if (confirmation && password !== confirmation) {
      return ["Passwords don't match"];
    }

    return this.checkComplexity(password);
  }

  static checkComplexity(password) {
    if (password.length > 3) {
      return [];
    }

    return ["Password is too easy to hack!"];
  }
}

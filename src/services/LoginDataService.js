export default class LoginDataService {
  static async isUserExist(username) {
    const user = window.localStorage.getItem(username);

    return Boolean(user);
  }

  static async createUser(username, password) {
    window.localStorage.setItem(username, password);

    return { user: { username } };
  }

  static async resetPassword(username) {
    const user = window.localStorage.getItem(username);

    if (user) {
      window.localStorage.removeItem(username);

      return;
    }

    throw new Error('No such user found');
  }
}

export default class LoginDataService {
  static async isUserExist(username) {
    const user = window.localStorage.getItem(username);

    return Boolean(user);
  }

   static async createUser(username, password) {
    window.localStorage.setItem(username, password);

    return { user: { username } };
  }

   static async changePassword(username, password) {

  }
}


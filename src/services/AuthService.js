export default class AuthService {
  static async login(username, password) {
    const user = window.localStorage.getItem(username);

    if (user && password === user) {
      return { user: { username } };
    }

    throw new Error('No such user found');
  }

  static async logout() {}
}

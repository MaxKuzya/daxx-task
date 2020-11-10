export default class AuthService {
  static async login(username, password) {
    return { user: { username } };
  }

  static async logout() {

  }
}

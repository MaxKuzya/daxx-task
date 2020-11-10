export default class LoginDataService {
   static async createUser(username, password) {
    window.localStorage.setItem(username, password);

    return { user: { username } };
  }

   static async changePassword(username, password) {

  }
}


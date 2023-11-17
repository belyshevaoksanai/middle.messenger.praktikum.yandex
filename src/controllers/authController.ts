import authApi, { ISigninData, ISignupData } from "../api/authApi";
import router from "../core/Router/router";
import store from "../core/Store";

class AuthController {
  static async fetchUser() {
    try {
      const user = await authApi.getUser();
  
      store.setState('user', user);
    } catch (e) {
      throw e;
    }
  }

  static async signin(data: ISigninData) {
    try {
      await authApi.signin(data);
      await this.fetchUser();
      router.go('/chat');
    } catch (e) {
      console.log(e);
    }
  }

  static async signup(data: ISignupData) {
    try {
      await authApi.signup(data);
      await this.fetchUser();

      router.go('/chat');
    } catch (e) {
      console.log(e);
    }
  }

  static async logout() {
    try {
      await authApi.logout();
      store.setState('user', undefined);

      router.go('/');
    } catch (e) {
      console.log(e);
    }
  }
}

export default AuthController;

import authApi, { ISigninData, ISignupData } from '../api/authApi';
import Router from '../core/Router/router';
import store from '../core/Store';
import Routes from '../enum/routes';

class AuthController {
  static async fetchUser() {
    const user = await authApi.getUser();

    store.setState('user', user);
  }

  static async signin(data: ISigninData) {
    try {
      await authApi.signin(data);
      await this.fetchUser();
      Router.go(Routes.Chat);
    } catch (e) {
      console.error(e);
    }
  }

  static async signup(data: ISignupData) {
    try {
      await authApi.signup(data);
      await this.fetchUser();

      Router.go(Routes.Chat);
    } catch (e) {
      console.error(e);
    }
  }

  static async logout() {
    try {
      await authApi.logout();
      store.setState('user', undefined);

      Router.go(Routes.Login);
    } catch (e) {
      console.error(e);
    }
  }
}

export default AuthController;

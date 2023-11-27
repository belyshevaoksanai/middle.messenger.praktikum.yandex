import userApi, { IPasswordUpdateData, IUserUpdateData } from '../api/userApi';
import Router from '../core/Router/router';
import Routes from '../enum/routes';
import AuthController from './authController';

class UserController {
  static async updateUser(data: IUserUpdateData) {
    try {
      await userApi.updateProfile(data);
      await AuthController.fetchUser();
    } catch (e) {
      console.error(e);
    }
  }

  static async updateAvatar(data: FormData) {
    try {
      await userApi.updateAvatar(data);
      await AuthController.fetchUser();
    } catch (e) {
      console.error(e);
    }
  }

  static async updatePassword(data: IPasswordUpdateData) {
    try {
      await userApi.updatePassword(data);

      Router.go(Routes.Profile);
    } catch (e) {
      console.error(e);
    }
  }
}

export default UserController;

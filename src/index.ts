import Chat from './pages/Chat';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Password from './pages/Password';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import './reset.scss';
import router from './core/Router/router';
import AuthController from './controllers/authController';

export enum Routes {
  Index = '/',
  Login = '/login',
  Register = '/signup',
  Profile = '/profile',
  Chat = '/chat',
  Password = '/password',
  ErrorPage = '/error-page',
  NotFound = '/not-found',
}

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Index, Login)
    .use(Routes.Chat, Chat)
    .use(Routes.ErrorPage, ErrorPage)
    .use(Routes.Login, Login)
    .use(Routes.Password, Password)
    .use(Routes.Profile, Profile)
    .use(Routes.NotFound, NotFound)
    .use(Routes.Register, Registration);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Login:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  };

  if (!Object.values(Routes).includes(window.location.pathname as Routes)) {
    router.start();
    router.go(Routes.NotFound);

    return;
  }

  try {
    await AuthController.fetchUser();

    router.start();

    if (!isProtectedRoute) {
      router.go(window.location.pathname);
    }
  } catch (e) {
    console.log(e, 'Here');
    router.start();
    if (isProtectedRoute) {
      router.go(Routes.Index);
    }
  }
});

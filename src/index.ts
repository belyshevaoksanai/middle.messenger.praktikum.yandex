import Chat from './pages/Chat';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Password from './pages/Password';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import './reset.scss';

const ROUTES: Record<string, any> = {
  '/': Login,
  '/login': Login,
  '/chat': Chat,
  '/profile': Profile,
  '/password': Password,
  '/registration': Registration,
  '/not-found': NotFound,
  '/error-page': ErrorPage,
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const element = new ROUTES[window.location.pathname]() || new NotFound();
    root.append(element?.element!);
    element.dispatchComponentDidMount();
  }
});

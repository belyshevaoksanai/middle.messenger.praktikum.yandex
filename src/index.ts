import Chat from './pages/Chat';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Password from './pages/Password';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import './reset.css';
import Block from './utils/block';

const ROUTES: Record<string, Block> = {
  '/': new Login(),
  '/login': new Login(),
  '/chat': new Chat(),
  '/profile': new Profile(),
  '/password': new Password(),
  '/registration': new Registration(),
  '/not-found': new NotFound(),
  '/error-page': new ErrorPage(),
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const element = ROUTES[window.location.pathname] || new NotFound();
    root.append(element?.element!);
    element.dispatchComponentDidMount();
  }
});

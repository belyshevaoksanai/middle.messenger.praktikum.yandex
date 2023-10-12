import { Chat } from './pages/Chat';
import { ErrorPage } from './pages/ErrorPage';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Password } from './pages/Password';
import { Profile } from './pages/Profile';
import { Registration } from './pages/Registration';
import './reset.css'

const ROUTES: Record<string, string> = {
  '/': Login(),
  '/login': Login(),
  '/chat': Chat(),
  '/profile': Profile(),
  '/password': Password(),
  '/registration': Registration(),
  '/not-found': NotFound(),
  '/error-page': ErrorPage(),
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    if (root) {
      root.innerHTML = ROUTES[window.location.pathname] || NotFound();
    }
});

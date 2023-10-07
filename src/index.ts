import { Main } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import './style.css'

const ROUTES: Record<string, string> = {
  '/': Main(),
  '/profile': Profile(),
  '/not-found': NotFound(),
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    if (root) {
      root.innerHTML = ROUTES[window.location.pathname] || NotFound();
    }
});

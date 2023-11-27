import Block from '../Block/block';
import Route from './route';

class Router {
  private static __instance: Router | null = null;

  private readonly rootQuery = '#app';

  public routes: Route[] = [];

  public history: History = window.history;

  private currentRoute: Route | null = null;

  static getInstance(): Router {
    if (!Router.__instance) {
      Router.__instance = new Router();
      return Router.__instance;
    }
    return this.__instance as Router;
  }

  static destroy(): void {
    this.__instance = null;
  }

  public static use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: this.getInstance().rootQuery });

    this.getInstance().routes.push(route);
    return this;
  }

  public static start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = (event: PopStateEvent) => {
      if (event.currentTarget) {
        this.getInstance()._onRoute((event.currentTarget as Window).location.pathname);
      }
    };

    this.getInstance()._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  static go(pathname: string) {
    this.getInstance().history.pushState({}, '', pathname);
    this.getInstance()._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }

  back(): void {
    this.history.back();
  }

  forward(): void {
    this.history.forward();
  }
}

export default Router;

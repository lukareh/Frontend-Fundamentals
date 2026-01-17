// Router class for handling client-side navigation
type RouteHandler = () => void;

interface Route {
  path: string;
  handler: RouteHandler;
}

export class Router {
  private routes: Route[] = [];

  constructor() {
    // Listen for popstate events (browser back/forward buttons)
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });
  }

  // Register a route
  on(path: string, handler: RouteHandler): void {
    this.routes.push({ path, handler });
  }

  // Navigate to a new route
  navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  // Handle the current route
  private handleRoute(): void {
    const path = window.location.pathname;
    const route = this.routes.find(r => r.path === path);
    
    if (route) {
      route.handler();
    } else {
      // Default to home if no route matches
      const homeRoute = this.routes.find(r => r.path === '/');
      if (homeRoute) {
        homeRoute.handler();
      }
    }
  }

  // Initialize router
  init(): void {
    this.handleRoute();
  }
}

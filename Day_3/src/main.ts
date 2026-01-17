import { Router } from './router';
import { NoteStore } from './store';
import { HomeView } from './views/HomeView';
import { CreateNoteView } from './views/CreateNoteView';
import './style.css';

class App {
  private router: Router;
  private store: NoteStore;
  private container: HTMLElement;
  private currentView: HomeView | CreateNoteView | null = null;

  constructor() {
    this.router = new Router();
    this.store = new NoteStore();
    this.container = document.querySelector('#app') as HTMLElement;

    this.setupRoutes();
    this.router.init();
  }

  private setupRoutes(): void {
    // Home route
    this.router.on('/', () => {
      this.renderView(() => {
        this.currentView = new HomeView(this.container, this.store, this.router);
        this.currentView.render();
      });
    });

    // Create note route
    this.router.on('/create', () => {
      this.renderView(() => {
        this.currentView = new CreateNoteView(this.container, this.store, this.router);
        this.currentView.render();
      });
    });
  }

  private renderView(viewRenderer: () => void): void {
    // Destroy previous view
    if (this.currentView) {
      this.currentView.destroy();
    }

    // Clear container
    this.container.innerHTML = '';

    // Render new view
    viewRenderer();
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

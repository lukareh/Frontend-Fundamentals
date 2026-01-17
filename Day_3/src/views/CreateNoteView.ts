import { CreateNoteComponent } from '../components/CreateNoteComponent';
import { NoteStore } from '../store';
import { Router } from '../router';

export class CreateNoteView {
  private container: HTMLElement;
  private store: NoteStore;
  private router: Router;

  constructor(container: HTMLElement, store: NoteStore, router: Router) {
    this.container = container;
    this.store = store;
    this.router = router;
  }

  render(): void {
    const createNote = new CreateNoteComponent({
      onSubmit: (title, content) => {
        this.store.addNote(title, content);
        this.router.navigate('/');
      },
      onCancel: () => {
        this.router.navigate('/');
      }
    });

    createNote.mount(this.container);
  }

  destroy(): void {
    this.container.innerHTML = '';
  }
}

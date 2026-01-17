import { NoteListComponent } from '../components/NoteListComponent';
import { NoteStore } from '../store';
import { Router } from '../router';

export class HomeView {
  private container: HTMLElement;
  private store: NoteStore;
  private router: Router;
  private unsubscribe?: () => void;

  constructor(container: HTMLElement, store: NoteStore, router: Router) {
    this.container = container;
    this.store = store;
    this.router = router;
  }

  render(): void {
    const notes = this.store.getAllNotes();

    this.container.innerHTML = `
      <div class="home-view">
        <div class="header">
          <h1>My Notes</h1>
          <button class="btn btn-primary create-btn">+ Create Note</button>
        </div>
        <div id="notes-container"></div>
      </div>
    `;

    // Render note list
    const notesContainer = this.container.querySelector('#notes-container') as HTMLElement;
    const noteList = new NoteListComponent({
      notes,
      onNoteClick: (id) => this.handleNoteClick(id)
    });
    noteList.mount(notesContainer);

    // Handle create button click
    const createBtn = this.container.querySelector('.create-btn') as HTMLButtonElement;
    createBtn?.addEventListener('click', () => {
      this.router.navigate('/create');
    });

    // Subscribe to store changes
    this.unsubscribe = this.store.subscribe(() => {
      this.render();
    });
  }

  private handleNoteClick(id: string): void {
    const note = this.store.getNoteById(id);
    if (note) {
      // Show note details in a modal or separate view
      this.showNoteDetails(note);
    }
  }

  private showNoteDetails(note: any): void {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>${this.escapeHtml(note.title)}</h2>
          <button class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <p class="note-timestamp">${new Date(note.timestamp).toLocaleString()}</p>
          <div class="note-content">${this.escapeHtml(note.content)}</div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger delete-btn">Delete</button>
          <button class="btn btn-secondary close-modal-btn">Close</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Close modal handlers
    const closeModal = () => {
      document.body.removeChild(modal);
    };

    modal.querySelector('.close-btn')?.addEventListener('click', closeModal);
    modal.querySelector('.close-modal-btn')?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Delete handler
    modal.querySelector('.delete-btn')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this note?')) {
        this.store.deleteNote(note.id);
        closeModal();
      }
    });
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  destroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}

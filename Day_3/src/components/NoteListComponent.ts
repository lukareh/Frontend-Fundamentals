import { Component } from './Component';
import { Note } from '../store';
import { NoteItemComponent } from './NoteItemComponent';

interface NoteListProps {
  notes: Note[];
  onNoteClick: (id: string) => void;
}

export class NoteListComponent extends Component<NoteListProps> {
  render(): string {
    const { notes } = this.props;

    if (notes.length === 0) {
      return `
        <div class="note-list">
          <p class="empty-state">No notes yet. Create your first note!</p>
        </div>
      `;
    }

    return `
      <div class="note-list">
        ${notes.map(note => new NoteItemComponent({ note, onClick: this.props.onNoteClick }).render()).join('')}
      </div>
    `;
  }

  protected afterMount(): void {
    if (this.element) {
      const noteItems = this.element.querySelectorAll('.note-item');
      noteItems.forEach((item) => {
        const noteId = item.getAttribute('data-note-id');
        if (noteId) {
          item.addEventListener('click', () => {
            this.props.onNoteClick(noteId);
          });
        }
      });
    }
  }
}

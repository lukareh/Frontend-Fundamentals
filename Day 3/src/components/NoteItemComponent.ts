import { Component } from './Component';
import { Note } from '../store';

interface NoteItemProps {
  note: Note;
  onClick: (id: string) => void;
}

export class NoteItemComponent extends Component<NoteItemProps> {
  render(): string {
    const { note } = this.props;
    const date = new Date(note.timestamp).toLocaleString();
    
    return `
      <div class="note-item" data-note-id="${note.id}">
        <h3 class="note-title">${this.escapeHtml(note.title)}</h3>
        <p class="note-timestamp">${date}</p>
        <p class="note-preview">${this.escapeHtml(note.content.substring(0, 100))}${note.content.length > 100 ? '...' : ''}</p>
      </div>
    `;
  }

  protected afterMount(): void {
    if (this.element) {
      this.element.addEventListener('click', () => {
        this.props.onClick(this.props.note.id);
      });
    }
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

import { Component } from './Component';

interface CreateNoteProps {
  onSubmit: (title: string, content: string) => void;
  onCancel: () => void;
}

export class CreateNoteComponent extends Component<CreateNoteProps> {
  private state = {
    title: '',
    content: ''
  };

  render(): string {
    return `
      <div class="create-note">
        <h2>Create New Note</h2>
        <form class="note-form">
          <div class="form-group">
            <label for="note-title">Title</label>
            <input 
              type="text" 
              id="note-title" 
              class="form-input" 
              placeholder="Enter note title"
              value="${this.escapeHtml(this.state.title)}"
              required
            />
          </div>
          <div class="form-group">
            <label for="note-content">Content</label>
            <textarea 
              id="note-content" 
              class="form-input" 
              rows="10" 
              placeholder="Enter note content"
              required
            >${this.escapeHtml(this.state.content)}</textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Create Note</button>
            <button type="button" class="btn btn-secondary cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    `;
  }

  protected afterMount(): void {
    if (!this.element) return;

    const form = this.element.querySelector('.note-form') as HTMLFormElement;
    const titleInput = this.element.querySelector('#note-title') as HTMLInputElement;
    const contentInput = this.element.querySelector('#note-content') as HTMLTextAreaElement;
    const cancelBtn = this.element.querySelector('.cancel-btn') as HTMLButtonElement;

    // Handle input changes
    titleInput?.addEventListener('input', (e) => {
      this.state.title = (e.target as HTMLInputElement).value;
    });

    contentInput?.addEventListener('input', (e) => {
      this.state.content = (e.target as HTMLTextAreaElement).value;
    });

    // Handle form submission
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.state.title.trim() && this.state.content.trim()) {
        this.props.onSubmit(this.state.title.trim(), this.state.content.trim());
        this.state = { title: '', content: '' };
      }
    });

    // Handle cancel
    cancelBtn?.addEventListener('click', () => {
      this.props.onCancel();
    });
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

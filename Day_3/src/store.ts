// Note interface
export interface Note {
  id: string;
  title: string;
  content: string;
  timestamp: number;
}

// State management for notes with localStorage persistence
export class NoteStore {
  private notes: Note[] = [];
  private listeners: Array<() => void> = [];
  private storageKey = 'notes-app-data';

  constructor() {
    this.loadFromStorage();
  }

  // Load notes from localStorage
  private loadFromStorage(): void {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        this.notes = JSON.parse(data);
      }
    } catch (error) {
      console.error('Failed to load notes from localStorage:', error);
      this.notes = [];
    }
  }

  // Save notes to localStorage
  private saveToStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.notes));
    } catch (error) {
      console.error('Failed to save notes to localStorage:', error);
    }
  }

  // Subscribe to changes
  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Notify all listeners
  private notify(): void {
    this.listeners.forEach(listener => listener());
  }

  // Get all notes
  getAllNotes(): Note[] {
    return [...this.notes].sort((a, b) => b.timestamp - a.timestamp);
  }

  // Get note by ID
  getNoteById(id: string): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  // Add a new note
  addNote(title: string, content: string): Note {
    const note: Note = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      title,
      content,
      timestamp: Date.now()
    };
    this.notes.push(note);
    this.saveToStorage();
    this.notify();
    return note;
  }

  // Delete a note
  deleteNote(id: string): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveToStorage();
    this.notify();
  }

  // Update a note
  updateNote(id: string, title: string, content: string): void {
    const note = this.notes.find(n => n.id === id);
    if (note) {
      note.title = title;
      note.content = content;
      note.timestamp = Date.now();
      this.saveToStorage();
      this.notify();
    }
  }
}

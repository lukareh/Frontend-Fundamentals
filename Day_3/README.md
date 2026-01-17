Build a SPA where users can create, view, and list notes, using vanilla TypeScript, components, props/state, client-side routing, and the Vite build process.

## Functionality
Index / Home View
    Lists all notes (title + timestamp)
    Each note can be clicked to view details (optional stretch: edit/delete)


Create Note View
    Form to create a new note (title + content)
    On submit, note is added to in-memory array (or optionally localStorage)
    After creation, navigate back to index/list view


Routing
    Use history.pushState() or hashchange to switch views
    URL updates correspond to Home (/) or Create Note (/create)
    No full-page reload


Components
    NoteItemComponent → renders individual note
    NoteListComponent → renders list of notes
    CreateNoteComponent → form to add note
    Props: pass note data to NoteItemComponent
    State: store form input inside CreateNoteComponent

Build & Dev Tooling
    Use Vite dev server for live reload
    Compile TypeScript → JS
    Production build with minification (optional)

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)
- Modern web browser

### Installation
1. Navigate to project directory:
   ```bash
   cd "Day 3"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open browser to `http://localhost:3031`

### Available Scripts

- **`npm run dev`** - Start Vite development server with hot reload
- **`npm run build`** - Type-check with TypeScript and build for production
- **`npm run preview`** - Preview production build locally (run after build)

### Additional Commands

- **Type-check only:**
  ```bash
  npx tsc --noEmit
  ```

- **Build without type-check:**
  ```bash
  npx vite build
  ```

- **Clean build directory:**
  ```bash
  rm -rf dist
  ```

- **Install new dependency:**
  ```bash
  npm install <package-name>
  ```
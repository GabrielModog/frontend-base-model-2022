import create from 'zustand'
import { NoteProps, NoteFolder, UseNotesStore } from './Notes.types'

export const useNotes = create<UseNotesStore>((set) => ({
  notes: [],
  addNote: (note: NoteProps) => set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (noteId: NoteProps['id']) =>
    set((state) => ({ notes: [...state.notes.filter((note) => note.id === noteId)] })),
  updateNote: (noteId: NoteProps['id'], note: NoteProps) =>
    set((state) => {
      const newNotes = state.notes.map((nt) => (nt.id == noteId ? { ...note } : nt))
      return { notes: [...newNotes] }
    })
  // moveToAnotherFolder: (noteId: Note['id'], folderName: NoteFolder) => set()
}))

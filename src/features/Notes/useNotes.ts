import create from 'zustand'
import { NoteProps, UseNotesStore } from './Notes.types'
import { NotesDefaultState } from './utils/notes-mock'

export const useNotes = create<UseNotesStore>((set) => ({
  notes: NotesDefaultState,
  selected: {},
  selectNote: (noteId: NoteProps['id']) =>
    set((state) => {
      const note = state.notes.find((nt) => nt.id == noteId)
      return { selected: note }
    }),
  addNote: (note: NoteProps) => set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (noteId: NoteProps['id']) =>
    set((state) => ({ notes: [...state.notes.filter((note) => note.id === noteId)] })),
  updateNote: (noteId: NoteProps['id'], note: NoteProps) =>
    set((state) => {
      const newNotes = state.notes.map((nt) => (nt.id == noteId ? { ...note } : nt))
      return { notes: [...newNotes] }
    })
}))

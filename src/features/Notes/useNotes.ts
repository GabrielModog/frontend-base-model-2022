import create from 'zustand'
import { NoteFolder, NoteProps, UseNotesStore } from './Notes.types'
import { NotesDefaultState } from './utils/notes-mock'

export const useNotes = create<UseNotesStore>((set) => ({
  notes: NotesDefaultState,
  selected: {},
  selectNote: (noteId: NoteProps['id']) =>
    set((state) => {
      const note = state.notes.find((nt) => nt.id == noteId)
      return { selected: note }
    }),
  unseleactNote: () => set({ selected: {} }),
  addNote: (note: NoteProps) => set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (noteId: NoteProps['id']) =>
    set((state) => ({ notes: [...state.notes.filter((note) => note.id !== noteId)] })),
  updateNote: (noteId: NoteProps['id'], note: NoteProps) =>
    set((state) => {
      const newNotes = state.notes.map((nt) => (nt.id == noteId ? { ...nt, ...note } : nt))
      return { notes: [...newNotes] }
    }),
  moveToAnotherFolder: (noteId: NoteProps['id'], folderName: NoteFolder) =>
    set((state) => {
      const newNotes = state.notes.map((note) => {
        if (note.id == noteId) return { ...note, folder: folderName }
        return note
      })
      return { notes: [...newNotes] }
    })
}))

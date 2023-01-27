export enum NoteFolder {
  'DELETED',
  'ACTIVE',
  'UPDATED'
}

export type NoteProps = {
  id: string
  title?: string
  text: string
  folder?: NoteFolder
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}

export type NotesProps = NoteProps[]

export type UseNotesStore = {
  notes: NoteProps[]
  addNote: (note: NoteProps) => void
  removeNote: (noteId: NoteProps['id']) => void
  updateNote: (noteId: NoteProps['id'], note: NoteProps) => void
  moveToAnotherFolder?: (noteId: NoteProps['id'], folderName: NoteFolder) => void
}

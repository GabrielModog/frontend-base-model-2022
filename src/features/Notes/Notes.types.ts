export enum NoteFolder {
  'DELETED',
  'ACTIVE',
  'UPDATED'
}

export type Note = {
  id: string
  title?: string
  text: string
  folder?: NoteFolder
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}

export type NotesProps = Note[]

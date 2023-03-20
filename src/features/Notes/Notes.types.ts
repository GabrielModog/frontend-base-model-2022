export type NoteFolder = 'DELETED' | 'ACTIVE' | 'UPDATED' | 'FINISHED'

export type NoteProps = {
  id: string
  text: string
  isSelected?: boolean
  title?: string
  folder?: NoteFolder
  createdAt: string
  updatedAt?: string
  deletedAt?: string
}

export type UseNotesStore = {
  notes: NoteProps[]
  selected: Partial<NoteProps>
  selectNote: (noteId: NoteProps['id']) => void
  unseleactNote: () => void
  addNote: (note: NoteProps) => void
  removeNote: (noteId: NoteProps['id']) => void
  updateNote: (noteId: NoteProps['id'], note: NoteProps) => void
  moveToAnotherFolder: (noteId: NoteProps['id'], folderName: NoteFolder) => void
}

import { useState } from 'react'
import { Note } from './Notes.types'

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([])

  function addNote(note: Note) {
    setNotes((prev) => [...prev, note])
  }

  function removeNote(noteId: Note['id']) {
    setNotes((prev) => prev.filter((item) => item.id !== noteId))
  }

  return [notes, addNote, removeNote]
}

import { useState } from 'react'
import { Note, NoteFolder } from './Notes.types'

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([])

  function addNote(note: Note) {
    setNotes((prev) => [...prev, note])
  }

  function removeNote(noteId: Note['id']) {
    setNotes((prev) => prev.filter((item) => item.id !== noteId))
  }

  function updadteNote(noteId: Note['id'], text: Note['text']) {
    const updatedList = notes.map((note) => {
      if (noteId === note.id) {
        return { ...note, text: text }
      }

      return note
    })

    setNotes(updatedList)
  }

  function moveToAnotherFolder(noteId: Note['id'], folderName: NoteFolder) {
    const updatedList = notes.map((note) => {
      if (noteId === note.id) {
        return { ...note, folder: folderName }
      }

      return note
    })

    setNotes(updatedList)
  }

  return [notes, addNote, updadteNote, removeNote, moveToAnotherFolder]
}

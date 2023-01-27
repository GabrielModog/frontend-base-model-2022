import { useState } from 'react'
import { NoteProps, NoteFolder } from './Notes.types'

export function useNotes() {
  const [notes, setNotes] = useState<NoteProps[]>([])

  function addNote(note: NoteProps) {
    setNotes((prev) => [...prev, note])
  }

  function removeNote(noteId: NoteProps['id']) {
    setNotes((prev) => prev.filter((item) => item.id !== noteId))
  }

  function updateNote(noteId: NoteProps['id'], text: NoteProps['text']) {
    const updatedList = notes.map((note) => {
      if (noteId === note.id) {
        return { ...note, text: text }
      }

      return note
    })

    setNotes(updatedList)
  }

  function moveToAnotherFolder(noteId: NoteProps['id'], folderName: NoteFolder) {
    const updatedList = notes.map((note) => {
      if (noteId === note.id) {
        return { ...note, folder: folderName }
      }

      return note
    })

    setNotes(updatedList)
  }

  return [notes, addNote, updateNote, removeNote, moveToAnotherFolder]
}

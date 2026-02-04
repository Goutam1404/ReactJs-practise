import React from 'react'
import { useNote } from '../contexts/NoteContext'

function NotesDisplay({notes}) {
    const {updateNote, deleteNote} =useNote();

  return (
    <div className='w-full max-w-2xl mx-auto shadow-md '>
        <div>
            <h2 className='font-bold text-2xl '>{notes.title}</h2>
        </div>
        <div>
            <p>{notes.content}</p>
        </div>
    </div>
  )
}

export default NotesDisplay
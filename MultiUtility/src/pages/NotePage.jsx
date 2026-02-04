import React from "react";
import { NoteForm, NotesDisplay } from "../components/index.js";
import { useNote } from "../contexts/NoteContext.jsx";

function NotePage() {
  const{notes}= useNote()
  return (
    <div className={` min-h-screen py-8 bg-amber-900 px-5`}>
      <h1 className="text-2xl font-bold text-center mb-8 mt-2">
        Manage Your Notes
      </h1>
      <div className="w-full mx-auto shadow-md rounded-lg bg-yellow-800 px-4 py-4 flex justify-between gap-5">
        <div className="mb-4 sm:mb-0 w-full max-w-md">
          <NoteForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {notes &&
            notes.map((note) => (
              <div key={note.id} className="w-full">
                <NotesDisplay notes={note} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default NotePage;

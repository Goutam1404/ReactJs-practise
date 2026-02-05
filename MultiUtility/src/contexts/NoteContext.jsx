import React, { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const presetNote = [
    {
      id:1,
      title: "Welcomes to Note section",
      content:
        "Thank you for our application. In these section of notes you can create notes of your own and it will be stored in your storage. In coming days there will be a feature for storing it in our server. Until then enjoy the features.Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem molestiae enim! Laboriosam, optio? Velit quo minus, saepe esse quod repellat consectetur ad provident maxime est quibusdam, expedita rerum porro?",
    },
  ];
  const [notes, setNotes] = useState(() => {
    try {
      const savedNote = localStorage.getItem("notes");
      const parsedNote = JSON.parse(savedNote);
      return parsedNote
        ? parsedNote.length > 0
          ? parsedNote
          : presetNote
        : [];
    } catch (error) {
      console.error("Error in fetching todo from storage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      console.error("Error in setting notes to local storage");
    }
  }, [notes]);

  const addNote = (note) => {
    const newNote = { ...note, id: Date.now() };
    setNotes((prevNote) => [newNote, ...prevNote]);
  };

  const updateNote = (noteId, note) => {
    setNotes((prevNote) =>
      prevNote.map((prev) => (prev.id === noteId ? { ...prev, note } : prev))
    );
  };

  const deleteNote = (noteId) => {
    console.log("Delteing note");
    
    setNotes((prevNote) => prevNote.filter((prev) => prev.id !== noteId));
  };

  const value = {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export const useNote = () => useContext(NoteContext);

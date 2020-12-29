import { types } from "../../types/types";
import { db } from "../../firebase/firebase.config";

export const startNewNote = () => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    let collectNotes = db.collection(`${uid}/journal/notes`);
    collectNotes
      .add(newNote)
      .then((doc) => {
        dispatch(activeNote(doc.id, newNote));
      })
      .catch((err) => console.log("Error", err));
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note,
    },
  };
};

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

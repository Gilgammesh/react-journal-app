import { types } from "../../types/types";
import { db } from "../../firebase/firebase.config";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      url: "",
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

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

export const startUpdateNote = () => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active } = getState().notes;
    const note = { ...active };
    delete note.id;
    let collectNotes = db.collection(`${uid}/journal/notes`);
    collectNotes
      .doc(active.id)
      .update(note)
      .then(() => {
        dispatch(refreshNote(active.id, note));
      })
      .catch((err) => console.log("error", err));
  };
};

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdate,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
};

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active } = getState().notes;
    const url = await fileUpload(file);
    const note = { ...active };
    delete note.id;
    let collectNotes = db.collection(`${uid}/journal/notes`);
    collectNotes
      .doc(active.id)
      .update({ url: url })
      .then(() => {
        dispatch(refreshNote(active.id, note));
      })
      .catch((err) => console.log("error", err));
  };
};

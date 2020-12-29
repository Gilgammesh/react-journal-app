import { db } from "../firebase/firebase.config";

export const loadNotes = async (uid) => {
  let collectNotes = db.collection(`${uid}/journal/notes`);
  let notes = [];
  await collectNotes
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log("No se encontraron registros");
        return;
      }
      snapshot.forEach((doc) => {
        notes.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => {
      console.log("Error obteniendo los registros", err);
    });
  return notes;
};

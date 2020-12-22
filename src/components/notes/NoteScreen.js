import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Algun fabuloso titulo"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea placeholder="Que paso hoy día" className="notes__textarea"></textarea>

        <div className="notes__image">
            <img src="https://tukiem.com/wp-content/uploads/2017/09/PT_hero_42_153645159.jpg" alt="ups" />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;

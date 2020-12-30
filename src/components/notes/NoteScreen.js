import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesAppBar from "./NotesAppBar";
import noImg from "../../assets/noimg.jpg";
import { useForm } from "../../hooks/useForm";
import { activeNote } from "../../redux/actions/notes";

const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const [formValues, handleInputChange, resetForm] = useForm(active);
  const { title, body } = formValues;

  const activeId = useRef(active.id);

  useEffect(() => {
    if (active.id !== activeId.current) {
      resetForm(active);
      activeId.current = active.id;
    }
  }, [active, resetForm]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Escriba un titulo"
          className="notes__title-input"
          name="title"
          value={title}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <textarea
          placeholder="Escriba el contenido de la nota"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        <div className="notes__image">
          <img src={active.url ? active.url : noImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;

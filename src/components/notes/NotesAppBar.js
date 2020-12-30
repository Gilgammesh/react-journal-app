import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { capitalize } from "../../helpers/formatText";
import { startUpdateNote, startUploading } from "../../redux/actions/notes";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const dayNro = moment(active.date).format("DD");
  const monthName = moment(active.date).format("MMMM");
  const year = moment(active.date).format("YYYY");

  const handleSave = () => {
    dispatch(startUpdateNote());
  };

  const handleUploadPic = () => {
    inputPicRef.current.click();
  };

  const handleFileChange = (evt) => {
    const { files } = evt.target;
    const file = files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const inputPicRef = useRef(null);

  return (
    <div className="notes__appbar">
      <span>{`${dayNro} de ${capitalize(monthName)} de ${year}`}</span>
      <input
        ref={inputPicRef}
        type="file"
        name="picture"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handleUploadPic}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;

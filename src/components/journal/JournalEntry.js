import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { activeNote } from "../../redux/actions/notes";
import { capitalize } from "../../helpers/formatText";

const JournalEntry = (props) => {
  const { id, title, body, date, url } = props;
  const dispatch = useDispatch();

  const dayName = moment(date).format("dddd");
  const dayNro = moment(date).format("DD");

  const handleActiveEntry = () => {
    dispatch(activeNote(id, { title, body, date, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={handleActiveEntry}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{capitalize(dayName)}</span>
        <h4>{dayNro}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;

import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div className="journal__entry-picture"></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Mollit do duis esse amet est amet velit reprehenderit fugiat velit
          amet aliqua ea incididunt. Qui veniam est incididunt ad ad non aliquip
          duis ex.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;

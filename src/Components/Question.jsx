import React, { useState } from "react";

const Question = ({ id, title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <div className="question">
        <div className="title">
          <h4>{title}</h4>
          <button className="expand" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "-" : "+"}
          </button>
        </div>
        {showAnswer && (
          <div className="info">
            <p>{showAnswer ? info : ""}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;

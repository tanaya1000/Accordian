import React, { useState } from "react";
import data from "./Data";
const Accordian = () => {
  const [selected, setSelected] = useState(null);

  function handleData(getId) {
    setSelected(getId === selected ? null : getId);
  }

  return (
    <div className="wrapper">
      <h1>You want to see my favs then lets play this accordian game?</h1>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((d) => (
            <div className="item">
              <div onClick={() => handleData(d.id)} className="title">
                <h3>{d.question}</h3>
                <span>+</span>
              </div>
              {selected === d.id ? (
                <div className="content">{d.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;

import { useState } from "react";

function InputPart({ newValue }) {
  const [textvalue, setvalue] = useState("");
  const [date, setdate] = useState("");

  const changeinputvalue = (event) => {
    setvalue(event.target.value);
  };
  const changedatevalue = (event) => {
    setdate(event.target.value);
  };
  const addClicked = (event) => {
    newValue(textvalue, date);
    setvalue("");
    setdate("");
  };

  return (
    <div className="container marginown">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo"
            onChange={changeinputvalue}
            value={textvalue}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={changedatevalue} value={date} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={addClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputPart;

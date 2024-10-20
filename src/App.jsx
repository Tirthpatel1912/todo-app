import "./App.css";
import TodoHeader from "./component/Todo-header";
import Todoitems from "./component/todoitems";
import InputPart from "./component/InputPart";
import { useState } from "react";

function App() {
  const [todos, settodo] = useState([]);

  const newgetValue = (textvalue, dateval) => {
    const newtoItems = [...todos, { name: textvalue, date: dateval }];
    settodo(newtoItems);
  };

  return (
    <div>
      <TodoHeader></TodoHeader>
      <InputPart newValue={newgetValue}></InputPart>
      <Todoitems itemsv={todos}></Todoitems>
    </div>
  );
}

export default App;

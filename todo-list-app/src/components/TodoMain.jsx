import React, { useState } from "react";
import { handleChange, handleSubmit } from "../utils/util";
import TodoComponent from "./TodoComponent";

const TodoMain = () => {
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <div className="todo-app">
        <input
          type="text"
          value={inputText}
          onChange={(e) => handleChange(e, setInputText)}
        />
        <button
          onClick={() =>
            handleSubmit(id, inputText, setId, setTodo, setInputText)
          }
        >
          submit
        </button>
      </div>
      <TodoComponent todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default TodoMain;

import React, { useState } from "react";

const TodoMain = () => {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  const handleSubmit = () => {
    setTodo((prev) => [...prev, inputText]);
    setInputText("");
  };

  const handleDelete = (i) => {
    const copyArr = [...todo];
    // const newArr = copyArr.filter((_, index) => index !== i);
    copyArr.splice(i, 1);
    console.log(copyArr);
    setTodo(copyArr);
  };

  return (
    <div>
      <div className="todo-app">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <ul>
        {todo &&
          todo.map((todo, i) => {
            return (
              <li key={i}>
                {todo} <button onClick={() => handleDelete(i)}>delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoMain;

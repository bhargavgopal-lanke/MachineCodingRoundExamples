import React, { useState } from "react";

const TodoMain = () => {
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  const handleSubmit = () => {
    setId((prev) => prev + 1);
    const item = {
      id: id,
      name: inputText,
      completed: false,
    };
    setTodo((prev) => [...prev, item]);
    setInputText("");
  };

  const handleDelete = (i) => {
    const copyArr = [...todo];
    // const newArr = copyArr.filter((_, index) => index !== i);
    copyArr.splice(i, 1);
    console.log(copyArr);
    setTodo(copyArr);
  };

  // uncheck and check the checkbox 
  // In the setter function update the todo
  // if clicked id and todo map id are equal
  // spread the object in return and update the completed to !t.complete
  const handleClick = (i) => {
    setTodo(
      todo.map((t) => {
        if (t.id === i) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div>
      <div className="todo-app">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <ul>
        {todo.map((t) => {
          return (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.checked}
                onChange={() => handleClick(t.id)}
              />
              <span className={t.completed ? "delete" : ""}>{t.name}</span>
              <button onClick={() => handleDelete(t.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoMain;

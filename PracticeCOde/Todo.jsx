import { useState } from "react";
import "./styles.css";

export default function TodoApp() {
  const [nextId, setNextId] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChnage = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const todoObj = {
      id: nextId,
      task: inputValue,
      completed: false,
    };
    setTodo((prev) => [...prev, todoObj]);
    setNextId(nextId + 1);
    setInputValue("");
  };

  const handleDelete = (id) => {
    const copyTodo = [...todo];

    const filterItems = copyTodo.filter((item) => item.id !== id);
    console.log(id, "id");
    setTodo(filterItems);
    setNextId(id);
  };

  const handleCheckCLick = (id) => {
    setTodo(
      todo?.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleChnage} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {todo &&
        todo?.map((x) => {
          return (
            <div style={{ marginBottom: "20px" }} key={x.id}>
              <input
                type="checkbox"
                checked={x.checked}
                onChange={() => handleCheckCLick(x.id)}
              />
              <lable
                style={{ textDecoration: x.completed ? "line-through" : "" }}
              >
                {x.task}
              </lable>

              <button
                onClick={() => handleDelete(x.id)}
                style={{ marginLeft: "20px" }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

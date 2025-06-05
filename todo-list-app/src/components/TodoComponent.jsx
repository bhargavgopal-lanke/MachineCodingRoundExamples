import React from "react";
import { handleClick, handleDelete } from "../utils/util";

const TodoComponent = ({ todo, setTodo }) => {
  return (
    <div>
      <ul>
        {todo.map((t) => {
          return (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.checked}
                onChange={() => handleClick(t.id, todo, setTodo)}
              />
              <span className={t.completed ? "delete" : ""}>{t.name}</span>
              <button onClick={() => handleDelete(t.id, todo, setTodo)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoComponent;

export const handleChange = (e, setInputText) => {
  const value = e?.target?.value;
  setInputText(value);
};

export const handleSubmit = (id, inputText, setId, setTodo, setInputText) => {
  setId((prev) => prev + 1);
  const item = {
    id: id,
    name: inputText,
    completed: false,
  };
  setTodo((prev) => [...prev, item]);
  setInputText("");
};

export const handleDelete = (i, todo, setTodo) => {
  const copyArr = [...todo];
  const newArr = copyArr.filter((index) => index.id !== i);
  console.log(i);
  // copyArr.splice(i, 1);
  setTodo(newArr);
};

// uncheck and check the checkbox
// In the setter function update the todo
// if clicked id and todo map id are equal
// spread the object in return and update the completed to !t.complete
export const handleClick = (i, todo, setTodo) => {
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

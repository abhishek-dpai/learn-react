import React from "react";

function TodoItem(props) {
  const {
    item: { completed, id, text },
    handleChange,
  } = props;
  // console.log(completed, id, text, handleChange);
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
      />
      <p>{text}</p>
    </div>
  );
}

export default TodoItem;

import React, { useState } from "react";

export default function Todo({ todo, deleteTodo, updatedTodo }) {
  let [isEdit, setIsEdit] = useState(false);
  let [title, setTitle] = useState(todo.title);

  let updateTodoHandler = (e) => {
    e.preventDefault();
    let updateTodo = {
      id: todo.id,
      title,
      completed: todo.completed,
    };
    updatedTodo(updateTodo);
    setIsEdit(false);
  };

  let handleCheckBox = () => {
    let updateTodo = {
      id: todo.id,
      title,
      completed: !todo.completed,
    };
    updatedTodo(updateTodo);
  };

  return (
    <li className=" mt-6 p-3 flex justify-between items-center rounded shadow shadow-gold w-full bg-gray-800 ">
      <div className="w-[80%] flex gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          className=" accent-gold"
          onChange={handleCheckBox}
        />
        {!isEdit && (
          <span
            className={`text-sm text-gold ${
              todo.completed ? "line-through" : ""
            }`}
            onDoubleClick={() => setIsEdit(true)}
          >
            {todo.title}
          </span>
        )}
        {isEdit && (
          <form onSubmit={updateTodoHandler}>
            <input
              type="text"
              className="w-full p-2 text-gold border border-gold outline-none bg-gray-800"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </form>
        )}
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gold"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}

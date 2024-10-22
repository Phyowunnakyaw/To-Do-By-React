import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  let [title, setTilte] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      id: Math.random(),
      title,
      completed: false,
    };
    addTodo(todo);
    setTilte("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" p-2 px-0 pt-6 flex justify-center items-center gap-2">
        <label
          for="finput"
          className="border-2 border-gray-600 p-[10px] rounded cursor-pointer hover:border-gold transition-all  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gold"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </label>
        <input
          className=" w-full p-3 text-sm border-none rounded outline-2 outline-gold text-gold bg-gray-800 placeholder:text-gold "
          type="text"
          id="finput"
          autoComplete="off"
          placeholder="Add a task"
          value={title}
          onChange={(e) => {
            setTilte(e.target.value);
          }}
        ></input>
      </div>
    </form>
  );
}

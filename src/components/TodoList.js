import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, deleteTodo, updatedTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            updatedTodo={updatedTodo}
          />
        ))}
      </ul>
    </>
  );
}

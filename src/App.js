import { useCallback, useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CheckAllAndRemainding from "./components/CheckAllAndRemainding";
import TodoFilter from "./components/TodoFilter";
import ClearCompletedButton from "./components/ClearCompletedButton";

function App() {
  let [todos, setTodos] = useState([]);
  let [filterTodos, setFilterTodos] = useState(todos);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setFilterTodos(data);
      });
  }, []);

  let addTodo = (todo) => {
    // add data at server side
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    // add data at client side
    setTodos((prevState) => [...prevState, todo]);
  };

  let deleteTodo = (todoId) => {
    // delete data at server side
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE",
    });
    // delete data at server side
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  let updatedTodo = (todo) => {
    // update data at server side
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    // update data at client side
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === todo.id) return todo;
        return t;
      });
    });
  };

  let checkAll = () => {
    todos.forEach((t) => {
      t.completed = true;
      updatedTodo(t);
    });

    setTodos((prevState) => {
      return prevState.map((t) => {
        return { ...t, completed: true };
      });
    });
  };

  let clearCompleted = () => {
    todos.forEach((t) => {
      if (t.completed) {
        deleteTodo(t.id);
      }
    });
    setTodos((prevState) => {
      return prevState.filter((t) => !t.completed);
    });
  };

  let filterBy = useCallback(
    (filter) => {
      if (filter === "All") setFilterTodos(todos);
      if (filter === "Active")
        setFilterTodos(todos.filter((t) => !t.completed));
      if (filter === "Completed")
        setFilterTodos(todos.filter((t) => t.completed));
    },
    [todos]
  );

  let remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <div className=" p-10 h-screen bg-gray-900 ">
      <div className=" mx-auto mt-8 max-w-[48rem] p-7 shadow-sm shadow-gold rounded bg-gray-900">
        <h1 className=" text-gold text-xl font-bold"> To Do </h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filterTodos}
          deleteTodo={deleteTodo}
          updatedTodo={updatedTodo}
        />
        <p className=" my-3 mt-6 bg-gold h-[1px]"></p>
        <CheckAllAndRemainding
          remainingCount={remainingCount}
          checkAll={checkAll}
        />
        <p className=" my-3 mb-6 bg-gold h-[1px]"></p>
        <div className="flex justify-between items-center">
          <TodoFilter filterBy={filterBy} />
          <ClearCompletedButton clearCompleted={clearCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;

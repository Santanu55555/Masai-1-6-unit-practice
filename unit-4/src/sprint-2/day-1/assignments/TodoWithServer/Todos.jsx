import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const onAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDlt = (id) => {
    let newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
  };

  const handleEdit = (updatedTodo) => {
    let newTodo = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });
    setTodos(newTodo);
  };

  useEffect(() => {
    setIsLoading(true);
    const getTodos = async () => {
      try {
        let res = await fetch(
          `http://localhost:3000/todos?_page=${page}&_limit=5`
        );
        let data = await res.json();
        setTodos(data);
      } catch (error) {
        setisError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getTodos();
  }, [page]);

  return isLoading ? (
    <div className="loader">......loading</div>
  ) : isError ? (
    <div className="error">Something went wrong....</div>
  ) : (
    <div className="main_container">
      <h1>Todo App</h1>
      <AddTodo onAdd={onAdd} />
      {todos.map((item) => {
        return (
          <Todo
            key={item.id}
            {...item}
            handleDlt={handleDlt}
            handleEdit={handleEdit}
          />
        );
      })}
      <div>Page No : {page}</div>
      <br />
      <div>
        <button
          className="btn2"
          disabled={page === 1}
          onClick={() => setPage((prevpage) => prevpage - 1)}
        >
          Prev
        </button>
        <button
          className="btn2"
          disabled={todos.length === 0}
          onClick={() => setPage((prevpage) => prevpage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Todos;

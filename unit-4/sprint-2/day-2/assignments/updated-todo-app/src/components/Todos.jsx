import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const onAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onEdit = (newTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) return newTodo;
      else return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        let res = await fetch(
          `http://localhost:3000/todos?_page=${pageNumber}`
        );
        let data = await res.json();
        console.log(data);
        setTodos(data);
      } catch (e) {
        console.log(e);
      }
    };

    getTodos();
  }, [pageNumber]);

  return (
    <div>
      {pageNumber}
      <AddTodo onAdd={onAdd} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
      <div>
        <button
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
        >
          Prev
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Todos;

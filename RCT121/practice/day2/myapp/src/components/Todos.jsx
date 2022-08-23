import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/actions";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

function Todos() {
  const { isLoading, isError, data } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     fetch("http://localhost:8080/todos")
  //       .then((res) => res.json())
  //       .then((data) => setTodos(data))
  //       .catch((e) => console.log(e));
  //   }, []);

  useEffect(() => {
    getTodos(dispatch);
  },[]);

    
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Oops! Error occurred while loading data</div>;
    }
    
  return (
    <div>
      Todos : {data.length}
      <div>
        <TodoInput />
      </div>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default Todos;




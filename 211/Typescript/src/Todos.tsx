import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

type TodoType = {
  id: string;
  title: string;
  status: boolean;
};

export const Todos = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
        .get("http://localhost:8080/todos")
        // .then(({ data }: { data: TodoType[] }) => {
        //     data
        // })
      .then((response: AxiosResponse<TodoType[]>) => {
          const { data } = response;
          
        // console.log(data.map((e)=>e.title));

        setTodos(data);
      });
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          const payload = { id: uuid(), title: text, status: false };
          axios.post("http://localhost:8080/todos", payload);
          //   setTodos([...todos,payload])
        }}
      >
        Add Todo
      </button>
      {todos.map((t) => (
        <div key={t.id}>
          {t.title} - {t.status ? "Done" : "Not Done"}
        </div>
      ))}
    </div>
  );
};

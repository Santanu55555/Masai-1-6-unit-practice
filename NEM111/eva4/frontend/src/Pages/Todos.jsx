import React, { useEffect, useState } from "react";

export const Todos = () => {
    const token = localStorage.getItem("token")
    const [taskname,setname]=useState('')
    const [status,setStatus]=useState('')
    const [tag,settag]=useState('')
      const [data,setData]=useState([])
  const getTodos = () => {
    fetch("https://shrouded-journey-98772.herokuapp.com/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTodos();
  }, []);
  if (!token) {
    return <h3>Please login again</h3>;
  }
  const handleSubmit = () => {
    let payload ={
        taskname ,status,tag
    }
    fetch("https://shrouded-journey-98772.herokuapp.com/todos/create", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getTodos();
      })
      .catch((err) => console.log(err));
  };


  return <div>
     <div>
        <input
          type="text"
          name="taskname"
          placeholder="taskname"
          onChange={(e)=>setname(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="status"
          placeholder="status"
          onChange={(e)=>setStatus(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="tag"
          placeholder="tag"
          onChange={(e)=>settag(e.target.value)}
        />{" "}
        <br />
        <br />
        <button type="submit" onClick={(handleSubmit)}>
          Create todo
        </button>
        <hr />
      
          {data &&
            data.length > 0 &&
            data.map((e) => {
              return (
                <div key={e._id}>
                  <h3>{e.taskname}</h3>
                  <p>{e.status}</p>
                  <h6>{e.tag}</h6>
                  <button>Remove</button>
                </div>
              );
            })}
      
      </div>
  </div>;
};

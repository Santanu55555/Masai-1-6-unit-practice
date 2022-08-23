import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todo/action'
import { v4 as uuid } from "uuid";

export const TodoInput = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    const handleAdd = () => {
        const payload = {
            id: uuid(),
            title,
            status: false
        }
        dispatch(addTodo(payload))
    }
  return (
    <div>
      <h1>TodoInput</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  );
}

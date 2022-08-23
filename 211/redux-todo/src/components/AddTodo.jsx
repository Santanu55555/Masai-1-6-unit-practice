import React,{ useState} from 'react'
import {useDispatch} from 'react-redux';
import { addTodoFailure,
  addTodoRequest,
   addTodoSuccess } from '../Redux/action';
import axios from "axios"

const AddTodo = (payload) => {
    const dispatch = useDispatch()
    const [todo, setTodo]= useState("");
    const addTodo=(payload)=> {
      dispatch(addTodoRequest())
      axios.post("/todos",payload)
      .then((r)=>dispatch(addTodoSuccess(r.data)))
      .catch((e)=>dispatch(addTodoFailure(e)));
    };

    const handleAdd= () => {
        if (todo)
        {
            const payload={title:todo,status:false}
            addTodo(payload)
            setTodo("")
        }
    }

  return (
    <div>
        <h3>Add Todo</h3>
        <input type="text" value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="Add Todo Here...."
        
        />

        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTodo
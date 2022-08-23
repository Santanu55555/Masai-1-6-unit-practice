import React,{ useEffect} from 'react'
import { getTodoFailure,
     getTodoRequest,
      getTodoSuccess } from '../Redux/action'
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios"
import AddTodo from './AddTodo';
import TodoLists from './TodoLists';


const Todos = () => {
    const dispatch = useDispatch();

    const todos = useSelector(state=>state.todos)

    const getTodos=() =>{
        dispatch(getTodoRequest())
        axios
        .get("/todos")
        .then((r)=>dispatch(getTodoSuccess(r.data)))
        .catch((e)=>dispatch(getTodoFailure(e)))
    };



    useEffect(() => {
      // if(todos.length === 0)
      // {
        getTodos()
      // }      
    },[]);
console.log(todos)

  return (
    <div>
      <h3>Todos</h3>
      <AddTodo/>
      <TodoLists todolists={todos}/>
    </div>
  )
};

export default Todos;
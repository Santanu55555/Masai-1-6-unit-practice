import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../todoRedux/reducer';

function TodoList() {
    const todos = useSelector(state=>{console.log(state); return state.todo.todos});
    const loading = useSelector(state=>{return state.todo.loading});
    const dispatch = useDispatch()
    useEffect(()=>{
      loadData(todos)
    },[todos])
    useEffect(()=>{
      getTodo(dispatch)
    },[])

    function loadData(todos){
      localStorage.setItem("item", JSON.stringify(todos));
    }
  return (
    <div>
        <h3>Todo</h3>
        {(loading && <div>loading....</div>)}
         {
             todos?.map((item)=>{
                return <div key={item.id} >{item.title}</div>
             })
         }
    </div>
  )
}

export default TodoList
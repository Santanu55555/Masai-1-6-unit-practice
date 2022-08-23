import React from 'react';
import { useSelector } from 'react-redux';




export const TodoList=()=>{
      const todosData = useSelector(store=> store.todos)
    const loading =useSelector(store=>store.loading)
    const error =useSelector(store=>store.error)
    return (
    <div >
      {loading ? "...loading":null}
      {error ? "404 Error":null}
      {
        todosData.map(e=>{
          return <div key={e.id} style={{width:"600px",height:"150px", border:"1px solid",margin:"auto",marginBottom:"20px"}}>
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
          </div>
        })
      }
    </div>
  )
}
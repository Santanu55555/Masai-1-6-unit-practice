import React from 'react'
import TodoItem from './TodoItem'


const TodoList = (props) => {

  return (
    <div>
        {props.todo.map((item)=>(
            <div className='list-div'>
                <TodoItem item={item}/>
                <input type="checkbox" />
            </div>
        ))}
    </div>
  )
}

export default TodoList
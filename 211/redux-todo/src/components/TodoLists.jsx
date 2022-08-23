import React from 'react'
import {Link} from 'react-router-dom'

const TodoLists = ({todolists}) => {
  return (
    <div>
        {todolists?.map((item)=>{
            return (
                <div key={item.id}>
                    <Link to={`/todos/${item.id}`}>
                        <div>{item.title}</div>
                    </Link>
                </div>
            );
        })}
    </div>
  )
}

export default TodoLists;
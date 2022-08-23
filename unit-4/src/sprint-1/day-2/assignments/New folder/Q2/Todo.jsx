import React from 'react';
import TodoItem from './TodoItem'

function Todo(){
    const [input, setInput] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const addTodo = () =>{
        const obj={
            title: input
        }
        setTodo([...todo,obj]);
    }
    return(
        <>
            <input type="text" placeholder="Write Something..." onChange={handleChange} value={input}/>
            <button onClick={addTodo}>Add</button>
            <div>
                {todo.map((item)=>{
                    return <TodoItem {...item}/>
                })}
            </div>
        </>
    )
}

export default Todo;
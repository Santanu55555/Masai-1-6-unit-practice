import React from 'react';
import TodoItem from './TodoItem'
import TodoList from './TodoList'

function Todo(){
    const [input, setInput] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const addTodo = () =>{
        // const obj={
        //     title: input
        // }
        setTodo([...todo,input]);
    }
    return(
        <>
            <input type="text" placeholder="Write Something..." onChange={handleChange} value={input}/>
            <button onClick={addTodo}>Add</button>
            <div>
               <TodoList todo={todo}/>
            </div>
        </>
    )
}

export default Todo;
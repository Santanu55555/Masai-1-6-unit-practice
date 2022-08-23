import React,{ useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate,useParams,Link} from "react-router-dom"
import axios from "axios"
import {toggleTodoRequest,
    toggleTodoSuccess,
    toggleTodoFailure,

    removeTodoRequest,
    removeTodoSuccess,
    removeTodoFailure
} from '../Redux/action';

const SingleTodo = () => {
    const todos= useSelector((state) => state.todos);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams();
    const [currentTodo,setCurrentTodo] = useState( {} );

    const toggleStatus = (id,newStatus) => {
        dispatch (toggleTodoRequest())
        axios.patch(`/todos/${id}`,{status:newStatus})
        .then(r => dispatch(toggleTodoSuccess(r.data)))
        .catch(e => dispatch(toggleTodoFailure(e)))
    }

    const removeTodo =(id) => {
        dispatch(removeTodoRequest())
        axios.delete(`/todos/${id}`)
        .then(r => {dispatch(removeTodoSuccess(id))
        navigate("/");
        })
        .catch(e => dispatch(removeTodoFailure(e)))
    };

    useEffect(() => {
        let currentTodo = todos.find((item) =>item.id === Number(id));
        currentTodo && setCurrentTodo(currentTodo);
    }, [todos,id]);

  return (
    <div>
        <h3>
            {currentTodo?.title} 
            {currentTodo?.status?"True":"False"}
        </h3>

        <button onClick={()=>toggleStatus(currentTodo.id, !currentTodo.status)}>Toggle</button>

        <button onClick={()=>removeTodo(currentTodo.id)}>Remove</button>

        <Link to={`/todos/${currentTodo.id}/edit`}><button>Edit</button></Link>
    </div>
  )
}

export default SingleTodo
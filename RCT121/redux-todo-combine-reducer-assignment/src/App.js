import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Todo from "./component/Todo";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import { getTodo } from "./todoRedux/reducer";
import Allroutes from "./routes/Allroutes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodo(dispatch);
  }, []);

  return (
    <div className="App">
      <Allroutes />
    </div>
  );
}

export default App;

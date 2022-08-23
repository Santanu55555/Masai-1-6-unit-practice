
import './App.css';
import { Counter } from './components/counter/Counter';
import { Todo } from './components/todo/Todo';


function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <hr />
      <Todo/>
    </div>
  );
}

export default App;

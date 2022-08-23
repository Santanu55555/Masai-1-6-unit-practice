import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Styled Buttons</h1>
      <Button primary>Primary Button</Button>
      <Button def>Default Button</Button>
      <Button dashed>Dashed Button</Button>
      <Button text>Text Button</Button>
      <Button link>Link Button</Button>
    </div>
  );
}

export default App;

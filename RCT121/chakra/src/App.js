import "./App.css";
import { DesktopFlex } from "./components/Flex";
import { Desktop } from "./components/Grid";
import { Lay } from "./components/Lay";
import { Layouts } from "./components/Layouts";
import { Temp } from "./components/Temp";

function App() {
  return (
    <div className="App">
      {/* <Desktop /> */}
      {/* <DesktopFlex /> */}
     <Layouts />
      {/* <Lay />
      <Temp />  */}
    </div>
  );
}

export default App;

import "./App.css";
import ReactKeypress from "./ReactKeypress";
import A from "./A";
import B from "./B";
import C from "./C";
import D from "./D";
import HelperContainer from "./HelperContainer.js";

function App() {
  return (
    <ReactKeypress>
      <A />
      <B />
      <C />
      <D />
      {/* <ToggleD /> */}
      <HelperContainer />
    </ReactKeypress>
  );
}

export default App;

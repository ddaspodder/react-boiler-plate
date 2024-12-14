import "./app.scss";
import logo from "./assets/react.svg";
import fallLeaves from "./assets/fall-leaves.jpg";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <img src={logo} alt="react-logo" />
      <img src={fallLeaves} alt="fall" />
    </div>
  );
}

export default App;

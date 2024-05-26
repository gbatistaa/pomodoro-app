import "./App.css";
import PomoClock from "./components/PomoClock";
import PomoConfig from "./components/PomoConfig";
import PomoNav from "./components/PomoNav";

function App() {
  return (
    <div className="App">
      <h3 className="app-title">pomodoro</h3>
      <PomoNav />
      <PomoClock />
      <PomoConfig />
    </div>
  );
}

export default App;

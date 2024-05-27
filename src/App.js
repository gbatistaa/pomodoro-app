import "./App.css";
import PomoClock from "./components/PomoClock";
import PomoNav from "./components/PomoNav";
import PomoConfig from "./components/config/components/PomoConfig";

function App() {
  return (
    <div className="App">
      <h2 className="app-title">pomodoro</h2>
      <PomoNav />
      <PomoClock />
      <PomoConfig />
    </div>
  );
}

export default App;

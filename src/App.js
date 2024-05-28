import "./App.css";
import PomoClock from "./components/PomoClock";
import PomoNav from "./components/PomoNav";
import PomoConfig from "./components/config/components/PomoConfig";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">pomodoro</h1>
      <PomoNav />
      <PomoClock />
      <PomoConfig />
    </div>
  );
}

export default App;

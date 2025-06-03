import "./App.css";
import Progressbar from "./components/progressbar";

function App() {
  const bars = [5, 15, 30, 45, 60, 90, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>

      {bars.map((x) => {
        return <Progressbar key={x} progress={x} />;
      })}
    </div>
  );
}

export default App;

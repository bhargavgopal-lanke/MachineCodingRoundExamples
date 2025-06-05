
import './App.css';
import Accordian from './components/Accordian';
import { ACCORDIAN_DATA } from './utils/data';

function App() {
  return (
    <div className="App">
      <Accordian items={ACCORDIAN_DATA} />
    </div>
  );
}

export default App;

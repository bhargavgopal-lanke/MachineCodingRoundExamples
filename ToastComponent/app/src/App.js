import { createContext } from "react";
import "./App.css";
import ToastComponent from "./Components/ToastComponent";

export const ToastContext = createContext();
function App() {
  return (
    <div className="App">
      <ToastContext.Provider value={{ name: "bhargav", age: 29 }}>
        <ToastComponent />
      </ToastContext.Provider>
    </div>
  );
}

export default App;

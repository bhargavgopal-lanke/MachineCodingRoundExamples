import "./App.css";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Interest from "./components/Interest";
import { useState } from "react";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const activeTabs = [
    {
      name: "profile",
      component: Profile,
    },
    {
      name: "settings",
      component: Settings,
    },
    {
      name: "Interests",
      component: Interest,
    },
  ];

  const ActiveTabComponent = activeTabs[tabIndex].component;

  return (
    <div className="App">
      {activeTabs.map((x, i) => {
        return (
          <>
            <button onClick={() => setTabIndex(i)}>{x.name}</button>
          </>
        );
      })}
      <div>
        <ActiveTabComponent />
      </div>
    </div>
  );
}

export default App;

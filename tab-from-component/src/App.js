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
      <div className="tabs-sec">
        {activeTabs.map((x, i) => {
          return (
            <>
              <button className="tab-buttons" onClick={() => setTabIndex(i)}>{x.name}</button>
            </>
          );
        })}
        <div style={{padding: '20px 0'}}>
          <ActiveTabComponent />
        </div>
      </div>
    </div>
  );
}

export default App;

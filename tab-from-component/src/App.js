import "./App.css";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Interest from "./components/Interest";
import { useState } from "react";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  // data should be managed from the parent component
  const [data, setData] = useState({
    name: "Bhargav",
    age: 27,
    email: "blanke@gmail.com",
  });

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
              <button
                key={i}
                className={
                  i === tabIndex ? "active tab-buttons" : "tab-buttons"
                }
                onClick={() => setTabIndex(i)}
              >
                {x.name}
              </button>
            </>
          );
        })}
        <div style={{ padding: "20px 0" }}>
          <ActiveTabComponent data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}

export default App;

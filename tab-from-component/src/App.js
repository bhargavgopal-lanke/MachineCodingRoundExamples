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
    interests: ["coding", "sports", "walking"],
    theme: "dark",
  });
  
  const [fieldError, setFieldErros] = useState({});

  const activeTabs = [
    {
      name: "profile",
      component: Profile,
      validate: () => {
        const { name, age, email } = data;
        const errors = {};
        if (name.trim() === "" || name.length <= 2) {
          errors.name = "Name is invalid";
        }
        if (isNaN(age) || age < 18) {
          errors.age = "Please enter valid age";
        }
        if (email.trim() === "" || email.length <= 2) {
          errors.email = "Please enter valid email";
        }

        setFieldErros(errors);
        return errors.name || errors.age || errors.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one item";
        }
        setFieldErros(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "settings",
      component: Settings,
      validate: () => {
        const err = {};
        if (data.theme.length < 1) {
          err.theme = "Please select one theme";
        }
        setFieldErros(err);
        return err.theme ? false : true;
      },
    },
  ];

  const ActiveTabComponent = activeTabs[tabIndex].component;

  const prevButton = () => {
    if (activeTabs[tabIndex].validate()) {
      setTabIndex((prevState) => prevState - 1);
    }
  };
  const nextButton = () => {
    if (activeTabs[tabIndex].validate()) {
      setTabIndex((prevState) => prevState + 1);
    }
  };

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
          <ActiveTabComponent
            data={data}
            setData={setData}
            errors={fieldError}
          />
        </div>
        {tabIndex === activeTabs.length - 1 && <button>Submit</button>}
        {tabIndex > 0 && <button onClick={prevButton}>Prev</button>}
        {tabIndex < activeTabs.length - 1 && (
          <button onClick={nextButton}>Next</button>
        )}
      </div>
    </div>
  );
}

export default App;

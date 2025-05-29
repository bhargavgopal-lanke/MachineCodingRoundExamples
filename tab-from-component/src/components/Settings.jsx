import React from "react";

const Settings = ({ data, setData, errors }) => {
  const { theme } = data;
  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="dark"
            onChange={handleDataChange}
            checked={theme === "dark"}
          />
          Dark
        </label>
      </div>
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="light"
            onChange={handleDataChange}
            checked={theme === "light"}
          />
          Light
        </label>
      </div>
        {errors.interests && (
        <span style={{ color: "red", display: "block", fontWeight: "bold" }}>
          {errors.theme}
        </span>
      )}
    </div>
  );
};

export default Settings;


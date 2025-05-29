import React from "react";

const Interest = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleDataChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setData((prevState) => ({
      ...prevState,
      interests: checked
        ? [...prevState.interests, name]
        : prevState?.interests?.filter((i) => i !== name),
    }));
  };
  return (
    <div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={interests.includes("sports")}
            onChange={handleDataChange}
          />
          Sports
        </label>
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="walking"
            checked={interests.includes("walking")}
            onChange={handleDataChange}
          />
          Walking
        </label>
      </div>
      {errors.interests && (
        <span style={{ color: "red", display: "block", fontWeight: "bold" }}>
          {errors.interests}
        </span>
      )}
    </div>
  );
};

export default Interest;

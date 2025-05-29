import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  console.log("errors", errors);

  const handleDataChange = (e, item) => {
    const value = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [item]: value,
    }));
  };

  return (
    <div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => handleDataChange(e, "name")}
        />
        {errors.name && (
          <span style={{ color: "red", display: "block", fontWeight: "bold" }}>
            {errors.name}
          </span>
        )}
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="text"
          value={age}
          name="age"
          onChange={(e) => handleDataChange(e, "age")}
        />
        {errors.age && (
          <span style={{ color: "red", display: "block", fontWeight: "bold" }}>
            {errors.age}
          </span>
        )}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => handleDataChange(e, "email")}
        />
        {errors.email && (
          <span style={{ color: "red", display: "block", fontWeight: "bold" }}>
            {errors.email}
          </span>
        )}
      </div>
    </div>
  );
};

export default Profile;

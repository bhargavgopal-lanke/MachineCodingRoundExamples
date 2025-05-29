import React from "react";

const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

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
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="text"
          value={age}
          name="age"
          onChange={(e) => handleDataChange(e, "age")}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
    </div>
  );
};

export default Profile;

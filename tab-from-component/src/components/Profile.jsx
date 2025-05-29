import React from "react";

const Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  return (
    <div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="text"
          value={age}
          name="age"
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Profile;

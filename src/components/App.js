import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "./Actions";
import "./../styles/App.css";

const App = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(updateName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(updateEmail(event.target.value));
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>User Information</h1>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      /><br /><br />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      
        <p>Current values in store</p>
        <div className="output">
      Name - Thomas Edward Stark
      
        <p>Name: {name}</p>
        <p>Email: {email}</p>
       
      </div>
    </div>
  );
};

export default App;


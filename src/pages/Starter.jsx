import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Starter() {
  const navigator = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");

  const handleInput = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleProceedWithUsername = () => {
    if (usernameInput === "") {
      return;
    }

    navigator("/" + usernameInput);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <span className="p-2">Welcome to Profiler App 2.5</span>
      <div className="flex flex-row mt-3">
        <input
          className="p-2 border"
          type="text"
          placeholder="Enter username"
          onChange={(event) => handleInput(event)}
        />
        <input type="button" />
        <button
          className="bg-black text-white px-2"
          onClick={() => handleProceedWithUsername()}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Starter;

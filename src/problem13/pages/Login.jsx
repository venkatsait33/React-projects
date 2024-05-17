import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../context/actionTypes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to track errors
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_REQUEST });

    // Input validation: Ensure both email and password are provided
    if (email.trim() === "" || password.trim() === "") {
      setError("Email and password are required"); // Set error message
      return; // Prevent login with empty fields
    }

    try {
      const response = await fetch(
        `http://localhost:3001/voters?email=${email}&password=${password}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const user = data[0];
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        navigate("/voting"); // Redirect to voting page upon successful login
      } else {
        setError("Invalid email or password"); // Display error message
        dispatch({ type: LOGIN_FAILURE });
      }
    } catch (error) {
      setError("Login failed. Please try again."); // General error handling
      dispatch({ type: LOGIN_FAILURE });
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-semibold text-center">Login</h1>

      {/* Display error message */}
      {error && <p className="text-red-600 text-center mt-2">{error}</p>}
      
      <form onSubmit={handleLogin} className="flex flex-col space-y-4 mt-4">
        <span for="email">Email:</span>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) {
              setError(null); // Clear error when input changes
            }
          }}
          className="p-2 border border-gray-300 rounded"
        />
        <span for="password">Password:</span>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) {
              setError(null); // Clear error when input changes
            }
          }}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

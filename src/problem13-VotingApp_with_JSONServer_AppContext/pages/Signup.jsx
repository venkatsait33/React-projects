import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../context/actionTypes";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_REQUEST });

    try {
      // Create new user in the backend
      const response = await fetch("http://localhost:3001/voters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role: "user", // Default role for new users
          voted: false,
        }),
      });

      if (response.ok) {
        const newUser = await response.json();
        dispatch({ type: LOGIN_SUCCESS, payload: newUser });
        navigate("/voting"); // Redirect to the voting page upon successful signup
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "Signup failed" });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-md rounded max-h-screen mt-10">
      <h1 className="text-2xl font-semibold text-center">Signup</h1>
      <form onSubmit={handleSignup} className="flex flex-col space-y-4 mt-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

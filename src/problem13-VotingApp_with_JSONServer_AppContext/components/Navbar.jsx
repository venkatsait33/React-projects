import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { LOGOUT } from "../context/actionTypes";
import { Toast } from "@chakra-ui/react";
import { toast } from "react-toastify";

export const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const loaction = useLocation(); // Get the current location (route)

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/"); // Redirect to the login page on logout
    toast.warn("user is logout");
  };

  const isActive = (path) => {
    // Check if the current location matches the path
    return location.pathname === path
      ? "text-blue-500 p-4 border-b-4 border-blue-500"
      : "text-white";
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li className={`${isActive("/results")}`}>
          <Link to="/results" className="hover:text-gray-300">
            Results
          </Link>
        </li>
        {state.isAuthenticated ? (
          <>
            {state.user.role === "admin" && (
              <li className={`${isActive("/add-participant")}`}>
                <Link to="/add-participant" className="hover:text-gray-300">
                  Add Participant
                </Link>
              </li>
            )}
            <li className={`${isActive("/voting")}`}>
              <Link to="/voting" className="hover:text-gray-300">
                Voting
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="hover:text-gray-300">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className={`${isActive("/")}`}>
              <Link to="/" className="hover:text-gray-300">
                Login
              </Link>
            </li>
            <li className={`${isActive("/signup")}`}>
              <Link to="/signup" className="hover:text-gray-300">
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

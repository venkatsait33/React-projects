import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Result from "../pages/Result";
import PrivateRoute from "./PrivateRoute";
import Voting from "../pages/Voting";
import AddParticipant from "../pages/AddParticipant";
import Signup from "../pages/Signup";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/results" element={<Result />} />
      <Route path="/voting" element={<PrivateRoute component={<Voting />} />} />
      <Route
        path="/add-participants"
        element={<PrivateRoute component={<AddParticipant />} />}
      />
    </Routes>
  );
};

export default AllRoutes;

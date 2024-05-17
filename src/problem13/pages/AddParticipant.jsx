import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  ADD_PARTICIPANT_REQUEST,
  ADD_PARTICIPANT_SUCCESS,
  ADD_PARTICIPANT_FAILURE,
} from "../context/actionTypes";
import { toast } from "react-toastify";

const AddParticipant = () => {
  const [participantName, setParticipantName] = useState("");
   const [error, setError] = useState(null);

  const { dispatch } = useContext(AppContext);

  const handleAddParticipant = async (e) => {
    e.preventDefault();
     if (participantName.trim() === "") {
       // Check if the input is empty or whitespace
       setError("Participant name is required");
       // Display error message
       return;
     }

    dispatch({ type: ADD_PARTICIPANT_REQUEST });

    try {
      const response = await fetch("http://localhost:3001/participants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: participantName,
          votes: 0,
        }),
      });

      if (response.ok) {
        const newParticipant = await response.json();
        dispatch({ type: ADD_PARTICIPANT_SUCCESS, payload: newParticipant });
        setParticipantName("");
        setError(null)
        toast.success(newParticipant.name + " added successfully!");
      } else {
        throw new Error("Failed to add participant");
      }
    } catch (error) {
      dispatch({ type: ADD_PARTICIPANT_FAILURE, payload: error.message });
      toast.error("Failed to add participant");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-semibold text-center">Add Participant</h1>
      <form
        onSubmit={handleAddParticipant}
        className="flex flex-col space-y-4 mt-4"
      >
        <input
          type="text"
          placeholder="Participant Name"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={participantName.trim() === ""}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddParticipant;

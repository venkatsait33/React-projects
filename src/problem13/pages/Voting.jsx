import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import {
  FETCH_PARTICIPANTS_REQUEST,
  FETCH_PARTICIPANTS_SUCCESS,
  FETCH_PARTICIPANTS_FAILURE,
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_FAILURE,
} from "../context/actionTypes";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const Voting = () => {
  const { state, dispatch } = useContext(AppContext);
  const user = state.user;

  useEffect(() => {
    const fetchParticipants = async () => {
      dispatch({ type: FETCH_PARTICIPANTS_REQUEST });

      try {
        const response = await fetch(`http://localhost:3001/participants`);
        const data = await response.json();
        dispatch({ type: FETCH_PARTICIPANTS_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_PARTICIPANTS_FAILURE, payload: error.message });
      }
    };

    if (state.participants.length === 0) {
      fetchParticipants();
    }
  }, [dispatch, state.participants.length]);

  const handleVote = async (participantId) => {
    dispatch({ type: VOTE_REQUEST });

    try {
      const response1 = await fetch(
        `http://localhost:3001/participants/${participantId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            votes:
              state.participants.find((p) => p.id === participantId).votes + 1,
          }),
        }
      );

      const response2 = await fetch(
        `http://localhost:3001/voters/${state.user.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            voted: true,
          }),
        }
      );

      if (response1.ok && response2.ok) {
        dispatch({ type: VOTE_SUCCESS, payload: participantId });
        toast.success("Vote cast successfully!");
      } else {
        throw new Error("Failed to cast vote");
      }
    } catch (error) {
      dispatch({ type: VOTE_FAILURE, payload: error.message });
      toast.error("An error occurred while casting the vote.");
    }
  };

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold text-center mb-6">
        Your Vote, Your Voice!
      </h1>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Welcome ,{user.email}
      </h2>
      <ul className="flex flex-col space-y-4">
        {state.participants.map((participant) => (
          <li
            key={participant.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded"
          >
            <span className="text-lg font-medium">{participant.name}</span>
            <button
              onClick={() => handleVote(participant.id)}
              disabled={state.user.voted}
              className={`px-4 py-2 text-white rounded ${
                state.user.voted
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
            >
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Voting;

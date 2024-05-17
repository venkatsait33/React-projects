import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  FETCH_PARTICIPANTS_REQUEST,
  FETCH_PARTICIPANTS_SUCCESS,
  FETCH_PARTICIPANTS_FAILURE,
} from "../context/actionTypes";

const Result = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (state.participants.length === 0) {
      const fetchParticipants = async () => {
        dispatch({ type: FETCH_PARTICIPANTS_REQUEST });

        try {
          const response = await fetch(`http://localhost:3001/participants`);
          const data = await response.json();
          dispatch({ type: FETCH_PARTICIPANTS_SUCCESS, payload: data });
        } catch (error) {
          dispatch({
            type: FETCH_PARTICIPANTS_FAILURE,
            payload: error.message,
          });
        }
      };

      fetchParticipants();
    }
  }, [dispatch, state.participants.length]);

  const sortedParticipants = [...state.participants].sort(
    (a, b) => b.votes - a.votes
  );

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded">
      <h1 className="text-3xl font-bold text-center mb-6">Results</h1>
      <ul className="flex flex-col space-y-4 results-list">
        {sortedParticipants.map((participant) => (
          <li
            key={participant.id}
            className="bg-gray-100 p-4 rounded flex justify-between items-center"
          >
            <span className="text-lg font-medium">{participant.name}</span>
            <span className="text-lg text-gray-600 results-item">
              {participant.votes} votes
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;

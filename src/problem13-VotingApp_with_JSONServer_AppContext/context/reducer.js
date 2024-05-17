import {
  ADD_PARTICIPANT_REQUEST,
  ADD_PARTICIPANT_SUCCESS,
  ADD_PARTICIPANT_FAILURE,
  FETCH_PARTICIPANTS_REQUEST,
  FETCH_PARTICIPANTS_SUCCESS,
  FETCH_PARTICIPANTS_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_FAILURE,
} from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case ADD_PARTICIPANT_REQUEST:
    case FETCH_PARTICIPANTS_REQUEST:
    case VOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case ADD_PARTICIPANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        participants: [...state.participants, action.payload],
      };
    case FETCH_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        participants: action.payload,
      };
    case VOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          voted: true,
        },
        participants: state.participants.map((participant) =>
          participant.id === action.payload
            ? { ...participant, votes: participant.votes + 1 }
            : participant
        ),
      };

    case LOGIN_FAILURE:
    case ADD_PARTICIPANT_FAILURE:
    case FETCH_PARTICIPANTS_FAILURE:
    case VOTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "../constants";

const initialState = {
  timerLabel: "Pomodoro",
  isBusy: false,
  breakValue: 5,
  pomodoroValue: 25,
  timerValue: 1500,
  sessionCount: 1,
  totalSessionTime: 1800,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SESSION_COUNT:
      return {
        ...state,
        sessionCount: action.sessionCount,
      };
    case actionTypes.TOGGLE_ISBUSY:
      return {
        ...state,
        isBusy: action.isBusy,
      };
    case actionTypes.TOGGLE_POMODORO_LABEL:
      return {
        ...state,
        timerLabel: action.timerLabel,
      };
    case actionTypes.START_TIMER:
      return {
        ...state,
        timerValue: action.timerValue,
        totalSessionTime: action.totalSessionTime,
      };
    case actionTypes.RESET_TOTAL_SESSION_TIME:
      return {
        ...state,
        totalSessionTime: 1800,
      };
    case actionTypes.RESET_SESSION:
      return {
        ...state,
        sessionCount: 1,
        totalSessionTime: 1800,
      };
    case actionTypes.RESET_TIMERS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "../constants";

const initialState = {
  timerLabel: "Pomodoro",
  isBusy: false,
  breakValue: 0.1,
  pomodoroValue: 0.1,
  timerValue: 6,
  sessionCount: 1,
  totalSessionTime: 12,
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
        totalSessionTime: 12,
      };
    case actionTypes.RESET_SESSION:
      return {
        ...state,
        sessionCount: 1,
        totalSessionTime: 12,
      };
    case actionTypes.RESET_TIMERS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;

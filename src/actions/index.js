import * as actionTypes from "../constants";

//Reset Timer
export const handleTimerReset = () => ({ type: actionTypes.RESET_TIMERS });

//Reset Sessions
export const handleResetSession = () => ({ type: actionTypes.RESET_SESSION });

//Set Session Count
export const handleSessionCount = (sessionCount) => ({
  type: actionTypes.SET_SESSION_COUNT,
  sessionCount,
});
//Reset Total session time
export const handleResetTotalSessionTime = () => ({
  type: actionTypes.RESET_TOTAL_SESSION_TIME,
});

//Countdown while in break
export const breakCountdown = (breakValue, totalSessionTime) => ({
  type: actionTypes.START_TIMER,
  timerValue: breakValue * 60 - 1,
  totalSessionTime: totalSessionTime - 1,
});

//Countdown while in session
export const pomodoroCountdown = (pomodoroValue, totalSessionTime) => ({
  type: actionTypes.START_TIMER,
  timerValue: pomodoroValue * 60 - 1,
  totalSessionTime: totalSessionTime - 1,
});

//Toggle label
export const toggleLabel = (label) => ({
  type: actionTypes.TOGGLE_POMODORO_LABEL,
  timerLabel: label,
});

//Update Timer
export const handleCounter = (timerValue, totalSessionTime) => ({
  type: actionTypes.START_TIMER,
  timerValue: timerValue - 1,
  totalSessionTime: totalSessionTime - 1,
});

//Toggle isbusy
export const handleisBusy = (isBusy) => ({
  type: actionTypes.TOGGLE_ISBUSY,
  isBusy,
});

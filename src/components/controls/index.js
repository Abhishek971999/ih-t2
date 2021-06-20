import { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
//Action Creators
import {
  handleTimerReset,
  handleisBusy,
  handleCounter,
  toggleLabel,
  breakCountdown,
  handleSessionCount,
  handleResetSession,
  pomodoroCountdown,
  handleResetTotalSessionTime,
} from "../../actions/index";

const Controls = () => {
  //State for number of session. Default value is 1
  const [sessionCountVal, setSessionCountVal] = useState(1);

  //Getting Redux State
  const {
    timerValue,
    breakValue,
    pomodoroValue,
    timerLabel,
    isBusy,
    sessionCount,
    totalSessionTime,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  //Alert tune fon once timer becomes 0:00
  const alertTune = "https://www.soundjay.com/misc/wind-chime-1.mp3";

  //Creating a reference
  const alertRef = useRef();

  //Function to reset timer
  const handleReset = () => {
    dispatch(handleTimerReset());
    alertRef.current.pause();
    alertRef.current.time = 0;
  };

  //Toggle between pause and play for timer
  const handlePlayPause = () => {
    dispatch(handleisBusy(!isBusy));
  };

  //Function to update the timer every second and change labels
  const handleCount = () => {
    dispatch(handleCounter(timerValue, totalSessionTime));

    //If timer becomes 0, play the audio tune
    if (timerValue === 0) alertRef.current.play();
    if (timerValue === 0) {
      //Update label based on current timer label and keep updating the timer values
      if (timerLabel === "Pomodoro") {
        dispatch(toggleLabel("Break"));
        dispatch(breakCountdown(breakValue, totalSessionTime));
      } else {
        dispatch(toggleLabel("Pomodoro"));
        dispatch(pomodoroCountdown(pomodoroValue, totalSessionTime));
      }
    }
    if (totalSessionTime === 0) {
      //Check if session count is 1 . If yes, then reset timer,session count and total sesion timer
      if (sessionCount === 1) {
        //Reset the counter and the session values
        handleReset();
        dispatch(handleResetSession());
      } else {
        //Reduce Session Count and the time
        dispatch(handleSessionCount(parseInt(sessionCountVal) - 1));
        dispatch(handleResetTotalSessionTime());
      }
    }
  };

  //Function to change value of sessions.
  const handleSessionForm = (e) => {
    e.preventDefault();
    handleReset();
    dispatch(handleSessionCount(parseInt(sessionCountVal)));
  };

  useEffect(() => {
    //If the timer has started ie. isBusy is true, call handleCount function every 1 second
    if (isBusy) {
      let timerInterval = setInterval(() => {
        handleCount();
      }, 1000);
      // Clear interval if the component is unmounted
      return () => clearInterval(timerInterval);
    }
  });

  return (
    <Fragment>
      <div className="controls">
        <button className="control-btn" type="button" onClick={handlePlayPause}>
          {!isBusy ? <i class="fas fa-play"></i> : <i class="fas fa-pause"></i>}
        </button>
        <button className="control-btn" type="button" onClick={handleReset}>
          <i class="fas fa-redo-alt"></i>
        </button>
        <audio id="audio" src={alertTune} ref={alertRef} preload="auto" />
      </div>
      <form onSubmit={handleSessionForm}>
        <div className="row justify-content-center session-ip">
          <div className="col-sm-10">
            <input
              type="text"
              placeholder="Enter Number of Session"
              defaultValue={sessionCount}
              onBlur={(e) => setSessionCountVal(e.target.value)}
              required
            />
            <small className="mt-2">Default value of number of sessions will be 1</small>
          </div>
          <div className="col-sm-2">
            <button type="submit" className="submit-btn">
              <i class="fas fa-check"></i>
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Controls;

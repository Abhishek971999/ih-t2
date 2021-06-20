import { useSelector } from "react-redux";
import { formatTime } from "../../utils/formatTime";
const HeaderLabel = () => {
  const { timerLabel, timerValue } = useSelector((state) => state);
  const formattedTimerValue = formatTime(timerValue);
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-6 p-0 d-flex justify-content-center">
        <div className="pomodoro-labels">
          <h5>{timerLabel}</h5>
          <h1> {formattedTimerValue}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderLabel;

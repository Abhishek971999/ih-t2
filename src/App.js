import HeaderLabel from "./components/headerLabel";
import Controls from "./components/controls";

const App = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-4">
          <div className="pomodoro">
            <HeaderLabel />
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

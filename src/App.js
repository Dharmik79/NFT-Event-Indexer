import Profile from "./components/profile";
import "./App.css";
import Graph from "./components/Graph";
import Transactions from "./components/Transactions";
function App() {
  return (
    <div className="boxContainer">
      <div className="row1">
        <div className="profile">
          <Profile />
        </div>
        <div className="graph">
          <Graph />
        </div>
      </div>
      <div className="row2">
      <div className="transactions">
        <Transactions />
        </div>
      </div>
    </div>
  );
}

export default App;

import Profile from "./components/profile";
import "./App.css"
import Graph from "./components/Graph";
function App() {
  return (
    <div className="boxContainer">
      <div className="row1">
        <div className="profile">
          <Profile />
        </div>
        <div className="graph">
        <Graph/>
        </div>
      </div>
    </div>
  );
}

export default App;

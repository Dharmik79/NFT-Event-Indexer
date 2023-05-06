import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/nft" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

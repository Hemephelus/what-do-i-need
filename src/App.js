import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Summary from "./pages/Summary";

// import YourDetails from "./components/YourDetails";

function App() {
  return (
    <div>
    
      <Routes>
      <Route path="*" element={<Homepage />} />
        <Route path="/summary-calculation" element={<Summary/>} />
      </Routes>
    

    </div>
  );
}

export default App;

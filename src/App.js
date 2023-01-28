import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
// import Summary from "./pages/Summary";
import Dashboard from "./pages/Dashboard";
import yourDetailsDropDown from "./util";
import { useEffect } from "react";

// import YourDetails from "./components/YourDetails";

function App() {
  useEffect(() => {
    localStorage.setItem('CalcDetails', JSON.stringify(yourDetailsDropDown));
    // console.log(localStorage.getItem('CalcDetails'));
  }, []);
  return (
    <div>
    
      <Routes>
      <Route path="*" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/summary-calculation" element={<Summary/>} /> */}
      </Routes>
    

    </div>
  );
}

export default App;

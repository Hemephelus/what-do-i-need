import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Dashboard from "./pages/Dashboard";
import yourDetailsDropDown from "./util";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    localStorage.setItem('CalcDetails', JSON.stringify(yourDetailsDropDown));
  }, []);
  return (
    <div>
    
      <Routes>
      <Route path="*" element={<Homepage />} />
        <Route path="/dashboard*" element={<Dashboard/>} />
      </Routes>
    

    </div>
  );
}

export default App;

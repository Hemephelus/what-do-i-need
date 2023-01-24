import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Summary from "./pages/Summary";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col gap-[80px] App">
      <Header />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/summary-calculation" element={<Summary/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

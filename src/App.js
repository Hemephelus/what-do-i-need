import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Summary from "./pages/Summary";
import Footer from "./components/Footer";
import YourDetails from "./components/YourDetails";

function App() {
  return (
    <div className="flex flex-col gap-[80px] App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/summary-calculation" element={<Summary/>} />
        <Route path="/your-details" element={<YourDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./Reusable/Card";
import SelectBhk from "./Components/SelectBhk";
import RoomDesign from "./Components/RoomDesign";
import Package from "./Components/Package";
import GetQuote from "./Components/GetQuote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/selectbhk" element={<SelectBhk />}></Route>
          <Route path="/" element={<Card />} />
          <Route path="roomdesign" element={<RoomDesign />} />
          <Route path="package" element={<Package />} />
          <Route path="getquote" element={<GetQuote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

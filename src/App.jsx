import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import SelectBhk from "./Components/SelectBhk";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="selectBhk" element={<SelectBhk />}></Route>
        </Routes>
      </BrowserRouter>
      <Navbar />
      <Card />
    </>
  );
}

export default App;

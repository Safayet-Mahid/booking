import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllHotel from "./pages/AllHotel/AllHotel";
import Home from "./pages/home/Home";
import SingleHotel from "./pages/SingleHotel/SingleHotel";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<AllHotel />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Frame from "./routes/Frame";
import Home from "./pages/home/Home";
import ResortPages from "./pages/hotels & resorts/ResortPages";
import OffersPages from "./pages/offers/OffersPages";
import Resto from "./components/Resto";
import CardRoom from "./components/CardRoom";
import Wedding from "./components/Wedding";
import Fitnes from "./components/Fitnes";
import Meeting from "./components/Meetings";

function App() {
  return (
    <Routes>
      <Route element={<Frame />}>
        <Route path="/" element={<Home />} />
        <Route path="resorts" element={<ResortPages />} />
        <Route path="offers" element={<OffersPages />} />
        <Route path="resto" element={<Resto />} />
        <Route path="wedding" element={<Wedding />} />
        <Route path="meeting" element={<Meeting />} />

        <Route path="offers" element={<OffersPages />}>
          {/* Ini adalah rute indeks, yang akan merender CardRoom
              ketika URL-nya adalah `/offers` secara persis. */}
          <Route index element={<CardRoom />} />

          {/* Ini adalah rute anak yang akan muncul di `/offers/room` */}
          <Route path="room" element={<CardRoom />} />
          <Route path="resto" element={<Resto />} />
          <Route path="wedding" element={<Wedding />} />
          <Route path="fitnes" element={<Fitnes />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

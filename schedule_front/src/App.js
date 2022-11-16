import "./App.css";
import ScheduleResult from "./ScheduleResult";
import Entry from "./Entry";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  // setTokenParam(tokenObj);

  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/login" element={<Login />} />
      <Route path="/viewResult" element={<ScheduleResult />} />
      <Route path="/*" element={<Entry />} />
      <Route />
    </Routes>
  );
}

export default App;

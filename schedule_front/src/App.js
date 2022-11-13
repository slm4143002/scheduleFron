import "./App.css";
import ScheduleResult from "./ScheduleResult";
import Header from "./Header";
import Login from "./Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
      <Header />
      <ScheduleResult />
    </>
  );
}

export default App;

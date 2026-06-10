import { useEffect, useState } from "react";
import axios from "axios";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [message, setMessage] = useState("");

 useEffect(() => {
  axios.get("http://localhost:5000/api/templates")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <AppRoutes />;
      <h2>{message}</h2>
    </div>
  );
}

export default App;
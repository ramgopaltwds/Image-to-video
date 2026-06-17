import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const register = async () => {
    await API.post("/auth/register", { name, email, password });
    nav("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h1 className="text-xl font-bold mb-4">Register</h1>

        <input className="w-full border p-2 mb-2" placeholder="Name"
          onChange={(e) => setName(e.target.value)} />

        <input className="w-full border p-2 mb-2" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <input className="w-full border p-2 mb-2" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />

        <button onClick={register} className="w-full bg-black text-white p-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}
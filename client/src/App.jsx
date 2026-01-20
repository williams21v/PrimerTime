import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => setMsg(d.message))
      .catch(() => setMsg("API call failed"));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Vite + React + Express</h1>
      <p>{msg}</p>
    </div>
  );
}


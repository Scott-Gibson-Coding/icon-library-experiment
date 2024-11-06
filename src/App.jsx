import viteLogo from "/vite.svg";
import { AlertCircle } from "lucide-react";
// import { IconArrowLeft } from "@tabler/icons-react"; // <-- Friction in DX
import { ArrowLeftIcon } from "./icons"; // Local icon taken from tabler icons library
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Icon Libraries in Vite</h1>
      <AlertCircle color="red" size={48} />
      <ArrowLeftIcon
        color="green"
        height={48}
        width={48}
        style={{ backgroundColor: "#ccc", marginLeft: 12, borderRadius: 10 }}
      />
    </>
  );
}

export default App;

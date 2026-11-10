import "./App.css";
import Menu from "./components/Menu.jsx";
//1. importerer menydata
import { meny } from "./data/meny.js";

export default function App() {
  return (
    <>
      {/* 2. og sender dem videre som props til en underkomponent. */}
      <Menu meny={meny} />
    </>
  );
}

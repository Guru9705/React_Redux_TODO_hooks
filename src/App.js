import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TodoEditInput from "./components/TodoEditInput";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id/edit" element={<TodoEditInput />} />
      </Routes>
    </div>
  );
}

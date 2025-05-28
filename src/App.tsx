import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllTodos from "./pages/AllTodos";
import ActiveTodos from "./pages/ActiveTodos";
import CompletedTodos from "./pages/CompletedTodos";

// Envolvemos todo en BrowserRouter para usar rutas
export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo App 🚀</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllTodos />} />
          <Route path="/active" element={<ActiveTodos />} />
          <Route path="/completed" element={<CompletedTodos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

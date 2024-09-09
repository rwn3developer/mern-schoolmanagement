import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/Login";
import Register from "./pages/admin/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

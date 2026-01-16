import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

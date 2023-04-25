import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/auth/LoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdvertsPage from "./components/adverts/AdvertsPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/adverts"
          element={
            <ProtectedRoute>
              <AdvertsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/404" element={<h4>404 | Not found</h4>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;

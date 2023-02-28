import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./context/auth-context";
import Login from "./routes/Login";
import ProtectedPage from "./routes/ProtectedPage";
import PublicPage from "./routes/PublicPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<ProtectedPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

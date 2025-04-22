import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthOptions from "./components/AuthOptions";
import ProtectedAuthRoute from "./components/ProtectedAuthRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthOptions />} />
        <Route
          path="/auth/login/:role"
          element={
            <ProtectedAuthRoute>
              <SignIn />
            </ProtectedAuthRoute>
          }
        />
        <Route
          path="/auth/sign-up/:role"
          element={
            <ProtectedAuthRoute>
              <SignUp />
            </ProtectedAuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

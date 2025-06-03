import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthOptions from "./components/AuthOptions";
import ProtectedAuthRoute from "./components/ProtectedAuthRoute";
import StudentDashboard from "./pages/StudentDashboard";
import CategoryPage from "./pages/CategoryPage";
import StudentLayout from "./components/Layout/StudentLayout";
import PasswordRecovery from "./pages/PasswordRecovery";
import VerifyPassword from "./pages/VerifyPassword";
import ResetPassword from "./pages/ResetPassword";
import StudentProfile from "./components/StudentProfile";
import AgentLayout from "./components/AgentLayout";
import AgentDashboard from "./components/AgentDashboard";
import AddLodge from "./components/AddLodge";
import ManageListing from "./components/ManageListing";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/student-dashboard" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="/student-dashboard/profile" element={<StudentProfile />} />
        <Route path="/student-dashboard/:category" element={<CategoryPage />} />
      </Route>
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
      <Route
        path="/password-recovery/:role"
        element={
          <ProtectedAuthRoute>
            <PasswordRecovery />
          </ProtectedAuthRoute>
        }
      />
      <Route
        path="/verify-password/:role"
        element={
          <ProtectedAuthRoute>
            <VerifyPassword />
          </ProtectedAuthRoute>
        }
      />
      <Route
        path="/reset-password/:role"
        element={
          <ProtectedAuthRoute>
            <ResetPassword />
          </ProtectedAuthRoute>
        }
      />
      <Route path="/agent" element={<AgentLayout />}>
        <Route index element={<Navigate to="/agent/dashboard" />} />
        <Route path="/agent/dashboard" element={<AgentDashboard />} />
        <Route path="/agent/add-lodge" element={<AddLodge />} />
        <Route path="/agent/manage-listing" element={<ManageListing />} />
      </Route>
    </Routes>
  );
}

export default App;

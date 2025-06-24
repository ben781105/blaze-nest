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
import ProfileLayout from "./components/Layout/ProfileLayout";
import AgentLayout from "./components/AgentLayout";
import AgentDashboard from "./components/AgentDashboard";
import AddLodge from "./components/AddLodge";
import ManageListing from "./components/ManageListing";
import SubCategoryPage from "./pages/LodgesSubcategoryPage";
import LodgesPropertyLayout from "./components/Layout/LodgesPropertyLayout";
import StudentBookmarks from "./components/StudentBookmarks";
import StudentMarkets from "./components/StudentMarkets";
import PostAdd from "./components/postAdd";
import VerificationProgress from "./components/VerificationProgress";


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/student-dashboard" element={<StudentLayout />}>
        <Route index element={<Navigate to="/student-dashboard/home" />} />
        <Route path="/student-dashboard/profile" element={<ProfileLayout/>} />
        <Route path="/student-dashboard/home" element={<StudentDashboard />} />
        <Route path="/student-dashboard/saved" element={<StudentBookmarks />} />
        <Route path="/student-dashboard/cart" element={<StudentMarkets />}>
          <Route path="post-add" element={<PostAdd/>}/>
        </Route>
        <Route path="/student-dashboard/:category" element={<CategoryPage />} />
        <Route
          path="/student-dashboard/lodges&property"
          element={<LodgesPropertyLayout />}
        >
          <Route
            index
            element={
              <Navigate to="/student-dashboard/lodges&property/lodges" />
            }
          />
          <Route path=":subcategory" element={<SubCategoryPage />} />
        </Route>
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
      <Route
        path="/verification-progress/:role"
        element={
         
            <VerificationProgress />
       
        }
      />
    </Routes>
  );
}

export default App;

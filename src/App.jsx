import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthOptions from "./components/AuthOptions";
import ProtectedRoleRoute from "./components/ProtectedRoleRoute";
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
import PostAdd from "./components/PostAdd";
import VerificationProgress from "./components/VerificationProgress";
import ProfileSettings from "./components/ProfileSettings";
import PersonalDetails from "./components/PersonalDetails";
import ProfileVerificationLayout from "./components/Layout/ProfileVerificationLayout";
import MessagesLayout from "./components/Layout/MessagesLayout";
import ChatConversation from "./components/ChatConversation";
import ChatList from "./components/ChatList";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/student-dashboard" element={<StudentLayout />}>
        <Route index element={<Navigate to="/student-dashboard/home" />} />
        <Route path="/student-dashboard/profile" element={<ProfileLayout />} />
        <Route path="/student-dashboard/home" element={<StudentDashboard />} />
        <Route path="/student-dashboard/saved" element={<StudentBookmarks />} />
        <Route path="/student-dashboard/cart" element={<StudentMarkets />}>
          <Route path="post-add" element={<PostAdd />} />
        </Route>
        <Route path="/student-dashboard/chat" element={<MessagesLayout/>}>
          <Route index element={<ChatList/>}/>
          <Route path=":chatId" element={<ChatConversation/>} />
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
          <ProtectedRoleRoute>
            <SignIn />
          </ProtectedRoleRoute>
        }
      />
      <Route
        path="/auth/sign-up/:role"
        element={
          <ProtectedRoleRoute>
            <SignUp />
          </ProtectedRoleRoute>
        }
      />
      <Route
        path="/password-recovery/:role"
        element={
          <ProtectedRoleRoute>
            <PasswordRecovery />
          </ProtectedRoleRoute>
        }
      />
      <Route
        path="/verify-password/:role"
        element={
          <ProtectedRoleRoute>
            <VerifyPassword />
          </ProtectedRoleRoute>
        }
      />
      <Route
        path="/reset-password/:role"
        element={
          <ProtectedRoleRoute>
            <ResetPassword />
          </ProtectedRoleRoute>
        }
      />
      <Route path="/agent" element={<AgentLayout />}>
        <Route index element={<Navigate to="/agent/dashboard" />} />
        <Route path="/agent/dashboard" element={<AgentDashboard />} />
        <Route path="/agent/add-lodge" element={<AddLodge />} />
        <Route path="/agent/manage-listing" element={<ManageListing />} />
        <Route path="/agent/profile" element={<ProfileLayout />} />
      </Route>
      <Route
        path="/verification-progress/:role"
        element={
          <ProtectedRoleRoute>
            <VerificationProgress />
          </ProtectedRoleRoute>
        }
      />
      <Route
        path="/profile-settings/:role"
        element={
          <ProtectedRoleRoute>
            <ProfileSettings />
          </ProtectedRoleRoute>
        }
      />
      <Route path="/personal-details/:role" element={<PersonalDetails />} />
      <Route
        path="verify-profile/:role"
        element={
          <ProtectedRoleRoute>
            <ProfileVerificationLayout />
          </ProtectedRoleRoute>
        }
      />
    </Routes>
  );
}

export default App;

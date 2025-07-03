import { Navigate, useParams } from "react-router-dom";

function ProtectedRoleRoute({ children }) {
  const { role } = useParams();
  const validRoles = ["student", "agent"];

  if (!validRoles.includes(role)) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

export default ProtectedRoleRoute;

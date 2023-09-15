import React, { useEffect } from "react";
import { useAuth } from "../../../hooks/AuthContext";
import { useToast } from "../../../hooks/ToastContext";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay } from "../../../components";

function AdminProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { setToast } = useToast();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setToast({
        message: "You need to be authenticated to access this page.",
        type: "error",
        duration: 5000,
      });
      navigate("/admin/login");
    }
  }, [isLoading, isAuthenticated, navigate, setToast]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
}

export default AdminProtectedRoute;

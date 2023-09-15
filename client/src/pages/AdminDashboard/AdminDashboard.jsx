import React from "react";
import { useMutation } from "@apollo/client";
import utilStyles from "../../styles/utilities.module.css";
import { AdminProtectedRoute, SubmitButton } from "../../components";
import { useAuth } from "../../hooks/AuthContext";
import { ADMIN_LOGOUT } from "../../graphql/mutations";
import { useToast } from "../../hooks/ToastContext";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { logout } = useAuth();
  const [logoutMutation] = useMutation(ADMIN_LOGOUT);
  const { setToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const { data } = await logoutMutation();

      if (data.adminLogout.isAuthenticated) {
        setToast({ message: data.adminLogout.message, type: "error", duration: 5000 }); // unsuccessfully logout
      }

      logout();
      setToast({ message: data.adminLogout.message, type: "success", duration: 5000 }); // successfully logout
      navigate("/admin/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <AdminProtectedRoute>
      <div className={utilStyles.minHeight}>
        <h1>Admin Dashboard</h1>
        <SubmitButton text="Logout" handleSubmit={handleSubmit} />
      </div>
    </AdminProtectedRoute>
  );
}

export default AdminDashboard;

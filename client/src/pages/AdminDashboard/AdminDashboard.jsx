import React from "react";
import utilStyles from "../../styles/utilities.module.css";
import { AdminProtectedRoute } from "../../components";

function AdminDashboard() {
  return (
    <AdminProtectedRoute>
      <div className={utilStyles.minHeight}>
        <h1>Admin Dashboard</h1>
      </div>
    </AdminProtectedRoute>
  );
}

export default AdminDashboard;

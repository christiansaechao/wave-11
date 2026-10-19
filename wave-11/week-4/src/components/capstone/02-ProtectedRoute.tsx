import { Navigate } from "react-router";
import { create } from "zustand";

/*
Requirements:
- Make a tiny auth store: user: string | null, login(name), logout()
- Build a <ProtectedRoute> component: if there's no user, return <Navigate to="/login" />, otherwise render children
- "/login" has a name input that calls login() and navigates to "/dashboard"
- "/dashboard" is wrapped in <ProtectedRoute> and shows "Welcome, {user}" + a Log out button
- Visiting /dashboard while logged out sends you to /login
*/

export default function ProtectedRoutePractice() {
  return <div>{/* CODE HERE */}</div>;
}

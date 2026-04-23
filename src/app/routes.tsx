import { createHashRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SubscriptionPlan from "./pages/SubscriptionPlan";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import Forum from "./pages/Forum";

export const router = createHashRouter([
  { path: "/", Component: Login },
  { path: "/signup", Component: SignUp },
  { path: "/subscription", Component: SubscriptionPlan },
  { path: "/profile-setup", Component: ProfileSetup },
  { path: "/dashboard", Component: Dashboard },
  { path: "/forum", Component: Forum },
]);


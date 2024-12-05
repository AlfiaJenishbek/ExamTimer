import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CountdownTimer } from "../components/CountdownTimer";
import Timer from "../components/UI/Timer";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/count-down-timer"} />,
    },
    {
      path: "/count-down-timer",
      element: <CountdownTimer />,
    },
    {
      path: "/timer",
      element: <Timer />,
    },
  ]);
  return <RouterProvider router={router} />;
};

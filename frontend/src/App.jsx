import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import { FeedPage } from "./pages/Feed/FeedPage";

// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/feed",
    element: <FeedPage />,
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

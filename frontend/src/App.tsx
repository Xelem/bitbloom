import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts";
import Login from "./pages/auth/login/login";
import Signup from "./pages/auth/signup/signup";
import Home from "./pages/landingPages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

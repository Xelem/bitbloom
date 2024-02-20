import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts";
import Signin from "./pages/auth/signin/signin";
import Signup from "./pages/auth/signup/signup";
import About from "./pages/landingPages/about";
import Contact from "./pages/landingPages/contact";
import Home from "./pages/landingPages/home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/signin" element={<Signin />} />
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

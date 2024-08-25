import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Index } from "./pages/Index"; 
import { MyNotes } from "./pages/MyNotes";
import { MyProfile } from "./pages/MyProfile";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/mynotes",
    element: <MyNotes />,
  },
  {
    path: "/myprofile",
    element: <MyProfile />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {}
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

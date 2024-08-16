import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Index } from "./pages/Index"; 
import { MyNotes } from "./pages/MyNotes";
import { MyProfile } from "./pages/MyProfile";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

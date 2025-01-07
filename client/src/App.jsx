import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Register from "./components/auth/Register"
import Login from "./components/auth/login"

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1 className="text-destructive text-3xl" >Error</h1>
  },
  {
    element: <Auth/>,
    children: [
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

export default App

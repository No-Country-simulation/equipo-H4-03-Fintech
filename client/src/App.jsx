import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/public/Home"
import Auth from "./pages/public/Auth"
import Register from "./components/auth/Register"
import Login from "./components/auth/login"

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1 className="text-destructive text-3xl" >Error</h1>  // TODO: Pagina de error
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

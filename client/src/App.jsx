import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/public/Home"
import Onboarding from "./pages/public/Onboarding"
import Beginning from "./components/onboarding/Beginning"
import Dashboard from "./pages/private/Dashboard"

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1 className="text-destructive text-3xl" >Error</h1>  
    // TODO: Pagina de error
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    element: <Onboarding />,
    children: [
      {
        path: '/onboarding/',
        element: <Beginning />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

export default App

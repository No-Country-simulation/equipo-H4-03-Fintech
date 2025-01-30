import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/public/Home"
import dashboardRoutes from "./routes/dashboard"
import onboardingRoutes from "./routes/onboarding"

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
  onboardingRoutes,
  dashboardRoutes,
])

export default App

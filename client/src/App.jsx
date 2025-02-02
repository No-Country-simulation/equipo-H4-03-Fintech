import { createBrowserRouter, RouterProvider } from "react-router-dom"

import homeRoutes from "./routes/home"
import onboardingRoutes from "./routes/onboarding"
import dashboardRoutes from "./routes/dashboard"
import assetDetailsRoutes from "./routes/assetDetails"

const router = createBrowserRouter([
  ...homeRoutes,
  onboardingRoutes,
  dashboardRoutes,
  assetDetailsRoutes
])

export default function App () {
  return <RouterProvider router={router} />
}

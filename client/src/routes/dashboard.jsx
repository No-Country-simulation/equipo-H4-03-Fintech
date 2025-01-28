import Main from "../components/dashboard/Main";
import Dashboard from "../pages/private/Dashboard";

const dashboardRoutes = {
  path: '/dashboard',
  element: <Dashboard />,
  children: [
    {
      path: '/dashboard',
      element: <Main />
    }
  ]
}
export default dashboardRoutes
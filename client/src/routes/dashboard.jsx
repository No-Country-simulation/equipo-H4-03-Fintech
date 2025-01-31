import Dashboard from "../pages/private/Dashboard";
import Main from "../components/dashboard/Main";

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
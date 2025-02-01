import Dashboard from "../pages/private/Dashboard";
import Main from "../components/dashboard/Main";
import Wallet from "../components/dashboard/Wallet";
import Portfolio from "../components/dashboard/Portfolio";
import Social from "../components/dashboard/Social";
import Investment from "../components/dashboard/Investment";

const dashboardRoutes = {
  path: '/dashboard',
  element: <Dashboard />,
  children: [
    {
      path: '/dashboard',
      element: <Main />
    },
    {
      path: '/dashboard/investment',
      element: <Investment />
    },
    {
      path: '/dashboard/social',
      element: <Social />
    },
    {
      path: '/dashboard/portfolio',
      element: <Portfolio />
    },
    {
      path: '/dashboard/wallet',
      element: <Wallet />
    },
  ]
}
export default dashboardRoutes
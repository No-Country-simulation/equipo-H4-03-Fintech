import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/public/Home"
import Onboarding from "./pages/private/Onboarding"
import Beginning from "./components/onboarding/Beginning"
import Dashboard from "./pages/private/Dashboard"
import Profile from "./components/onboarding/OnboardinProfile"
import Identification from "./components/onboarding/OnboardinIdentification"
import Address from "./components/onboarding/OnboardinAddress"
import FinancialKnowledge from "./components/onboarding/FinancialKnowledge"
import PreInversor from "./components/onboarding/PreInversor"
import FinancialGoal from "./components/onboarding/FinancialGoal"
import RiskTolerance from "./components/onboarding/RiskTolerance"
import SavingsCapacity from "./components/onboarding/SavingsCapacity"

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
      },
      {
        path: '/onboarding/profile',
        element: <Profile />
      },
      {
        path: '/onboarding/identification',
        element: <Identification />
      },
      {
        path: '/onboarding/address',
        element: <Address />
      },
      {
        path: '/onboarding/pre-investor',
        element: <PreInversor />
      },
      {
        path: '/onboarding/financial-knowledge',
        element: <FinancialKnowledge />
      },
      {
        path: '/onboarding/financial-goal',
        element: <FinancialGoal />
      },
      {
        path: '/onboarding/risk-tolerance',
        element: <RiskTolerance />
      },
      {
        path: '/onboarding/savings-capacity',
        element: <SavingsCapacity />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

export default App

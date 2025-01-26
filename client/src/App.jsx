import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/public/Home"
import Onboarding from "./pages/private/Onboarding"
import Beginning from "./components/onboarding/Beginning"
import Dashboard from "./pages/private/Dashboard"
import Profile from "./components/onboarding/OnboardinProfile"
import OnboardingLocation from "./components/onboarding/OnboardinLocation"
import FinancialKnowledge from "./components/onboarding/FinancialKnowledge/Index"
import PreInversor from "./components/onboarding/PreInversor"
import FinancialGoal from "./components/onboarding/FinancialGoal/Index"
import RiskTolerance from "./components/onboarding/RiskTolerance/Index"
import SavingsCapacity from "./components/onboarding/SavingsCapacity"
import TestInversorResult from "./components/onboarding/Result"
import FinancialLevel from "./components/onboarding/FinancialKnowledge/Level"
import FinancialInstruments from "./components/onboarding/FinancialKnowledge/FinancialInstruments"
import InterpretGraphics from "./components/onboarding/FinancialKnowledge/InterpretGraphics"
import MainPorpouse from "./components/onboarding/FinancialGoal/MainPorpouse"
import MainGoal from "./components/onboarding/FinancialGoal/MainGoal"
import Fluctuations from "./components/onboarding/RiskTolerance/Fluctuations"
import Percentages from "./components/onboarding/RiskTolerance/Percentages"

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
        path: '/onboarding/location',
        element: <OnboardingLocation />
      },
      {
        path: '/onboarding/pre-investor',
        element: <PreInversor />
      },
      {
        path: '/onboarding/financial-knowledge',
        element: <FinancialKnowledge />,
        children: [
          {
            path: '/onboarding/financial-knowledge/',
            element: <FinancialLevel />
          },
          {
            path: '/onboarding/financial-knowledge/instruments',
            element: <FinancialInstruments />
          },
          {
            path: '/onboarding/financial-knowledge/graphics',
            element: <InterpretGraphics />
          },
        ]
      },
      {
        path: '/onboarding/financial-goal',
        element: <FinancialGoal />,
        children: [
          {
            path: '/onboarding/financial-goal/',
            element: <MainPorpouse />,
          },
          {
            path: '/onboarding/financial-goal/goal',
            element: <MainGoal />,
          }
        ]
      },
      {
        path: '/onboarding/risk-tolerance',
        element: <RiskTolerance />,
        children: [
          {
            path: '/onboarding/risk-tolerance/',
            element: <Fluctuations />
          },
          {
            path: '/onboarding/risk-tolerance/percentages',
            element: <Percentages />
          }
        ]
      },
      {
        path: '/onboarding/savings-capacity',
        element: <SavingsCapacity />
      },
      {
        path: '/onboarding/test-result',
        element: <TestInversorResult />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

export default App

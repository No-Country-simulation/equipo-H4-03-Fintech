import Onboarding from "@pages/private/Onboarding";
import Beginning from "@components/onboarding/Beginning";
//#region PERS. DATA
import Profile from "@components/onboarding/OnboardinProfile";
import OnboardingLocation from "@components/onboarding/OnboardinLocation";
//#region CONOCIMIENTO
import PreInversor from "@components/onboarding/PreInversor";
import FinancialLevel from "@components/onboarding/FinancialKnowledge/Level";
import FinancialKnowledge from "@components/onboarding/FinancialKnowledge/Index";
import FinancialInstruments from "@components/onboarding/FinancialKnowledge/FinancialInstruments";
import InterpretGraphics from "@components/onboarding/FinancialKnowledge/InterpretGraphics";
//#region OBJETIVOS
import FinancialGoal from "@components/onboarding/FinancialGoal/Index";
import MainGoal from "@components/onboarding/FinancialGoal/MainGoal";
import MainPorpouse from "@components/onboarding/FinancialGoal/MainPorpouse";
//#region TOLERANCIA
import Fluctuations from "@components/onboarding/RiskTolerance/Fluctuations";
import RiskTolerance from "@components/onboarding/RiskTolerance/Index";
import Percentages from "@components/onboarding/RiskTolerance/Percentages";
//#region CAP. AHORRO
import SavingsCapacity from "@components/onboarding/SavingsCapacity";

import TestInversorResult from "@components/onboarding/Result";

const onboardingRoutes = {
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
  }

  export default onboardingRoutes
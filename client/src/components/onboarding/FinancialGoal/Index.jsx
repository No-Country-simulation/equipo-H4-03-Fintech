import { Outlet } from "react-router-dom";
import OnboardingProgressBar from "@ui/onboarding/OnboardingProgressBar";
import OnboardingNavbar from "@ui/onboarding/OnboardingNavbar";

export default function FinancialGoal() {

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <OnboardingNavbar close={true}/>
      <OnboardingProgressBar />
      <header className="text-title">Objetivos principales</header>
      <Outlet />
    </main>
  )
}

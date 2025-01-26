import { Outlet } from "react-router-dom";
import OnboardingProgressBar from "../../ui/OnboardingProgressBar";
import OnboardingNavbar from "../../ui/OnboardingNavbar";

export default function RiskTolerance() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <OnboardingNavbar close={true}/>
      <OnboardingProgressBar />
      <header className="text-title">Preferencia de riesgo</header>
      <Outlet />
    </main>
  )
}

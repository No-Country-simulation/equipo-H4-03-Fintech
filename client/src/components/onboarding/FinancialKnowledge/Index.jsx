import { Outlet } from "react-router-dom";
import OnboardingProgressBar from "../../ui/OnboardingProgressBar";
import OnboardingNavbar from "../../ui/OnboardingNavbar";

export default function IndexFinancialKnowledge() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-white p-5 pt-[60px]">
      <OnboardingNavbar close={true}/>
      <OnboardingProgressBar />
      <header className="text-title font-bold">Nivel de Conocimiento Financiero</header>
      <Outlet />
    </main>
  )
}

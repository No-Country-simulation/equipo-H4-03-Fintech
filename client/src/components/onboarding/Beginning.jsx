import { Link } from "react-router-dom";
import OnboardingNavbar from "../ui/OnboardingNavbar";

export default function Beginning() {
  return (
    <main className="w-dvw h-dvh flex flex-col items-center justify-between pt-10 pb-5 relative bg-background">
      <div className="flex flex-col items-center">
        <OnboardingNavbar close={false} />
        <img 
          src="\assets\default-user.svg" 
          alt="default user image"
          className="h-44"
        />
        <header className="text-title">Completar perfil</header>
        <p className="w-80 text-wrap text-center">
          Necesitamos algunos detalles para optimizar tus recomendaciones y asegurar tu cuenta. Este proceso solo te tomará unos minutos.
        </p>
      </div>
      <Link to="/onboarding/profile" className="w-80 py-2 rounded-3xl bg-primary text-white text-center bottom-10 fixed">Comenzar</Link>
    </main>
  )
}

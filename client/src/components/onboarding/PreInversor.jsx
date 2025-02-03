import { Link } from "react-router-dom";
import SecondaryLink from "../ui/SecondaryLink";
import OnboardingNavbar from "../ui/onboarding/OnboardingNavbar";

export default function PreInversor() {

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-white p-5 pt-[60px]">
      <section className="w-80 flex flex-col items-center gap-5">
        <OnboardingNavbar close={false} />
        <img src="/assets/user-badge.svg" alt="user badge image" />
        <h1 className="text-title">Test de Inversor</h1>
        <p className="text-wrap text-center">
          Necesitamos algunos detalles para optimizar tus recomendaciones y asegurar tu cuenta. Este proceso solo te tomará unos minutos.
        </p>
        <Link to="/onboarding/financial-knowledge"
          className="w-full text-center text-white bg-primary px-6 py-3 mt-10 text-base font-medium rounded-3xl cursor-pointer"
        >
          Empesar ahora
        </Link>
        <SecondaryLink label={'Más tarde'} to={'/dashboard'} />
      </section>
    </main>
  )
}

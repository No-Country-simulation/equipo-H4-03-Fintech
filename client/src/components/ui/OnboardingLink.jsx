import { Link } from "react-router-dom";

export default function OnboardingLink() {
  return (
    <main className="w-[600px] flex flex-col bg-primary rounded-3xl p-5 gap-4">
      <aside className="flex items-center justify-start gap-2">
        <article className="size-5 flex items-center justify-center rounded-full bg-[#34A853]">
          <img src="/assets/check.svg" alt="check icon" className="w-3.5 h-[10.162666320800781px]" />
        </article>
        <div className="w-5 h-[2px] bg-white" />
        <article className="size-5 flex items-center justify-center rounded-full bg-[#34A853]">
          <img src="/assets/check.svg" alt="check icon" className="w-3.5 h-[10.162666320800781px]" />
        </article>
        <div className="w-5 h-[2px] bg-white" />
        <article className="size-5 flex items-center justify-center rounded-full bg-white">
          <span className="font-normal text-base text-[#34a853]">3</span>
        </article>
        <span className="font-normal text-base text-background">70% completado</span>
      </aside>
      <aside className="flex flex-col gap-1">
        <span className="font-medium text-subtitle text-background">Completa tu información y</span>
        <span className="font-medium text-subtitle text-background">accede a más funciones.</span>
      </aside>
      <aside className="flex items-end justify-between">
        <Link to='/onboarding/' className="w-[120px] h-8 bg-white rounded-full flex justify-center items-center">
          <span className="font-medium text-base text-primary">Completar</span>
        </Link>
        <img
          src="/assets/money&plant.svg"
          alt="money & plant image"
          className="size-24 -mt-7 -mb-5 mr-5"
        />
      </aside>
    </main>
  )
}

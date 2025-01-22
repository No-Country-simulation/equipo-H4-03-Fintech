import { Link } from "react-router-dom";

export default function Beginning () {
  return (
    <main className="w-dvw h-dvh flex flex-col items-center justify-center gap-5">
      <header className="text-title">Completar perfil</header>
      <p className="w-80 text-wrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit vitae reiciendis beatae ipsam minus corrupti deserunt dicta quam explicabo?
      </p>
      <Link to="/onboarding/profile" className="border border-slate-300 px-6 py-2 rounded-3xl">Comenzar</Link>
    </main>
  )
}

import { Link } from "react-router-dom";

export default function TestInversorResult() {
  const data = {
    perfil: 'Conservador',
    testResult: 'Tu prioridad es mantener tus inversiones seguras y estables. Prefieres minimizar riesgos, incluso si eso significa obtener rendimientos más modestos. Te recomendamos opciones como bonos, fondos de inversión de bajo riesgo.'
  }

  return (
    <main className="w-dvw h-dvh flex flex-col items-center justify-between pt-24 pb-5 bg-background">
      <div className="flex flex-col">
        <img
          src="\assets\user-badge.svg"
          alt="default user image"
          className="h-44"
        />
        <header className="text-title">Perfil {data.perfil}</header>
        <p className="w-80 text-wrap text-center">
          {data.testResult}
        </p>
      </div>
      <Link to="/dashboard" className="w-80 py-2 rounded-3xl bg-primary text-white text-center bottom-10 fixed">Finalizar</Link>
    </main>
  )
}

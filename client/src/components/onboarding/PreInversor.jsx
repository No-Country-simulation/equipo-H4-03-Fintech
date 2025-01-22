import { useNavigate } from "react-router-dom";
import SubtmitButton from "../ui/SubtmitButton";

export default function PreInversor() {
  
  const navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault()
    navigate('/onboarding/financial-knowledge')
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <h1 className="text-title text-primary">Perfil de Inversor</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] flex flex-col items-center gap-4 m-4 bg-white rounded-3xl p-8 shadow-form"
      >
        <div className="size-64 border-2 border-primary" />
        <SubtmitButton value={"Siguiente"} />
      </form>
    </main>
  )
}

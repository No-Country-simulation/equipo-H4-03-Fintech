import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FinancialProgressBar from "../ui/FinancialProgressBar";
import SecondaryLink from "../ui/SecondaryLink";
import SubtmitButton from "../ui/SubtmitButton";
import QuestionRadio from "../ui/QuestionRadio";
import QuestionsContainer from "../ui/QuestionsContainer";

export default function FinancialGoal() {

  const initialFormState = {
    question1: null,
    question2: null,
  }
  const [formData, setFormData] = useState(initialFormState)
  const handleRadioChange = ({ target: { name, value } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const navigate = useNavigate()
  const initialErrorsState = {
    question1: false,
    question2: false,
  }
  const [errors, setErrors] = useState(initialErrorsState)
  const handleSubmit = event => {
    event.preventDefault()

    const question1 = formData.question1 === null
    const question2 = formData.question2 === null
    if (question1 | question2) {
      setErrors({
        question1,
        question2
      })
      return
    } else if (!question1 && !question2) {
      setErrors(initialErrorsState)
      navigate('/onboarding/risk-tolerance')
    }
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <header className="text-title text-primary">Objetivos Financieros</header>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] flex flex-col items-start gap-4 m-4 bg-white rounded-3xl p-8 shadow-form"
      >
        <div className="self-end px-4 py-2 font-bold bg-[#FFD700] rounded-sm">P2</div>
        <QuestionsContainer
          title={"¿Cuál es tu principal objetivo financiero al usar esta app?"}
        >
          <QuestionRadio
            title={"Ahorrar para metas a corto o mediano plazo."}
            name={"question1"}
            value={"1"}
            checked={formData.question1 === "1"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Construir un portafolio de inversión a largo plazo."}
            name={"question1"}
            value={"2"}
            checked={formData.question1 === "2"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Obtener ganancias rápidas a través del trading."}
            name={"question1"}
            value={"3"}
            checked={formData.question1 === "3"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Generar ingresos adicionales para complementar mis finanzas."}
            name={"question1"}
            value={"4"}
            checked={formData.question1 === "4"}
            handler={handleRadioChange}
          />
          {errors?.question1 && (
            <span className="text-destructive text-sm">
              Debes seleccionar una opción
            </span>
          )}
        </QuestionsContainer>

        <QuestionsContainer
          title={"¿Tienes una meta específica en mente para tus ahorros o inversiones?"}
        >
          <QuestionRadio
            title={"Sí, quiero ahorrar para un objetivo específico (ej., casa, auto, viaje)."}
            name={"question2"}
            value={"1"}
            checked={formData.question2 === "1"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"No, mi prioridad es construir capital sin una meta definida."}
            name={"question2"}
            value={"2"}
            checked={formData.question2 === "2"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Quiero planificar mi retiro."}
            name={"question2"}
            value={"3"}
            checked={formData.question2 === "3"}
            handler={handleRadioChange}
          />
          {errors?.question2 && (
            <span className="text-destructive text-sm">
              Debes seleccionar una opción
            </span>
          )}
        </QuestionsContainer>

        <FinancialProgressBar points={2} />
        <SubtmitButton value={'Siguiente'} />
        <SecondaryLink label={'Llenar más tarde'} to={'/dashboard'} />
      </form>
    </main>
  )
}

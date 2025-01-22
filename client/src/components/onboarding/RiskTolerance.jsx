import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FinancialProgressBar from "../ui/FinancialProgressBar";
import SecondaryLink from "../ui/SecondaryLink";
import SubtmitButton from "../ui/SubtmitButton";
import QuestionRadio from "../ui/QuestionRadio";
import QuestionsContainer from "../ui/QuestionsContainer";
import QuestionCheckbox from "../ui/QuestionCheckbox";

export default function RiskTolerance() {
  const initialFormState = {
    question1: null,
    question2: [],
    question3: null,
    question4: null,
  }
  const [formData, setFormData] = useState(initialFormState)
  const handleRadioChange = ({ target: { name, value } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter(item => item !== value)
    }))
  }

  const navigate = useNavigate()
  const initialErrorsState = {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  }
  const [errors, setErrors] = useState(initialErrorsState)
  const handleSubmit = event => {
    event.preventDefault()

    const question1 = formData.question1 === null
    const question2 = formData.question2.length === 0
    const question3 = formData.question3 === null
    const question4 = formData.question4 === null

    if (question1 | question2 | question3 | question4) {
      setErrors({
        question1,
        question2,
        question3,
        question4
      })
      return
    } else if (!question1 && !question2 && !question3 && !question4) {
      setErrors(initialErrorsState)
      navigate('/onboarding/savings-capacity')
    }
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <header className="text-title text-primary">Tolerancia al Riesgo</header>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] flex flex-col items-start gap-4 m-4 bg-white rounded-3xl p-8 shadow-form"
      >
        <div className="self-end px-4 py-2 font-bold bg-[#FFD700] rounded-sm">P3</div>
        <QuestionsContainer
          title={"¿Qué tan cómodo te sientes con las fluctuaciones de valor en tus inversiones?"}
        >
          <QuestionRadio
            title={"Prefiero estabilidad y evitar pérdidas, aunque los retornos sean bajos."}
            name={"question1"}
            value={"1"}
            checked={formData.question1 === "1"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Estoy dispuesto a asumir algunos riesgos para obtener mayores ganancias."}
            name={"question1"}
            value={"2"}
            checked={formData.question1 === "2"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Estoy cómodo con riesgos altos para maximizar el potencial de retorno."}
            name={"question1"}
            value={"3"}
            checked={formData.question1 === "3"}
            handler={handleRadioChange}
          />
          {errors?.question1 && (
            <span className="text-destructive text-sm">
              Debes seleccionar una opción
            </span>
          )}
        </QuestionsContainer>

        <QuestionsContainer
          title={"Si una inversión pierde un 20% de su valor en un mes, ¿qué harías?"}
        >
          <QuestionCheckbox
            title={"Retiraría mi dinero para evitar más pérdidas."}
            name={"question2"}
            value={"1"}
            handler={handleCheckboxChange}
          />
          <QuestionCheckbox
            title={"Mantendría mi inversión y esperaría una recuperación."}
            name={"question2"}
            value={"2"}
            handler={handleCheckboxChange}
          />
          <QuestionCheckbox
            title={"Compraría más de ese activo para aprovechar el precio bajo."}
            name={"question2"}
            value={"3"}
            handler={handleCheckboxChange}
          />
          {errors?.question2 && (
            <span className="text-destructive text-sm">
              Debes seleccionar al menos una opción
            </span>
          )}
        </QuestionsContainer>

        <QuestionsContainer
          title={"¿Qué porcentaje de tus ingresos estás dispuesto a destinar a inversiones de alto riesgo?"}
        >
          <QuestionRadio
            title={"Menos del 10%."}
            name={"question3"}
            value={"1"}
            checked={formData.question3 === "1"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Entre el 10% y el 30%."}
            name={"question3"}
            value={"2"}
            checked={formData.question3 === "2"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Más del 30%."}
            name={"question3"}
            value={"3"}
            checked={formData.question3 === "3"}
            handler={handleRadioChange}
          />
          {errors?.question3 && (
            <span className="text-destructive text-sm">
              Debes seleccionar una opción
            </span>
          )}
        </QuestionsContainer>

        <QuestionsContainer
          title={"¿Te gustaría operar con instrumentos de alto riesgo como apalancamiento o futuros?"}
        >
          <QuestionRadio
            title={"No estoy interesado."}
            name={"question4"}
            value={"1"}
            checked={formData.question4 === "1"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Tal vez en el futuro."}
            name={"question3"}
            value={"2"}
            checked={formData.question4 === "2"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Sí, me interesa operar con ellos."}
            name={"question3"}
            value={"3"}
            checked={formData.question4 === "3"}
            handler={handleRadioChange}
          />
          {errors?.question4 && (
            <span className="text-destructive text-sm">
              Debes seleccionar una opción
            </span>
          )}
        </QuestionsContainer>

        <FinancialProgressBar points={3} />
        <SubtmitButton value={'Siguiente'} />
        <SecondaryLink label={'Llenar más tarde'} to={'/dashboard'} />
      </form>
    </main>
  )
}

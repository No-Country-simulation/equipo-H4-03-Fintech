import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FinancialProgressBar from "../ui/FinancialProgressBar";
import SecondaryLink from "../ui/SecondaryLink";
import SubtmitButton from "../ui/SubtmitButton";
import QuestionRadio from "../ui/QuestionRadio";
import QuestionsContainer from "../ui/QuestionsContainer";
import QuestionCheckbox from "../ui/QuestionCheckbox";

export default function FinancialKnowledge() {

  const initialFormState = {
    question1: null,
    question2: [],
    question3: null,
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
  }
  const [errors, setErrors] = useState(initialErrorsState)
  const handleSubmit = event => {
    event.preventDefault()

    const question1 = formData.question1 === null
    const question2 = formData.question2.length === 0
    const question3 = formData.question3 === null

    if (question1 | question2 | question3) {
      setErrors({
        question1,
        question2,
        question3,
      })
      return
    } else if (!question1 && !question2 && !question3) {
      setErrors(initialErrorsState)
      navigate('/onboarding/financial-goal')
    }
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <header className="text-title text-primary">Nivel de Conocimientos Financieros</header>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] flex flex-col items-start gap-4 m-4 bg-white rounded-3xl p-8 shadow-form"
      >
        <div className="self-end px-4 py-2 font-bold bg-[#FFD700] rounded-sm">P1</div>

        <QuestionsContainer
          title={"¿Cuánto conoces sobre inversiones y finanzas personales?"}
        >
          <QuestionRadio
            title={"Soy principiante, no tengo experiencia previa."}
            name={"question1"}
            value={"1"}
            checked={formData.question1 === "1"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Tengo conocimientos básicos, entiendo algunos conceptos."}
            name={"question1"}
            value={"2"}
            checked={formData.question1 === "2"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Tengo experiencia moderada y he invertido en algunos instrumentos."}
            name={"question1"}
            value={"3"}
            checked={formData.question1 === "3"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Tengo experiencia avanzada y manejo estrategias complejas."}
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
          title={"¿Qué instrumentos financieros conoces o has utilizado?"}
        >
          <QuestionCheckbox
            title={"Cuentas de ahorro y plazos fijos."}
            name={"question2"}
            value={"1"}
            handler={handleCheckboxChange}
          />
          <QuestionCheckbox
            title={"ETFs y fondos indexados."}
            name={"question2"}
            value={"2"}
            handler={handleCheckboxChange}
          />
          <QuestionCheckbox
            title={"Acciones de empresas."}
            name={"question2"}
            value={"3"}
            handler={handleCheckboxChange}
          />
          <QuestionCheckbox
            title={"Criptomonedas."}
            name={"question2"}
            value={"4"}
            handler={handleCheckboxChange}
          />
          <QuestionCheckbox
            title={"Derivados financieros (futuros, opciones, apalancamientos)."}
            name={"question2"}
            value={"5"}
            handler={handleCheckboxChange}
          />
          {errors?.question2 && (
            <span className="text-destructive text-sm">
              Debes seleccionar al menos una opción
            </span>
          )}
        </QuestionsContainer>

        <QuestionsContainer
          title={"¿Sabes cómo interpretar gráficos o análisis de mercado financiero?"}
        >
          <QuestionRadio
            title={"No, no los entiendo."}
            name={"question3"}
            value={"1"}
            checked={formData.question3 === "1"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Conozco lo básico, pero necesito apoyo para analizarlos."}
            name={"question3"}
            value={"2"}
            checked={formData.question3 === "2"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Sí, los utilizo regularmente en mis decisiones."}
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

        <FinancialProgressBar points={1} />

        <SubtmitButton value={'Siguiente'} />
        <SecondaryLink label={'Llenar más tarde'} to={'/dashboard'} />
      </form>
    </main>
  )
}

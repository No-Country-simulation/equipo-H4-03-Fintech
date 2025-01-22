import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FinancialProgressBar from "../ui/FinancialProgressBar";
import SecondaryLink from "../ui/SecondaryLink";
import SubtmitButton from "../ui/SubtmitButton";
import QuestionRadio from "../ui/QuestionRadio";
import QuestionsContainer from "../ui/QuestionsContainer";
import QuestionCheckbox from "../ui/QuestionCheckbox";

export default function SavingsCapacity() {

  const initialFormState = {
    question1: null,
    question2: [],
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
  }
  const [errors, setErrors] = useState(initialErrorsState)
  const handleSubmit = event => {
    event.preventDefault()

    const question1 = formData.question1 === null
    const question2 = formData.question2.length === 0

    if (question1 | question2) {
      setErrors({
        question1,
        question2,
      })
      return
    } else if (!question1 && !question2) {
      setErrors(initialErrorsState)
      navigate('/dashboard')
    }
  }


  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <header className="text-title text-primary">Capacidad de Ahorro</header>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] flex flex-col items-start gap-4 m-4 bg-white rounded-3xl p-8 shadow-form"
      >
        <div className="self-end px-4 py-2 font-bold bg-[#FFD700] rounded-sm">P4</div>
        <QuestionsContainer
          title={"¿Cuál es tu ingreso mensual estimado?"}
        >
          <QuestionRadio
            title={"Menos de $500 USD."}
            name={"question1"}
            value={"1"}
            checked={formData.question1 === "1"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Entre $500 y $1,000 USD."}
            name={"question1"}
            value={"2"}
            checked={formData.question1 === "2"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Entre $1,000 y $5,000 USD."}
            name={"question1"}
            value={"3"}
            checked={formData.question1 === "3"}
            handler={handleRadioChange}
          />
          <QuestionRadio
            title={"Más de $5,000 USD."}
            name={"question1"}
            value={"1"}
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
          title={"¿Cuánto de tus ingresos mensuales destinas actualmente a ahorro o inversiones?"}
        >
          <QuestionCheckbox
            title={"Menos del 5%."}
            name={"question2"}
            value={"1"}
            handler={handleCheckboxChange}
          />
          <QuestionCheckbox
            title={"Entre el 5% y el 15%."}
            name={"question2"}
            value={"2"}
            handler={handleCheckboxChange}
          />
          <QuestionCheckbox
            title={"Más del 30%."}
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
        
        <FinancialProgressBar points={4} />
        <SubtmitButton value={'Siguiente'} />
        <SecondaryLink label={'Llenar más tarde'} to={'/dashboard'} />
      </form>
    </main>
  )
}

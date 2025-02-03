import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubtmitButton from "@ui/SubtmitButton";
import QuestionsContainer from "@ui/QuestionsContainer";
import CheckSelectionButton from "@ui/CheckSelectionButton";
import OnboardingProgressBar from "@ui/onboarding/OnboardingProgressBar";
import OnboardingNavbar from "@ui/onboarding/OnboardingNavbar";

export default function SavingsCapacity() {
  const initialFormState1 = {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  }
  const [formData1, setFormData1] = useState(initialFormState1)
  const handleChange1 = name => {
    setFormData1(() => initialFormState1)
    setFormData1(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }
  const initialFormState2 = {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  }
  const [formData2, setFormData2] = useState(initialFormState2)
  const handleChange2 = name => {
    setFormData2(() => initialFormState2)
    setFormData2(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const navigate = useNavigate()
  const [errors1, setErrors1] = useState(false)
  const [errors2, setErrors2] = useState(false)
  const checkErrors = (form) => {
    return !form.question1 && !form.question2
      && !form.question3 && !form.question4
  }
  const handleSubmit = event => {
    event.preventDefault()
    const hasErrors1 = checkErrors(formData1)
    const hasErrors2 = checkErrors(formData2)
    setErrors1(hasErrors1)
    setErrors2(hasErrors2)
    if (hasErrors1 || hasErrors2) return
    navigate('/onboarding/test-result');
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <OnboardingNavbar close={true} />
      <OnboardingProgressBar />
      <header className="text-title">Preferencia de riesgo</header>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] flex flex-col items-start gap-4 m-4"
      >
        <QuestionsContainer
          title={"¿Cuál es tu ingreso mensual estimado?"}
        >
          {/* 
      //#region OPTION 1-1
        */}
          <CheckSelectionButton
            content={'Menos de $500 USD'}
            handler={handleChange1}
            name={'question1'}
            value={formData1.question1}
          />
          {/* 
      //#region OPTION 1-2
        */}
          <CheckSelectionButton
            content={'Entre $500 y $1,000 USD'}
            handler={handleChange1}
            name={'question2'}
            value={formData1.question2}
          />
          {/* 
      //#region OPTION 1-3
        */}
          <CheckSelectionButton
            content={'Entre $1,000 y $5,000 USD'}
            handler={handleChange1}
            name={'question3'}
            value={formData1.question3}
          />
          {/* 
      //#region OPTION 1-4
        */}
          <CheckSelectionButton
            content={'Más de $5,000 USD'}
            handler={handleChange1}
            name={'question4'}
            value={formData1.question4}
          />
          {
            errors1 &&
            <span className="text-destructive text-sm">Selecciona una opción</span>
          }
        </QuestionsContainer>

        <QuestionsContainer
          title={"¿Cuánto de tus ingresos mensuales destinas actualmente a ahorro o inversiones?"}
        >
          {/* 
      //#region OPTION 2-1
        */}
          <CheckSelectionButton
            content={'Menos del 5%'}
            name={'question1'}
            handler={handleChange2}
            value={formData2.question1}
          />
          {/* 
      //#region OPTION 2-2
        */}
          <CheckSelectionButton
            content={'Entre el 5% y el 15%'}
            name={'question2'}
            handler={handleChange2}
            value={formData2.question2}
          />
          {/* 
      //#region OPTION 2-3
        */}
          <CheckSelectionButton
            content={'Entre el 15% y el 30%'}
            name={'question3'}
            handler={handleChange2}
            value={formData2.question3}
          />
          {/* 
      //#region OPTION 2-4
        */}
          <CheckSelectionButton
            content={'Más del 30%'}
            name={'question4'}
            handler={handleChange2}
            value={formData2.question4}
          />
          {
            errors2 &&
            <span className="text-destructive text-sm">Selecciona una opción</span>
          }
        </QuestionsContainer>
        <SubtmitButton value={'Siguiente'} />
      </form>
    </main>
  )
}

import { useState } from "react"
import QuestionsContainer from "../../ui/QuestionsContainer"
import CheckSelectionButton from "../../ui/CheckSelectionButton"
import SubtmitButton from "../../ui/SubtmitButton"
import { useNavigate } from "react-router-dom"

export default function Percentages() {

  const initialFormState1 = {
    question1: false,
    question2: false,
    question3: false,
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
  }
  const [formData2, setFormData2] = useState(initialFormState2)
  const handleChange2 = name => {
    setFormData2(() => initialFormState2)
    setFormData2(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const [errors1, setErrors1] = useState(false)
  const [errors2, setErrors2] = useState(false)
  const checkErrors = (form) => {
    return !form.question1 && !form.question2 && !form.question3
  }
  const navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault()
    const hasErrors1 = checkErrors(formData1)
    const hasErrors2 = checkErrors(formData2)
    setErrors1(hasErrors1)
    setErrors2(hasErrors2)
    if (hasErrors1 || hasErrors2) return
    navigate('/onboarding/savings-capacity');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] flex flex-col items-start gap-4 m-4"
    >
      <QuestionsContainer
        title={"¿Qué porcentaje de tus ingresos estás dispuesto a destinar a inversiones de alto riesgo?"}
      >
        {/* 
      //#region OPTION 1-1
        */}
        <CheckSelectionButton
          content={'Menos del 10%'}
          handler={handleChange1}
          name={'question1'}
          value={formData1.question1}
        />
        {/* 
      //#region OPTION 1-2
        */}
        <CheckSelectionButton
          content={'Entre el 10% y el 30%'}
          handler={handleChange1}
          name={'question2'}
          value={formData1.question2}
        />
        {/* 
      //#region OPTION 1-3
        */}
        <CheckSelectionButton
          content={'Más del 30%'}
          handler={handleChange1}
          name={'question3'}
          value={formData1.question3}
        />
        {
          errors1 &&
          <span className="text-destructive text-sm">Selecciona una opción</span>
        }
      </QuestionsContainer>

      <QuestionsContainer
        title={"Si una inversión pierde un 20% de su valor en un mes, ¿qué harías?"}
      >
        {/* 
      //#region OPTION 2-1
        */}
        <CheckSelectionButton
          content={'No estoy interesado'}
          name={'question1'}
          handler={handleChange2}
          value={formData2.question1}
        />
        {/* 
      //#region OPTION 2-2
        */}
        <CheckSelectionButton
          content={'Tal vez en el futuro'}
          name={'question2'}
          handler={handleChange2}
          value={formData2.question2}
        />
        {/* 
      //#region OPTION 2-3
        */}
        <CheckSelectionButton
          content={'Sí, me interesa operar con ellos'}
          name={'question3'}
          handler={handleChange2}
          value={formData2.question3}
        />
        {
          errors2 &&
          <span className="text-destructive text-sm">Selecciona una opción</span>
        }
      </QuestionsContainer>
      <SubtmitButton value={'Siguiente'} />
    </form>
  )
}

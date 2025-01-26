import { useState } from "react"
import QuestionsContainer from "../../ui/QuestionsContainer"
import CheckSelectionButton from "../../ui/CheckSelectionButton"
import SubtmitButton from "../../ui/SubtmitButton"
import { useNavigate } from "react-router-dom"

export default function Fluctuations() {

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

  const navigate = useNavigate()
  const [errors1, setErrors1] = useState(false)
  const [errors2, setErrors2] = useState(false)
  const checkErrors = (form) => {
    return !form.question1 && !form.question2 && !form.question3
  }
  const handleSubmit = event => {
    event.preventDefault()
    const hasErrors1 = checkErrors(formData1)
    const hasErrors2 = checkErrors(formData2)
    setErrors1(hasErrors1)
    setErrors2(hasErrors2)
    if (hasErrors1 || hasErrors2) return
    navigate('/onboarding/risk-tolerance/percentages');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] flex flex-col items-start gap-4 m-4"
    >
      <QuestionsContainer
        title={"¿Qué tan cómodo te sientes con las fluctuaciones de valor en tus inversiones?"}
      >
        {/* 
      //#region OPTION 1
        */}
        <CheckSelectionButton
          content={'Prefiero estabilidad y evitar pérdidas, aunque los retornos sean bajos.'}
          handler={handleChange1}
          name={'question1'}
          value={formData1.question1}
        />
        {/* 
      //#region OPTION 2
        */}
        <CheckSelectionButton
          content={'Estoy dispuesto a asumir algunos riesgos para obtener mayores ganancias.'}
          handler={handleChange1}
          name={'question2'}
          value={formData1.question2}
        />
        {/* 
      //#region OPTION 3
        */}
        <CheckSelectionButton
          content={'Estoy cómodo con riesgos altos para maximizar el potencial de retorno.'}
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
        <CheckSelectionButton
          content={'Retiraría mi dinero para evitar más pérdidas.'}
          name={'question1'}
          handler={handleChange2}
          value={formData2.question1}
        />
        <CheckSelectionButton
          content={'Mantendría mi inversión y esperaría una recuperación.'}
          name={'question2'}
          handler={handleChange2}
          value={formData2.question2}
        />
        <CheckSelectionButton
          content={'Compraría más de ese activo para aprovechar el precio bajo.'}
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

import SubtmitButton from "../../ui/SubtmitButton";
import CheckSelectionButton from "../../ui/CheckSelectionButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainGoal() {

  const initialFormState = {
    question1: false,
    question2: false,
    question3: false,
  }
  const [formData, setFormData] = useState(initialFormState)
  const handleChange = name => {
    setFormData(() => initialFormState)
    setFormData(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const navigate = useNavigate()
  const [errors, setErrors] = useState(false)
  const handleSubmit = event => {
    event.preventDefault()
    const hasErrors =
      !formData.question1 && !formData.question2 && !formData.question3
    setErrors(hasErrors)
    if (hasErrors) return
    navigate('/onboarding/risk-tolerance/');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] flex flex-col items-start gap-4 m-4"
    >
      <span className="text-subtitle font-medium">¿Tienes una meta específica en mente para tus ahorros o inversiones?</span>
      {/* 
      //#region OPTION 1
      */}
      <CheckSelectionButton
        content={'Sí, quiero ahorrar para un objetivo específico (ej., casa, auto, viaje).'}
        handler={handleChange}
        name={'question1'}
        value={formData.question1}
      />
      {/* 
      //#region OPTION 2
      */}
      <CheckSelectionButton
        content={'No, mi prioridad es construir capital sin una meta definida.'}
        handler={handleChange}
        name={'question2'}
        value={formData.question2}
      />
      {/* 
      //#region OPTION 3
      */}
      <CheckSelectionButton
        content={'Quiero planificar mi retiro.'}
        handler={handleChange}
        name={'question3'}
        value={formData.question3}
      />
      {
        errors &&
        <span className="text-destructive text-sm">Selecciona una opción</span>
      }
      <SubtmitButton value={'Siguiente'} />
    </form>
  )
}

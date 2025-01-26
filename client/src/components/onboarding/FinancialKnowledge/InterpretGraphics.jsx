import SubtmitButton from "../../ui/SubtmitButton";
import CheckSelectionButton from "../../ui/CheckSelectionButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InterpretGraphics() {

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
    navigate('/onboarding/financial-goal/');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] flex flex-col items-start gap-4 m-4"
    >
      <span className="text-title "> ¿Sabes cómo interpretar gráficos o análisis de mercado financiero?</span>
      {/* 
      //#region OPTION 1
        */}
      <CheckSelectionButton
        content={'No, no los entiendo.'}
        handler={handleChange}
        name={'question1'}
        value={formData.question1}
      />
      {/* 
      //#region OPTION 2
        */}
      <CheckSelectionButton
        content={'Conozco lo básico, pero necesito apoyo para analizarlos.'}
        handler={handleChange}
        name={'question2'}
        value={formData.question2}
      />
      {/* 
      //#region OPTION 3
        */}
      <CheckSelectionButton
        content={'Sí, los utilizo regularmente en mis decisiones.'}
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

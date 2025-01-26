import SubtmitButton from "../../ui/SubtmitButton";
import CheckSelectionButton from "../../ui/CheckSelectionButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinancialLevel() {

  const initialFormState = {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
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
      !formData.question1 && !formData.question2 &&
      !formData.question3 && !formData.question4
    setErrors(hasErrors)
    if (hasErrors) return
    navigate('/onboarding/financial-knowledge/instruments')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] flex flex-col items-start gap-4 m-4"
    >
      <span className="text-title ">¿Cuánto conoces sobre inversiones y finanzas personales?</span>
      {/* 
      //#region OPTION 1
        */}
      <CheckSelectionButton
        content={'Soy principiante, no tengo experiencia previa.'}
        handler={handleChange}
        name={'question1'}
        value={formData.question1}
      />
      {/* 
      //#region OPTION 2
        */}
      <CheckSelectionButton
        content={'Tengo conocimientos básicos, entiendo algunos conceptos.'}
        handler={handleChange}
        name={'question2'}
        value={formData.question2}
      />
      {/* 
      //#region OPTION 3
        */}
      <CheckSelectionButton
        content={'Tengo experiencia moderada y he invertido en algunos instrumentos.'}
        handler={handleChange}
        name={'question3'}
        value={formData.question3}
      />
      {/* 
      //#region OPTION 4
        */}
      <CheckSelectionButton
        content={'Tengo experiencia avanzada y manejo estrategias complejas.'}
        handler={handleChange}
        name={'question4'}
        value={formData.question4}
      />
      {
        errors &&
        <span className="text-destructive text-sm">Selecciona una opción</span>
      }
      <SubtmitButton value={'Siguiente'} />
    </form>
  )
}

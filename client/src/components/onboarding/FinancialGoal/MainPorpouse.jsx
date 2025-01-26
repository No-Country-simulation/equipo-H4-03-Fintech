import SubtmitButton from "../../ui/SubtmitButton";
import PlusSelectionButton from "../../ui/PlusSelectionButton"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPorpouse() {

  const initialFormState = {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  }
  const [formData, setFormData] = useState(initialFormState)
  const handleChange = name => {
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
    navigate('/onboarding/financial-goal/goal');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] flex flex-col items-start gap-4 m-4"
    >
      <div className="flex flex-col gap-1">
        <span className="text-subtitle font-medium"> ¿Cuál es tu principal objetivo financiero al usar esta app? </span>
        <span className="text-subtitle">(Marca todas las que apliquen)</span>
      </div>
      {/* 
      //#region OPTION 1
        */}
      <PlusSelectionButton
        content={'Ahorrar para metas a corto o mediano plazo.'}
        handler={handleChange}
        name={'question1'}
        value={formData.question1}
      />
      {/* 
      //#region OPTION 2
        */}
      <PlusSelectionButton
        content={'Construir un portafolio de inversión a largo plazo.'}
        handler={handleChange}
        name={'question2'}
        value={formData.question2}
      />
      {/* 
      //#region OPTION 3
        */}
      <PlusSelectionButton
        content={'Obtener ganancias rápidas a través del trading.'}
        handler={handleChange}
        name={'question3'}
        value={formData.question3}
      />
      {/* 
      //#region OPTION 4
        */}
      <PlusSelectionButton
        content={'Generar ingresos adicionales para complementar mis finanzas.'}
        handler={handleChange}
        name={'question4'}
        value={formData.question4}
      />
      {
        errors &&
        <span className="text-destructive text-sm">Selecciona al menos una opción</span>
      }
      <SubtmitButton value={'Siguiente'} />
    </form>
  )
}

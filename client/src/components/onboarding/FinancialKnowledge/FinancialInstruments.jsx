import SubtmitButton from "../../ui/SubtmitButton";
import PlusSelectionButton from "../../ui/PlusSelectionButton"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinancialInstruments() {

  const initialFormState = {
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
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
      !formData.question3 && !formData.question4 &&
      !formData.question5
    setErrors(hasErrors)
    if (hasErrors) return
    navigate('/onboarding/financial-knowledge/graphics');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] flex flex-col items-start gap-4 m-4"
    >
      <span className="text-title "> ¿Qué instrumentos financieros conoces o has utilizado?</span>
      <span className="text-subtitle ">(Marca todas las que apliquen)</span>
      {/* 
      //#region OPTION 1
        */}
      <PlusSelectionButton
        content={'Cuentas de ahorro y plazos fijos'}
        handler={handleChange}
        name={'question1'}
        value={formData.question1}
      />
      {/* 
      //#region OPTION 2
        */}
      <PlusSelectionButton
        content={'ETFs y fondos común de inversión'}
        handler={handleChange}
        name={'question2'}
        value={formData.question2}
      />
      {/* 
      //#region OPTION 3
        */}
      <PlusSelectionButton
        content={'Acciones de empresas'}
        handler={handleChange}
        name={'question3'}
        value={formData.question3}
      />
      {/* 
      //#region OPTION 4
        */}
      <PlusSelectionButton
        content={'Criptomonedas'}
        handler={handleChange}
        name={'question4'}
        value={formData.question4}
      />
      {/* 
      //#region OPTION 5
        */}
      <PlusSelectionButton
        content={'Derivados financieros (futuros, opciones, apalancamiento)'}
        handler={handleChange}
        name={'question5'}
        value={formData.question5}
      />
      {
        errors &&
        <span className="text-destructive text-sm">Selecciona al menos una opción</span>
      }
      <SubtmitButton value={'Siguiente'} />
    </form>
  )
}

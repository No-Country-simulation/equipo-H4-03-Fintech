import { useState, useActionState, useEffect } from "react";
import { Identification } from "../../actions/onboardingData";
import SubtmitButton from "../ui/SubtmitButton";
import { useNavigate } from "react-router-dom";

export default function OnboardinIdentification() {

  const navigate = useNavigate()
  const [state, action] = useActionState(Identification, undefined)
  useEffect(() => {
    if(!state) return
    console.log(state);
    if (state?.success) {
      navigate('/onboarding/address')
    }
  }, [state])
  

  const initialState = {
    dni: '',
    terms: false
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? Boolean(checked) : value
    }))
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <header className="text-title text-primary">Identificación</header>

      <form
        action={action}
        className="w-[600px]  flex flex-col items-center gap-3 m-4 bg-white rounded-3xl p-8 shadow-form"
      >
        <label htmlFor="birthdate" className="text-primary font-semibold">DNI:</label>
        <input
          className="w-full border px-4 py-2 rounded"
          type="number"
          name="dni"
          id="dni"
          value={formData.dni}
          onChange={handleChange}
        />
        {state?.dni && <p className="text-destructive text-sm">Su DNI es requerido</p>}

        <div className="w-full flex justify-start items-center gap-3">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={formData.terms}
            onChange={handleChange}
          />
          <div className="flex items-center gap-1">
            <label className="flex flex-row">Acepto los </label>
            <u>términos y condiciones</u>
          </div>
        </div>
        {state?.terms && !formData.terms && <p className="text-destructive text-sm">Debe aceptar los términos.</p>}

        <SubtmitButton value={'Siguiente'} />
      </form>
    </main>
  )
}

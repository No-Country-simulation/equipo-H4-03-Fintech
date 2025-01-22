import { useEffect, useState, useActionState } from "react";
import FormInputPrimary from "../ui/FormInputPrimary";
import SubtmitButton from "../ui/SubtmitButton";
import { useNavigate } from "react-router-dom";
import { Location } from "../../actions/onboardingData";

export default function OnboardinAddress() {

  const navigate = useNavigate()
  const [state, action] = useActionState(Location, undefined)
  useEffect(()=> {
    if (!state) return
    console.log(Object.keys(state));
    if (state.success) {
      navigate('/onboarding/pre-investor')
    }
  }, [state])

  const initialState = {
    country: 'Argentina',
    calle: '',
    numero: '',
    ciudad: '',
    codigo_postal: ''
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = ({target: {name, value}}) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-[60px]">
      <header className="text-title text-primary">Domicilio</header>
      <form
        action={action}
        className="w-[600px]  flex flex-col items-center gap-5 m-4 bg-white rounded-3xl p-8 shadow-form"
      >
        <label htmlFor="country" className="text-primary font-semibold self-start">País:</label>
        <select 
          className="w-full p-2 border rounded-sm text-sm focus:shadow-custom1" 
          name="country" 
          id="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="Argentina">🇦🇷 Argentina</option>
          <option value="Bolivia">🇧🇴 Bolivia</option>
          <option value="Brasil">🇧🇷 Brasil</option>
          <option value="Chile">🇨🇱 Chile</option>
          <option value="Paraguay">🇵🇾 Paraguay</option>
          <option value="Uruguay">🇺🇾 Uruguay</option>
        </select>

        <section className="w-full flex gap-4 justify-stretch">
          <FormInputPrimary 
            label={'Calle:'}
            name={"calle"}
            handler={handleChange}
            value={formData?.calle}
            errors={state?.calle}
          />
          <FormInputPrimary 
            type={'number'}
            label={'Número:'}
            name={"numero"}
            handler={handleChange}
            value={formData?.numero}
            errors={state?.numero}
          />
        </section>

        <section className="w-full flex gap-4 justify-stretch">
          <FormInputPrimary 
            label={'Ciudad:'}
            name={"ciudad"}
            handler={handleChange}
            value={formData?.ciudad}
            errors={state?.ciudad}
          />
          <FormInputPrimary 
            type={'number'}
            label={'Código Postal:'}
            name={"codigo_postal"}
            handler={handleChange}
            value={formData?.codigo_postal}
            errors={state?.codigo_postal}
          />
        </section>

        <SubtmitButton value={'Siguiente'} />
      </form>
    </main>
  )
}

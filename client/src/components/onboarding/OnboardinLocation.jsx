import { useEffect, useState, useActionState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlices";
import { Location } from "../../actions/onboardingData";

import FormInputPrimary from "../ui/FormInputPrimary";
import SubtmitButton from "../ui/SubtmitButton";
import Flags from "../ui/Flags";
import OnboardingProgressBar from "../ui/OnboardingProgressBar";
import OnboardingNavbar from "../ui/OnboardingNavbar";

export default function OnboardinLocation() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [state, action] = useActionState(Location, undefined)
  useEffect(() => {
    if (!state) return
    if (state.success) {
      dispatch(setUser({
        ...user,
        progress: user.progress + 20
      }))
      navigate('/onboarding/pre-investor')
    }
  }, [state])

  const initialState = {
    country: 'AR Argentina',
    calle: '',
    numero: '',
    ciudad: '',
    codigo_postal: ''
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const [selected, setSelected] = useState('AR')
  useEffect(() => {
    const newSelected = formData.country.slice(0, 2).toUpperCase()
    setSelected(newSelected)
  }, [formData])

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-white p-5 pt-[60px] relative">
      <OnboardingNavbar close={false} />
      <OnboardingProgressBar />
      <header className="text-title">Ubicación</header>
      <form
        action={action}
        className="w-[600px] flex flex-col items-center gap-5 m-4"
      >
        {/* 
      //#region PAIS
        */}
        <section className="w-full flex flex-col gap-2 justify-stretch">
          <label htmlFor="country" className="font-medium self-start">País de residencia:</label>
          <article className="w-full relative">
            <Flags selected={selected} />
            <select
              className="w-full p-2 pl-9 border border-black rounded-md appearance-none"
              name={"country"}
              id={"country"}
              value={formData.country}
              onChange={handleChange}
            >
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brasil">Brasil</option>
              <option value="Chile">Chile</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Uruguay">Uruguay</option>
            </select>
          </article>
        </section>

        <section className="w-full flex gap-4 justify-stretch">
          {/* 
    //#region CALLE
        */}
          <FormInputPrimary
            label={'Calle:'}
            name={"calle"}
            handler={handleChange}
            value={formData?.calle}
            errors={state?.calle}
            placeholder={'Calle'}
          />
          {/* 
      //#region NUMERO
        */}
          <FormInputPrimary
            type={'number'}
            label={'Número:'}
            name={"numero"}
            handler={handleChange}
            value={formData?.numero}
            errors={state?.numero}
            placeholder={'Número.'}
          />
        </section>

        <section className="w-full flex gap-4 justify-stretch">
          {/* 
      //#region CIUDAD
        */}
          <FormInputPrimary
            label={'Ciudad:'}
            name={"ciudad"}
            handler={handleChange}
            value={formData?.ciudad}
            errors={state?.ciudad}
            placeholder={'Ciudad'}
          />
          {/* 
      //#region C.P.
        */}
          <FormInputPrimary
            type={'number'}
            label={'Código Postal:'}
            name={"codigo_postal"}
            handler={handleChange}
            value={formData?.codigo_postal}
            errors={state?.codigo_postal}
            placeholder={'C.P.'}
          />
        </section>

        <SubtmitButton value={'Siguiente'} />
      </form>
    </main>
  )
}

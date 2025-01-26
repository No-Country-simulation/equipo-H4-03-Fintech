import { useState, useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInputPrimary from "../ui/FormInputPrimary";
import SubtmitButton from "../ui/SubtmitButton";
import { Profile } from "../../actions/onboardingData";
import BackArrow from "../ui/BackArrow";
import OnboardingProgressBar from "../ui/OnboardingProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlices";
import OnboardingNavbar from "../ui/OnboardingNavbar";

export default function OnboardinProfile() {

  const navigate = useNavigate()
  const [state, action] = useActionState(Profile, undefined)

  const initialState = {
    fullName: "",
    username: "",
    dni: "",
    sex: "",
    birthdate: ""
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!state) return
    if (state.success) {
      dispatch(setUser({
        ...user,
        progress: user.progress + 20
      }))
      navigate('/onboarding/location')
    }
  }, [state])

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center bg-white p-5 pt-10 relative ">
      <OnboardingNavbar close={false} />
      <OnboardingProgressBar />
      <form
        action={action}
        className="w-[600px] flex flex-col items-start gap-4 m-4 p-8"
      >
        <header className="text-title self-start">Datos personales</header>
        {/* 
      //#region NOMBRE
        */}
        <FormInputPrimary
          label={"Nombre completo"}
          errors={state?.fullName}
          handler={handleChange}
          name={"fullName"}
          value={formData.fullName}
          placeholder={"Ej. ej. María Eugenia Avalos"}
        />
        {/* 
      //#region USERNAME
        */}
        <FormInputPrimary
          label={"Nombre de usuario"}
          errors={state?.username}
          handler={handleChange}
          name={"username"}
          value={formData.username}
          placeholder={"Ej. María"}
        />
        {/* 
      //#region DNI
        */}
        <FormInputPrimary
          type={"number"}
          label={"DNI"}
          errors={state?.dni}
          handler={handleChange}
          name={"dni"}
          value={formData.dni}
          placeholder={"Número de documento"}
        />

        <section className="w-full items-center flex gap-4">
          {/* 
      //#region NACIMIENTO
        */}
          <article className="w-full h-fit flex flex-col gap-2">
            <label htmlFor="birthdate" className="font-semibold">Fecha de Nacimiento</label>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              className="p-2 b-1 border border-black rounded-lg bg-transparent placeholder:text-gray-500 placeholder:italic placeholder:opacity-60"
              value={formData.birthdate}
              onChange={handleChange}
            />
            {state?.birthdate && state.birthdate.length > 0 && (
              <p className="text-destructive text-sm">{state.birthdate}</p>
            )}
          </article>
          {/* 
      //#region SEXO
        */}
          <FormInputPrimary
            label={"Sexo"}
            errors={state?.sex}
            handler={handleChange}
            name={"sex"}
            value={formData.sex}
            placeholder={"Sexo"}
          />
        </section>

        <SubtmitButton value={'Siguiente'} />
      </form>
    </main>
  )
}

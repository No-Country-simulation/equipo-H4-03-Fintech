import { useState, useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInputPrimary from "../ui/FormInputPrimary";
import SubtmitButton from "../ui/SubtmitButton";
import { Profile } from "../../actions/onboardingData";

export default function OnboardinProfile() {

  const navigate = useNavigate()
  const [state, action] = useActionState(Profile, undefined)

  const initialState = {
    firstName: "",
    lastName: "",
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

  useEffect(() => {
    if (!state) return
    if (state.data) {
      navigate('/onboarding/identification')
    }
  }, [state])

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start bg-ligth-gray p-5 pt-10">
      <header className="text-title text-primary">Perfil de Usuario</header>
      <form
        action={action}
        className="w-[600px] flex flex-col items-start gap-4 m-4 bg-white rounded-3xl p-8 shadow-form"
      >
        <FormInputPrimary
          label={"Nombre"}
          errors={state?.firstName}
          handler={handleChange}
          name={"firstName"}
          value={formData.firstName}
        />
        <FormInputPrimary
          label={"Apellido"}
          errors={state?.lastName}
          handler={handleChange}
          name={"lastName"}
          value={formData.lastName}
        />

        <section className="w-full flex flex-col gap-4 m-4">
          <label htmlFor="sex" className="text-primary font-semibold">Sexo</label>
          <article className="flex flex-row justify-evenly gap-4">
            <button
              type="button"
              name="sex"
              value="masculino"
              onClick={handleChange}
              className={`border px-4 py-2 rounded ${formData.sex === 'masculino' ? 'border-primary text-primary' : ''}`}
            >
              Masculino
            </button>
            <button
              type="button"
              name="sex"
              value="femenino"
              onClick={handleChange}
              className={`border px-4 py-2 rounded ${formData.sex === 'femenino' ? 'border-primary text-primary' : ''}`}
            >
              Femenino
            </button>
            <button
              type="button"
              name="sex"
              value="otro"
              onClick={handleChange}
              className={`border px-4 py-2 rounded ${formData.sex === 'otro' ? 'border-primary text-primary' : ''}`}
            >
              Otro
            </button>
          </article>
          {state?.sex && (
            <ul>
              {state?.sex.map((error, index) => (
                <li key={index} className="text-destructive text-sm">
                  {error}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="w-full flex flex-col gap-4 m-4">
          <label htmlFor="birthdate" className="text-primary font-semibold">Fecha de Nacimiento</label>
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            className="border px-4 py-2 rounded"
            value={formData.birthdate}
            onChange={handleChange}
          />
          {state?.birthdate && state.birthdate.length > 0 && (
            <p className="text-destructive text-sm">{state.birthdate}</p>
          )}
        </section>

        <SubtmitButton value={'Siguiente'} />
      </form>
    </main>
  )
}

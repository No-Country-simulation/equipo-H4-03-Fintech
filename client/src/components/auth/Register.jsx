/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useActionState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import { SignUp } from "../../actions/auth";
import { setUser } from '../../redux/slices/userSlices'
import FormInput from "../ui/FormInput";
import FormPassword from "../ui/FormPassword";

export default function Register({ set }) {

  const [state, action] = useActionState(SignUp, undefined)
  const formInitialState = {
    name: "",
    email: "",
    password: "",
  }

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) return
    if (Array.isArray(state)) {
      if (state[0]) {
        console.error('Error:', state[0]);
        return;
      } else {
        setCookie("token", state[1].token, { path: "/" });
        dispatch(setUser(state[1].user));
        navigate(`/dashboard`);
      }
    }
  }, [state])

  const [formData, setFormData] = useState(formInitialState);

  function handleChange({ target: { name, value } }) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form action={action} className="flex flex-col items-center gap-4 m-4">
      {/* 
      //#region NAME
      */}
      <FormInput
        label={"Nombre completo"}
        name={"name"}
        value={formData.name}
        handler={handleChange}
        error={state?.name}
      />
      {/* 
      //#endregion
      //#region EMAIL
      */}
      <FormInput
        label={"Email"}
        name={"email"}
        value={formData.email}
        handler={handleChange}
        error={state?.email}
      />
      {/* 
      //#endregion
      //#region PASSWORD
      */}
      <FormPassword
        value={formData.password}
        handler={handleChange}
        errors={state?.password}
      />
      {/* 
      //#endregion
      */}
      <section className="w-full flex md:flex-col-reverse items-center md:justify-between md:gap-3">
        <article className="flex gap-1 self-start">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Recuérdame</label>
        </article>

        <article className="flex gap-1 self-start">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">He leído los</label>
          <Link className="underline self-end">términos y condiciones</Link>
        </article>
      </section>
      {/*
      //#region SUBMIT
      */}
      <button
        type="submit"
        className="w-full border border-slate-300 py-2 rounded-[4px]"
      >
        Crear cuenta
      </button>
      {/* 
      //#endregion
      */}
      <section>
        <span>¿Ya tienes cuenta?</span>
        <button onClick={() => set('login')}>ingresar</button>
      </section>
    </form>
  )
}

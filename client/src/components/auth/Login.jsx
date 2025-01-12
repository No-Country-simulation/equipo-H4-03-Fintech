/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useActionState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SignIn } from "../../actions/auth";
import { setUser } from '../../redux/slices/userSlices'
import FormInput from "../ui/FormInput";
import FormPassword from "../ui/FormPassword";

export default function Login({ set }) {

  const [state, action] = useActionState(SignIn, undefined)
  const formInitialState = {
    email: "",
    password: "",
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) return
    if (Array.isArray(state)) {
      if (state[0]) {
        console.error('Error:', state[0]);
        return;
      } else {
        dispatch(setUser(state[1]));
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
      <section className="w-full flex md:flex-col-reverse items-center md:justify-between md:gap-3 gap-2">
        <article className="flex gap-1 self-start items-center">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Recuérdame</label>
        </article>

        <Link className="self-end hover:underline">Olvidé mi password</Link>
      </section>
      {/*
      //#region SUBMIT
      */}
      <button
        type="submit"
        className="w-full border border-slate-300 py-2 rounded-3xl"
      >
        Ingresar
      </button>
      <div className="w-full h-[2px] bg-slate-400" />

      <section className="flex gap-2">
        <span>¿No tienes cuenta ahún?</span>
        <button className=" hover:underline" onClick={() => set('register')}>registrarme</button>
      </section>
      {/* 
      //#endregion
      */}
    </form>
  )
}

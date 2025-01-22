/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useActionState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SignIn } from "../../actions/auth";
import { setUser } from '../../redux/slices/userSlices'
import FormInput from "../ui/FormInput";
import FormPassword from "../ui/FormPassword";
import { useCookies } from "react-cookie";

export default function Login({ set }) {

  const [cookies, setCookies] = useCookies()
  const [rememberme, setRememberme] = useState(false)
  useEffect(() => {
    try {
      if (cookies?.user) {
        const user = {...cookies.user, rememberme}
        setCookies("user", user)
      } else {
        setCookies("user", { rememberme })
      }
    } catch (error) {
      console.error('Error guardando recordar:', error)
    }
  }, [rememberme])


  const [state, action] = useActionState(SignIn, undefined)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!state) return
    if (Array.isArray(state)) {
      if (state[0]) {
        console.error('Error intentando ingresar');
        return;
      } else {
        if (rememberme) {
          setCookies("user", { ...state[1], rememberme: true })
        }
        dispatch(setUser(state[1]));
        navigate(`/dashboard`);
      }
    }
  }, [state])

  const formInitialState = {
    email: "",
    password: "",
  }
  const [formData, setFormData] = useState(formInitialState);
  function handleChange({ target: { name, value } }) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (cookies?.user && cookies.user.rememberme) {
      const { rememberme, username } = cookies.user
      setRememberme(rememberme)
      setFormData({
        password: "",
        email: username
      })
    }
  }, [])


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
        errors={state?.email}
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
          <input
            type="checkbox"
            name="rememberme"
            id="rememberme"
            checked={rememberme}
            onChange={() => setRememberme(prev => !prev)}
          />
          <label htmlFor="rememberme">Recuérdame</label>
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

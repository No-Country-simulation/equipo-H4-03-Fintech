/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useActionState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import { SignUp } from "../../actions/auth";
import { setUser } from '../../redux/slices/userSlices'

export default function Register({set}) {

  const [state, action] = useActionState(SignUp, undefined)
  const formInitialState = {
    name: "",
    email: "",
    password: "",
  }

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) return
    if (Array.isArray(state)) {
      if (state[0]) {
        console.error('Error:', state[0]);
        return;
      } else {
        setCookie("user", state[1].token, { path: "/" });
        dispatch(setUser(state[1].user));
        navigate(`/user/dashboard`);
      }
    }
  }, [state])

  const [formData, setFormData] = useState(formInitialState);
  const [showPass, setShowPass] = useState(false);

  function handleChange({ target: { name, value } }) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form action={action} className="w-screen flex flex-col items-center">
      <article className="flex flex-col gap-2 self-stretch text-xl">
        <span >Nombre completo</span>
        <input
          className="w-100 p-2 b-1 border bg-transparent placeholder:text-gray-500 placeholder:italic placeholder:opacity-60"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {state?.name && (
          <span className="text-colorFithy text-sm">
            {errors.name}
          </span>
        )}
      </article>

      <article className="flex flex-col gap-2 self-stretch text-xl">
        <span >Email</span>
        <input
          className="w-100 p-2 b-1 border bg-transparent placeholder:text-gray-500 placeholder:italic placeholder:opacity-60"
          name="name"
          value={formData.email}
          onChange={handleChange}
        />
        {state?.email && (
          <span className="text-colorFithy text-sm">
            {errors.email}
          </span>
        )}
      </article>

      <article className="flex flex-col gap-2 self-stretch text-xl">
        <span>Contraseña</span>
        <div className="relative">
          <input
            className="p-2 b-1 border bg-transparent placeholder:text-gray-500 placeholder:italic placeholder:opacity-60"
            name="password"
            type={showPass ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
          />
          <div className="absolute top-3 right-3">
            <span
              className={`cursor-pointer ${formData.password.length ? "" : "hidden"}`}
              onClick={() => setShowPass(prev => !prev)}
            >
              👁️
            </span>
          </div>
        </div>
        {state?.password && (
          <ul>
            {errors.password.map((error, index) => (
              <li key={index} className="text-colorFithy text-sm">
                {error}
              </li>
            ))}
          </ul>
        )}
      </article>
      <button type="submit">Crear cuenta</button>
      <section>
        <span>¿Ya tienes cuenta?</span>
        <button onClick={() => set('login')}>ingresar</button>
      </section>
    </form>
  )
}

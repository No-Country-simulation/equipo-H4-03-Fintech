import { useState } from "react";

export default function FormPassword({ value, handler, errors }) {

  const [showPass, setShowPass] = useState(false);

  return (
    <article className="w-full flex flex-col gap-2">
      <span>Contraseña</span>
      <div className="w-full relative">
        <input
          className="w-full p-2 b-1 border bg-transparent placeholder:text-gray-500 placeholder:italic placeholder:opacity-60"
          name="password"
          type={showPass ? "text" : "password"}
          value={value}
          onChange={handler}
        />
        <span
          className={`absolute top-3 right-3 z-10 ${value.length ? "cursor-pointer" : "hidden"}`}
          onClick={() => setShowPass(prev => !prev)}
        >
          👁️
        </span>
      </div>
      {errors && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} className="text-destructive text-sm">
              {error}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

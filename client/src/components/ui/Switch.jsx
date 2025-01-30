import { useState } from "react";

export default function SwitchComponent({ value, onChange, name }) {

  const [isOn, setIsOn] = useState(true)

  return (
    <button
      role="switch"
      aria-checked={isOn}
      onClick={() => setIsOn(prev => !prev)}
      className={`
        w-10 h-5 rounded-full relative 
        transition-colors duration-200 ease-in-out
        ${isOn ? 'bg-primary' : 'bg-muted'}
      `}
    >
      <span
        className={`
          absolute top-0.5 left-0.5
          size-4 bg-white rounded-full
          transform transition-transform duration-200 ease-in-out
          ${isOn ? 'translate-x-5' : 'translate-x-0'}
        `}
      />
    </button>
  )
}

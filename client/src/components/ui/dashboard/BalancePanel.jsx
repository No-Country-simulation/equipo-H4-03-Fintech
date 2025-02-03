import { useState } from "react"
import { useSelector } from "react-redux"

export default function BalancePanel() {
  const { isCapital } = useSelector(state => state.switcher)
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div className={`
      w-full h-[116.5986328125px] rounded-xl 
      flex flex-col justify-around items-start px-6
      bg-gradient-to-r from-[#96c2db] ${isCapital ? 'to-[var(--primary)]' : 'to-[var(--yellow)]'}
    `}>
      <div className="w-full flex justify-between">
        <span className="font-medium text-subtitle text-black">Tu total</span>
        <img
          src="/assets/eye-icon.svg"
          alt="eye icon"
          className="cursor-pointer"
          onClick={() => setIsHidden(prev => !prev)}
        />
      </div>
      <div className="flex items-start">
        <span className="font-semibold text-title text-black">$ {isHidden ? '********' : '1.234.567,'}</span>
        <span className={`${isHidden ? "hidden" : "font-semibold text-subtitle text-black"}`}>89</span>
      </div>
    </div>
  )
}

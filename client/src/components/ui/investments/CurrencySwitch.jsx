import { useState } from 'react'

export default function CurrencySwitch() {
  const [isARS, setIsARS] = useState(true)

  return (
    <div
      className="h-[42px] w-36 flex justify-center items-center gap-2.5 bg-primary px-1 py-1.5 rounded-full"
    >
      <div 
        onClick={() => setIsARS(true)}
        className={`
          w-[67px] h-8 flex justify-center items-center rounded-full
          transition-colors duration-300 ease cursor-pointer
          ${isARS ? 'bg-background' : 'bg-primary'}
        `}
      >
        <span className={`
          font-medium text-base
          ${isARS ? 'text-primary' : 'text-background'}
        `}>
          AR$
        </span>
      </div>
      <div  
        onClick={() => setIsARS(false)}
          className={`
          w-[67px] h-8 flex justify-center items-center rounded-full
          transition-colors duration-300 ease cursor-pointer
          ${!isARS ? 'bg-background' : 'bg-primary'}
        `}
      >
        <span className={`
          font-medium text-base
          ${!isARS ? 'text-primary' : 'text-background'}
        `}>
          US$
        </span>
      </div>
    </div>
  )
}

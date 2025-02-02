import { useState } from 'react'

export default function SettlementSwitch() {
  const [isCI, setIsCI] = useState(true)

  return (
    <div
      className="h-[42px] w-36 flex justify-center items-center gap-2.5 bg-primary px-1 py-1.5  rounded-full"
    >
      <div 
        onClick={() => setIsCI(true)}
        className={`
          w-[67px] h-8 flex justify-center items-center rounded-full 
          transition-colors duration-300 ease cursor-pointer
          ${isCI ? 'bg-background' : 'bg-primary'}
        `}
      >
        <span className={`
          font-medium text-base 
          ${isCI ? 'text-primary' : 'text-background'}
        `}>
          C.I.
        </span>
      </div>
      <div 
        onClick={() => setIsCI(false)}
        className={`
          w-[67px] h-8 flex justify-center items-center rounded-full 
          transition-colors duration-300 ease cursor-pointer
          ${!isCI ? 'bg-background' : 'bg-primary'}
        `}
      >
        <span className={`
          font-medium text-base 
          ${!isCI ? 'text-primary' : 'text-background'}
        `}>
          24 hs
        </span>
      </div>
    </div>
  )
}

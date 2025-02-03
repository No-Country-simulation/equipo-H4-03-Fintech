import { useState } from "react";
import MoneyExpanded from "./MoneyExpanded";
import MoneyReduced from "./MoneyReduced";

export default function YourMoney() {
  const [isExpanded, setIsExpanded] = useState(true)

  const handleChange = newStatus => {
    setIsExpanded(newStatus)
  }

  return (
    <div className="w-full">
      <div className={`
        w-full
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}>
        {isExpanded && <MoneyExpanded handler={handleChange} />}
      </div>
      <div className={`
        w-full
        transition-all duration-300 ease-in-out
        ${!isExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}>
        {!isExpanded && <MoneyReduced handler={handleChange} />}
      </div>
    </div>
  )
}

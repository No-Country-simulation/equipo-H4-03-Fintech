import BottomMenuHomeLink from "./BottomMenuHomeLink";
import BottomMenuInvestmentLink from "./BottomMenuInvestmentLink";
import BottomMenuSocialLink from "./BottomMenuSocialLink";
import BottomMenuPortfolioLink from "./BottomMenuPortfolioLink";
import BottomMenuWalletLink from "./BottomMenuWalletLink";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BottomMenu() {

  const [current, setCurrent] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const to = localStorage.getItem('current')
    if (to) {
      const newCurrent = to.split('/').pop()
      setCurrent(newCurrent)
      navigate(to)
    } else setCurrent('dashboard')
  }, [])
  
  const handleClick = to => {
    navigate(to)
    const newCurrent = to.split('/').pop()
    localStorage.setItem('current', to)
    setCurrent(newCurrent)
  }

  return (
    <div className={`
      w-full flex justify-center bottom-0 sticky bg-background 
      rounded-tl-xl rounded-tr-xl border-t-4
    `}>
      <div className="w-[600px] flex items-center justify-between py-1">
        <BottomMenuHomeLink
          handler={handleClick}
          current={current}
        />
        <BottomMenuInvestmentLink
          handler={handleClick}
          current={current}
        />
        <BottomMenuSocialLink
          handler={handleClick}
          current={current}
        />
        <BottomMenuPortfolioLink
          handler={handleClick}
          current={current}
        />
        <BottomMenuWalletLink
          handler={handleClick}
          current={current}
        />
      </div>
    </div>
  )
}

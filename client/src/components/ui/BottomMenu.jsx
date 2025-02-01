import BottomMenuHomeLink from "./BottomMenuHomeLink";
import BottomMenuInvestmentLink from "./BottomMenuInvestmentLink";
import BottomMenuSocialLink from "./BottomMenuSocialLink";
import BottomMenuPortfolioLink from "./BottomMenuPortfolioLink";
import BottomMenuWalletLink from "./BottomMenuWalletLink";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BottomMenu() {

  const [current, setCurrent] = useState('dashboard')
  const navigate = useNavigate()
  const handleClick = to => {
    navigate(to)
    const newCurrent = to.split('/').pop()
    setCurrent(newCurrent)
  }

  return (
    <div className={`
      w-full flex justify-center bottom-0 sticky bg-[#f9f9fb] 
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

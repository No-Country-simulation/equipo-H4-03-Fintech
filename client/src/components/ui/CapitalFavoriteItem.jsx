export default function CapitalFavoriteItem({title, amount, variation}) {

  const isDown = variation[0] === '-'

  return (
    <div className="w-[51px] flex flex-col justify-center items-center gap-1">
      <span className="font-medium text-base text-center text-black">
        {title}
      </span>
      <span className="font-normal text-base text-center text-[#797979]">
        {amount}
      </span>
      <span className={`font-normal text-base text-center text-nowrap ${isDown ? 'text-[#eb4335]' : 'text-[#34a853]' }`}>
        {variation}
      </span>
    </div>
  )
}

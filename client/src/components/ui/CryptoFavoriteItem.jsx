export default function CryptoFavoriteItem({ title, amount, variation, icon }) {

  const isDown = variation[0] === '-'

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center gap-1">
        <span className="font-medium text-base text-center text-black">
          {title}
        </span>
        <img src={`/assets/${icon}.svg`} alt="money symbol" className="size-4" />
      </div>
      <span className="font-normal text-base text-center text-[#797979]">
        {amount}
      </span>
      <span className={`font-normal text-base text-center text-nowrap ${isDown ? 'text-[#eb4335]' : 'text-[#34a853]'}`}>
        {variation}
      </span>
    </div>
  )
}
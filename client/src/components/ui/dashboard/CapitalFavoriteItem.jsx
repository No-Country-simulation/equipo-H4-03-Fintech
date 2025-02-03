export default function CapitalFavoriteItem({title, amount, variation}) {

  const isDown = variation[0] === '-'

  return (
    <div className="w-[51px] flex flex-col justify-center items-center gap-1">
      <span className="font-medium text-base text-center text-black">
        {title}
      </span>
      <span className="font-normal text-base text-center text-muted">
        {amount}
      </span>
      <span className={`font-normal text-base text-center text-nowrap ${isDown ? 'text-destructive' : 'text-success' }`}>
        {variation}
      </span>
    </div>
  )
}

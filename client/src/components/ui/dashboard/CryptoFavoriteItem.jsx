export default function CryptoFavoriteItem({ title, amount, variation, icon }) {

  const isDown = variation[0] === '-'

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center gap-1">
        <span className="font-medium text-base text-center text-black">
          {title}
        </span>
        <img src={`/assets/${icon}.svg`} alt={icon} className="size-4" />
      </div>
      <span className="font-normal text-base text-center text-muted">
        {amount}
      </span>
      <span className={`font-normal text-base text-center text-nowrap ${isDown ? 'text-destructive' : 'text-success'}`}>
        {variation}
      </span>
    </div>
  )
}
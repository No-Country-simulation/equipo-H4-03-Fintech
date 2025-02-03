import { Link } from "react-router-dom";

export default function AssetItem({ handler, title, ticker, quote, currency, variation, assetId }) {
  const isDown = variation[0] === '-'

  return (
    <div className="w-full flex items-center justify-between gap-6 h-[55px] p-4">
      <Link to={`/asset-details/${assetId}`}>
        <img src="/assets/iupi-icon.svg" alt="iupi icon" className="size-10" />
      </Link>
      <div className="w-[70px] flex flex-col justify-center gap-1">
        <span className="font-medium text-base text-black">{title}</span>
        <span className="font-normal text-sm text-muted">{ticker}</span>
      </div>
      <span className="font-medium text-base text-center text-black">
        {currency} {quote}
      </span>
      <div className={`
        w-20 flex justify-center items-center gap-2.5 
        px-[11px] py-2.5 rounded-xl ml-6
        ${isDown ? 'bg-destructive' : 'bg-success'}
      `}>
        <span className="font-medium text-base text-white">{variation}</span>
      </div>
      <img
        src="/assets/dots-menu.svg"
        alt="dots menu"
        className="w-2 h-5 cursor-pointer"
        onClick={() => handler(assetId)}
      />
    </div>
  )
}

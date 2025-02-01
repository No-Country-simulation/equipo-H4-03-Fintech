export default function CryptoSuggestionItem({title, amount, variation, icon}) {

  const isDown = variation[0] === '-'
  
  return (
    <div className="w-[185px] h-[120px] bg-white rounded-3xl flex flex-col justify-center gap-1 shadow-md px-7 py-5">
      <div className="flex items-center gap-1">
        <span class="font-medium text-subtitle text-center text-black">{title}</span>
        <img src={`/assets/${icon}.svg`} alt={icon} className="size-4" />
      </div>
      <span className={`font-medium text-subtitle ${isDown ? 'text-destructive' : 'text-success'}`}>
        {variation}
      </span>
      <span className="font-normal text-subtitle text-muted">
        {amount}
      </span>
    </div>
  )
}

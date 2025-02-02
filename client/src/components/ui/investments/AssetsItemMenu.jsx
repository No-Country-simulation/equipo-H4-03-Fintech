export default function AssetsItemMenu({ handler, selected }) {
  const isFavorite = selected && selected.isFavorite
  const hasAlert = selected && selected.hasAlert

  return (
    <div className={`
      w-full
      flex flex-col items-center gap-2.5 self-stretch
      px-5 py-4 rounded-tl-[28px] rounded-tr-[28px]  
    `}>
      <div className="w-[89px] h-[5px] bg-black" />
      <div className="flex flex-col justify-center items-center gap-2.5 self-stretch">
        <div className="w-full h-0.5 bg-muted" />
        <button
          onClick={() => handler('isFavorite', !isFavorite)}
          className="w-[600px] flex justify-between items-center self-center h-[55px] px-8 py-4"
        >
          <span className="font-medium text-base text-center text-black">Agregar a favoritos</span>
          <img src={`/assets/star-${isFavorite ? 'full-black' : 'outline'}.svg`} alt="star" className="size-8" />
        </button>

        <div className="w-full h-0.5 bg-muted" />
        <button
          onClick={() => handler('hasAlert', !hasAlert)}
          className="w-[600px] flex justify-between items-center self-center h-[55px] px-8 py-4"
        >
          <span className="font-medium text-base text-center text-black">
            Agregar a las alertas de inversión
          </span>
          <img
            className="size-8"
            src={`/assets/bell-${hasAlert ? 'full-black' : 'outline'}.svg`}
          />
        </button>
      </div>
    </div>
  )
}

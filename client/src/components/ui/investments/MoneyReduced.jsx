export default function MoneyReduced({ handler }) {
  return (
    <div className="w-full flex flex-col  justify-center items-center gap-5 bg-background p-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <span className="font-normal text-base text-muted">Moneda:</span>
          <span className="font-medium text-base text-black">AR$</span>
        </div>
        <div className="w-0.5 h-5 bg-muted" />
        <div className="flex items-center gap-2.5">
          <span className="font-normal text-base text-muted">Plazo</span>
          <span className="font-medium text-base text-black">C.I.</span>
        </div>
        <div className="w-0.5 h-5 bg-muted" />
        <div className="flex items-center gap-2.5">
          <span className="font-normal text-base text-muted">Disponible:</span>
          <span className="font-medium text-base text-black">100</span>
        </div>
      </div>
      <button
        onClick={() => handler(true)}
        className="flex justify-center items-center gap-2.5 px-4"
      >
        <span className="font-medium text-base text-primary">Ver más opciones</span>
        <img
          src="/assets/arrow-down.svg" alt="arrow down"
          className="size-6"
        />
      </button>
    </div>
  )
}

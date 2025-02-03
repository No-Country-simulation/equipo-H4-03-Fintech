export default function FilterHeader({ close }) {
  return (
    <div className="w-full flex justify-around items-center">
      <button
        className={`size-8 border border-black rounded-md pl-[0.74rem] py-0.5`}
        onClick={() => close(false)}
      >
        <img
          src="/assets/chevron-left.svg"
          alt="back arrow"
        />
      </button>
      <div className="w-[86px] flex justify-between items-center">
        <span className="font-bold text-subtitle text-center text-black">
          Filtros
        </span>
        <img className="size-6" src="/assets/arrow-down-black.svg" alt="arrow down black" />
      </div>
      <img className="size-8" src="/assets/save-outline.svg" alt="arrow down black" />

    </div>
  )
}

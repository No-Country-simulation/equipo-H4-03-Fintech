export default function FilterPanelButton({ handler }) {
  return (
    <button
      className={`
        w-[350px] rounded-full flex justify-between 
        items-center bg-white px-8 py-2 mx-auto
      `}
      onClick={() => handler(true)}
    >
      <span className="font-medium text-base leading-[16px] text-center text-primary">
        Instrumentos
      </span>
      <img className="size-6" src="/assets/arrow-down.svg" alt="arrow down" />
    </button>
  )
}

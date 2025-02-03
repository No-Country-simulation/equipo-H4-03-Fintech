export default function FilterOpcion ({ label, name, selected, handler }) {
  return (
    <div 
      onClick={() => handler(name)}
      className={`
        h-[42px] w-[380px] flex items-center bg-white px-4 rounded-xl border border-solid cursor-pointer
        ${selected ? 'border-primary justify-between' : 'border-muted justify-start'}
      `}
    >
      <span className="font-normal text-base text-black">{label}</span>
      <img 
        src="/assets/check-circle-outline-rounded.svg" 
        alt="check svg" 
        className={`${selected ? "size-6" : "hidden"}`} 
      />
    </div>
  )
}

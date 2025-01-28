export default function SideMenuItem({ icon, label, arrow }) {
  return (
    <button className={`w-full h-[55px] flex ${!arrow ? 'justify-between' : 'justify-start'} items-center px-8 bg-white`}>
      <div className="flex items-center gap-2">
        <img
          className="size-6"
          src={`/assets/${icon}.svg`}
          alt="arrow forward"
        />
        <span className={`text-subtitle ${icon === 'trash' ? 'text-destructive' : 'text-black' }`}>{label}</span>
      </div>
      <img
        className={!arrow ? 'size-6' : 'hidden'}
        src="/assets/arrow-forward.svg"
        alt="arrow forward"
      />
    </button>
  )
}

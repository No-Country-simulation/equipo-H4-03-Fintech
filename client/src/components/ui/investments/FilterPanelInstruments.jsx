import { useEffect } from "react"

export default function FilterPanelInstruments({ show, close }) {

  useEffect(() => {
    const handleClickOutside = (event) => {
      const panel = document.getElementById('instruments')
      if (panel && !panel.contains(event.target)) {
        close(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [close])

  return (
    <div id="instruments" className={`
      w-[420px] flex flex-col items-center bg-white
      py-[30px] 
      fixed bottom-0 right-0 z-40
      transform transition-transform duration-300 ease-in-out
      ${show ? 'translate-x-0' : 'translate-x-full h-0'}
    `}>
      <div className="w-80 flex flex-col items-start ">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-base text-muted">Instrumentos</span>
          <img
            onClick={() => close(false)}
            src="/assets/close-icon.svg"
            alt="close"
            className="size-4 cursor-pointer" />
        </div>
        <button className="w-[420px] flex justify-start items-center gap-4 pl-11 py-1 bg-background -ml-12">
          <img src="/assets/star-full-blue.svg" className="size-6" alt="full blue star" />
          <span className="font-medium text-sm text-primary">Favoritos</span>
        </button>

        {
          opciones.map(({ name, icon }) => (
            <button
              key={name}
              className="flex justify-start items-center gap-4 py-1"
            >
              <img src={`/assets/${icon}.svg`} alt="founds" className="size-3.5" />
              <span class="font-medium text-sm text-black">{name}</span>
            </button>
          ))
        }
      </div>
    </div>
  )
}

//#region OPCIONES
const opciones = [
  {
    name: 'Acciones',
    icon: 'founds'
  },
  {
    name: 'Bonos públicos',
    icon: 'founds'
  },
  {
    name: 'Caución',
    icon: 'founds'
  },
  {
    name: 'Cedears',
    icon: 'founds'
  },
  {
    name: 'Dólar MEP',
    icon: 'cash'
  },
  {
    name: 'Fondos de Inversión',
    icon: 'founds'
  },
  {
    name: 'Futuros',
    icon: 'founds'
  },
  {
    name: 'Letras',
    icon: 'founds'
  },
  {
    name: 'Obligaciones negociables',
    icon: 'founds'
  },
  {
    name: 'Opciones',
    icon: 'founds'
  },
]
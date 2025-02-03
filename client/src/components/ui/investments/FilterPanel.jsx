import { useState } from 'react'
import FilterHeader from './FilterHeader'
import FilterPanelButton from './FilterPanelButton'
import FilterSelectOpcion from './FilterSelectOpcion'

export default function FilterPanel({ show, close, handler, showModal }) {
  const initialRiskState = [
    {
      label: 'Conservador',
      name: 'Conservador',
      selected: false
    },
    {
      label: 'Moderado',
      name: 'Moderado',
      selected: false
    },
    {
      label: 'Arriesgado',
      name: 'Arriesgado',
      selected: false
    }
  ]
  const [riskOptions, setRiskOptions] = useState(initialRiskState)

  const handleRiskChange = (name) => {
    const pos = riskOptions.findIndex(opt => opt.name === name)
    const newOptions = [...initialRiskState]
    newOptions[pos].selected = !riskOptions[pos].selected
    setRiskOptions(newOptions)
  }

  const initialTemporaryState = [
    {
      label: 'A corto plazo',
      name: 'corto',
      selected: false
    },
    {
      label: 'A mediano plazo',
      name: 'mediano',
      selected: false
    },
    {
      label: 'A largo plazo',
      name: 'largo',
      selected: false
    }
  ]
  const [temporaryOptions, setTemporaryOptions] = useState(initialTemporaryState)
  const handleTemporaryChange = (name) => {
    const pos = temporaryOptions.findIndex(opt => opt.name === name)
    const newOptions = [...initialTemporaryState]
    newOptions[pos].selected = !temporaryOptions[pos].selected
    setTemporaryOptions(newOptions)
  }

  return (
    <div className={`
      fixed top-0 right-0 w-[420px] h-[95vh] bg-background
      flex justify-center z-10 px-4 pt-5 pb-10 overflow-y-auto no-scrollbar
      transform transition-transform duration-300 ease-in-out
      ${show ? 'translate-x-0 animate-bounce-in-right' : 'translate-x-full'}
    `}>
      <div className="w-[400px] flex flex-col items-center gap-6 ">
        <FilterHeader close={close} />

        <FilterPanelButton handler={handler} />

        <div className="w-[350px] h-[42px] flex justify-between items-center px-2">
          <span className="font-medium text-base text-black">Rendimiento esperado</span>
          <div className="flex items-center gap-2.5 bg-white pl-2.5 rounded-xl border border-solid border-muted ">
            <input
              type="number"
              step="0.01"
              min="0"
              max="100"
              className={`
                w-[70px] text-right font-normal text-base text-black
                border-none outline-none p-2.5 no-spinners
              `}
              placeholder="0.00"
            />
            <div className='w-0.5 h-10 bg-black' />
            <span className="font-normal text-base text-muted p-2.5">%</span>
          </div>
        </div>

        <FilterSelectOpcion
          handler={handleRiskChange}
          title={'Nivel de riesgo'}
          dataState={riskOptions}
        />
        <FilterSelectOpcion
          handler={handleTemporaryChange}
          title={'Horizonte temporal'}
          dataState={temporaryOptions}
        />

        <button
          onClick={() => showModal(true)}
          className='h-[42px] self-end flex flex-col justify-center items-center gap-2.5 bg-primary px-4 py-[9px] rounded-[1000px] border border-solid border-white'
        >
          <span className="font-normal text-base text-white">Aplicar filtros</span>
        </button>
      </div>
    </div>
  )
}

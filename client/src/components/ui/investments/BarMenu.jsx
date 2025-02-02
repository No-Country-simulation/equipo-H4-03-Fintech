import { useState } from "react"

export default function BarMenu() {

  const initialState = {
    favorites: true,
    general: false,
    featured: false
  }
  const [filters, setFilters] = useState(initialState)
  const handleClick = name => {
    setFilters(prev => {
      return {
        ...prev,
        [name]: !prev[name]
      }
    })
  }

  return (
    <div className="w-[600px] flex items-center justify-around">
      <button
        onClick={() => handleClick('favorites')}
        className={`
            h-10 flex justify-center items-center
            px-[9px] rounded-full border border-solid 
            ${filters.favorites ? 'border-white bg-primary' : 'border-primary bg-white'}
          `}
      >
        <span className={`
            font-medium text-base ${filters.favorites ? 'text-white' : 'text-primary'}
          `}>
          Favoritos
        </span>
      </button>
      <button
        onClick={() => handleClick('general')}
        className={`
            h-10 flex justify-center items-center 
            px-[9px] rounded-full border border-solid
            ${filters.general ? 'border-white bg-primary' : 'border-primary bg-white'}
          `}
      >
        <span className={`
            font-medium text-base  ${filters.general ? 'text-white' : 'text-primary'}
          `}>
          Panel general
        </span>
      </button>
      <button
        onClick={() => handleClick('featured')}
        className={`
            h-10 flex justify-center items-center px-[9px]
            rounded-full border border-solid 
            ${filters.featured ? 'border-white bg-primary' : 'border-primary bg-white'}
          `}
      >
        <span className={`
            font-medium text-base  ${filters.featured ? 'text-white' : 'text-primary'}
          `}>
          Destacados
        </span>
      </button>
    </div>
  )
}

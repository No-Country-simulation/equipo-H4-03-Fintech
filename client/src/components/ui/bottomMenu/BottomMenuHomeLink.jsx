import { useSelector } from "react-redux"

export default function BottomMenuLink({ handler, current }) {

  const { isCapital } = useSelector(state => state.switcher)

  return (
    <button
      onClick={() => handler("/dashboard")}
      className="flex flex-col items-center"
    >
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.07153 26.1429V13.2857C5.07153 12.8333 5.17296 12.4048 5.37582 12C5.57868 11.5952 5.8582 11.2619 6.21439 11L14.7858 4.57143C15.2858 4.19048 15.8572 4 16.5001 4C17.143 4 17.7144 4.19048 18.2144 4.57143L26.7858 11C27.143 11.2619 27.423 11.5952 27.6258 12C27.8287 12.4048 27.9296 12.8333 27.9287 13.2857V26.1429C27.9287 26.9286 27.6487 27.6014 27.0887 28.1614C26.5287 28.7214 25.8563 29.0009 25.0715 29H20.7858C20.3811 29 20.042 28.8629 19.7687 28.5886C19.4953 28.3143 19.3582 27.9752 19.3572 27.5714V20.4286C19.3572 20.0238 19.2201 19.6848 18.9458 19.4114C18.6715 19.1381 18.3325 19.0009 17.9287 19H15.0715C14.6668 19 14.3277 19.1371 14.0544 19.4114C13.7811 19.6857 13.6439 20.0248 13.643 20.4286V27.5714C13.643 27.9762 13.5058 28.3157 13.2315 28.59C12.9572 28.8643 12.6182 29.0009 12.2144 29H7.92868C7.14296 29 6.47058 28.7205 5.91153 28.1614C5.35249 27.6024 5.07249 26.9295 5.07153 26.1429Z"
          fill={current !== 'dashboard' ? "#797979" : (isCapital ? "#004AAC" : "#ffa600")}
        />
      </svg>
      <span className={`
        font-medium text-sm 
        ${current !== 'dashboard' ? 'text-muted' : (isCapital ? 'text-primary' : 'text-accent')}
      `}>
        Inicio
      </span>
    </button>
  )
}

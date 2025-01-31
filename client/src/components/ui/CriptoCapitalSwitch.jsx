import { useDispatch, useSelector } from "react-redux"
import { toggleSwitcher } from "../../redux/slices/switcherSlices";

export default function CriptoCapitalSwitch() {
  const dispatch = useDispatch()
  const { isCapital } = useSelector(state => state.switcher)

  return (
    <section className={`w-56 h-10 flex items-center justify-around rounded-full ${isCapital ? 'bg-primary' : 'bg-crypto'}`}>
      <button
        className={`
          w-[105px] h-8 flex justify-center items-center rounded-full 
          ${isCapital ? 'bg-background' : 'bg-crypto'}
        `}
        onClick={() => dispatch(toggleSwitcher("capital"))}
      >
        <span className={`
            font-medium text-base 
            ${isCapital ? 'text-primary' : 'text-background'}
        `}>
          Capital
        </span>
      </button>
      <button
        className={`
          w-[105px] h-8 flex justify-center items-center rounded-full 
          ${isCapital ? 'bg-primary' : 'bg-background'}
        `}
        onClick={() => dispatch(toggleSwitcher("crypto"))}
      >
        <span className={`
            font-medium text-base 
            ${!isCapital ? 'text-crypto' : 'text-background'}
        `}>
          Cripto
        </span>
      </button>
    </section>
  )
}

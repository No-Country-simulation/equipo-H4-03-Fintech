import { useDispatch } from "react-redux"
import { closeSubMenu } from "../../redux/slices/sidebarSlices"

export default function SubMenuHeader({ title }) {
  const dispatch = useDispatch()

  const handleCloseSubMenu = () => {
    dispatch(closeSubMenu())
  }

  return (
    <header className="w-full flex items-center justify-center h-[150px] relative">
      <img
        src="/assets/chevron-left.svg"
        alt="back arrow"
        className={`
              size-6 py-1 border border-black rounded-sm cursor-pointer left-4 absolute
            `}
        onClick={handleCloseSubMenu}
      />
      <span
        className="font-bold text-subtitle text-center text-black"
      >
        {title}
      </span>
    </header>
  )
}

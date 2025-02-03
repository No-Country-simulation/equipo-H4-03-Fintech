import { Link } from "react-router-dom";
import SideMenuItem from "../../ui/SideMenuItem";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../redux/slices/sidebarSlices";

export default function MainMenu() {

  const dispatch = useDispatch()
  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }

  return (
    <div className="h-screen flex flex-col bg-background overflow-y-auto no-scrollbar">
      <div className="flex-1">
        <div className="w-full flex flex-col p-2 h-[150px] bg-[#004aac]">
          <img
            className="size-8 self-end cursor-pointer"
            src="/assets/close-icon.svg"
            alt="close icon"
            onClick={handleCloseMenu}
          />
        </div>

        <div
          className="w-36 flex flex-col items-center mx-auto -mt-[72px] mb-4 relative"
        >
          <div className="size-36 rounded-full border-l-8 border-l-accent top-0 absolute z-10" />
          <img
            src="/assets/example-user.svg"
            alt="example user image"
            className="size-36 rounded-full"
          />
          <span className="font-light text-subtitle text-nowrap text-accent">50%  completado</span>
          <span className="font-extrabold text-subtitle text-black">Nickname</span>
          <Link className="font-normal text-subtitle text-primary">Ver perfil </Link>
        </div>

        <nav className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-[2px]">
            <div className="w-full h-[55px] flex items-center justify-start px-4">
              <span className="font-medium text-subtitle text-black">Mi cuenta</span>
            </div>
            <SideMenuItem icon={'default-user'} label={"Mis datos"} name={"mydata"} />
            <SideMenuItem icon={'user-badge'} label={"Test inversor"} />
            <SideMenuItem icon={'premium'} label={"Premium"} />
            <SideMenuItem icon={'academia'} label={"Academia"} />
            <SideMenuItem icon={'bell'} label={"Notificaciones"} name={"notifications"} />
            <SideMenuItem icon={'lock'} label={"Seguridad"} />
            <SideMenuItem icon={'preferencias'} label={"Preferencias"} />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="w-full h-[55px] flex items-center justify-start px-4">
              <span className="font-medium text-subtitle text-black">Información y ayuda </span>
            </div>
            <SideMenuItem icon={'headset'} label={"Centro de ayuda"} />
            <SideMenuItem icon={'legal'} label={"Legales"} />
          </div>
          <div className="flex flex-col gap-[2px] mb-6">
            <SideMenuItem icon={'logout'} label={"Cerrar sesión"} arrow={true} />
            <SideMenuItem icon={'trash'} label={"Dar de baja"} arrow={true} />
          </div>
        </nav>
      </div>
    </div>
  )
}

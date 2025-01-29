import { useDispatch } from "react-redux"
import { closeSubMenu } from "../../../redux/slices/sidebarSlices"
import MenuItemField from "../../ui/MenuItemField"
import MenuItemFieldGroup from "../../ui/MenuItemFieldGroup"


export default function MyData() {
  const dispatch = useDispatch()

  const handleCloseSubMenu = () => {
    dispatch(closeSubMenu())
  }

  const handlePencilClick = id => {
    const $input = document.getElementById(id)
    if ($input) {
      $input.disabled = !$input.disabled
    }
  }

  return (
    <div className="h-screen flex flex-col bg-background overflow-y-auto no-scrollbar">
      <div className="flex-1">
        <div className="w-full flex items-center justify-center h-[150px] relative">
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
            Mis datos
          </span>
        </div>

        <MenuItemFieldGroup title="Datos de usuario">
          <MenuItemField
            label={"Nombre de usuario"}
            fieldId={"username"}
            placeholder={"Nickname"}
          />
          <MenuItemField
            label={"Correo electrónico"}
            fieldId={"email"}
            placeholder={"maria.e.avalos@gmail.com"}
          />
          <MenuItemField
            label={"Contraseña"}
            fieldId={"password"}
            placeholder={"********"}
            fieldType={"password"}
          />
        </MenuItemFieldGroup>
        <MenuItemFieldGroup title={"Datos personales"}>
          <MenuItemField
            label={"Nombre completo"}
            fieldId={"name"}
            placeholder={"María Eugenia Avalos"}
          />
          <MenuItemField
            label={"DNI"}
            fieldId={"dnu"}
            placeholder={"12.345.678"}
          />
          <div className="flex gap-2">
          <MenuItemField
            label={"Fecha de nacimiento"}
            fieldId={"birthdate"}
            placeholder={""}
            type={"date"}
          />
          <MenuItemField
            label={"Sexo"}
            fieldId={"sex"}
            placeholder={"Femenino"}
          />
          </div>
        </MenuItemFieldGroup>
      </div>
    </div>
  )
}

import { useDispatch } from "react-redux"
import { closeSubMenu } from "../../../redux/slices/sidebarSlices"
import MenuItemField from "../../ui/MenuItemField"
import MenuItemFieldGroup from "../../ui/MenuItemFieldGroup"
import SubMenuHeader from "../../ui/SubMenuHeader"


export default function MyData() {
  const dispatch = useDispatch()

  const handleCloseSubMenu = () => {
    dispatch(closeSubMenu())
  }

  return (
    <div className="h-screen flex flex-col bg-background overflow-y-auto no-scrollbar">
      <div className="flex-1 pb-8 gap-6">
        <SubMenuHeader title={"Mis datos"} />
        
        <MenuItemFieldGroup title="Datos de usuario">
          <MenuItemField
            label={"Nombre de usuario"}
            fieldId={"username"}
            placeholder={"Nickname"}
            edit={true}
          />
          <MenuItemField
            label={"Correo electrónico"}
            fieldId={"email"}
            placeholder={"maria.e.avalos@gmail.com"}
            edit={true}
          />
          <MenuItemField
            label={"Contraseña"}
            fieldId={"password"}
            placeholder={"********"}
            fieldType={"password"}
            edit={true}
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
          <div className="grid grid-cols-2 gap-4">
            <MenuItemField
              label={"Fecha de nacimiento"}
              fieldId={"birthdate"}
              fieldType={"date"}
            />
            <MenuItemField
              label={"Sexo"}
              fieldId={"sex"}
              placeholder={"Femenino"}
            />
          </div>
        </MenuItemFieldGroup>
        <MenuItemFieldGroup title={"Dirección"}>
          <div className="grid grid-cols-2 gap-4">
            <MenuItemField
              label={"Calle"}
              fieldId={"street_address"}
              placeholder={"Calle Falsa"}
            />
            <MenuItemField
              label={"Número"}
              fieldId={"number_address"}
              placeholder={"123"}
            />
            <MenuItemField
              label={"Ciudad"}
              fieldId={"city"}
              placeholder={'Shelbyville'}
            />
            <MenuItemField
              label={"Codigo Postal"}
              fieldId={"cp"}
              placeholder={"1234"}
            />
          </div>
        </MenuItemFieldGroup>
        <div className="px-7 py-4">
          <button
            className="w-full self-end text-white bg-primary px-6 py-3 text-base font-medium rounded-3xl cursor-pointer"
            onClick={handleCloseSubMenu}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  )
}

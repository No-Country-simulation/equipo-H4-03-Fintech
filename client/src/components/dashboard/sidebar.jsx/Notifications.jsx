import NotificationSettingOption from "../../ui/NotificationSettingOption";
import SubMenuHeader from "../../ui/SubMenuHeader";
import SwitchComponent from "../../ui/Switch";

export default function Notifications() {
  return (
    <div className="h-screen flex flex-col bg-background overflow-y-auto no-scrollbar">
      <div className="flex-1 pb-8 gap-6">
        <SubMenuHeader title={"Notificaciones"} />
        <div className="flex flex-col gap-2">
          <NotificationSettingOption label={"Notificaciones"} value={true} />
          <NotificationSettingOption label={"Recibir correos electrónicos"} value={false} />
          <NotificationSettingOption label={"Notificaciones generales"} value={true} />
          <NotificationSettingOption label={"Recordatorios de objetivos"} value={false} />
          <NotificationSettingOption label={"Alertas de inversión"} value={false} />
        </div>
      </div>
    </div>
  )
}

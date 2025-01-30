import SwitchComponent from "./Switch";

export default function NotificationSettingOption({ label, name, value }) {

  return (
    <div className="h-14 flex justify-between items-center px-4 bg-white">
      <span class="font-medium text-subtitle text-black">{label}</span>
      <SwitchComponent value={value} name={name} />
    </div>
  )
}
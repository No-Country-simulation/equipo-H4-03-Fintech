import { useSelector } from "react-redux";
import MyData from "./MyData";
import Notifications from "./Notifications";
import MainMenu from "./MainMenu";

export default function Sidebar() {

  const sidebar = useSelector(state => state.sidebar)
  
  return (
    <>
      <div className={`
        fixed top-0 left-0 h-screen w-96
        transform transition-transform duration-300 ease-in-out
        ${sidebar.menu ? 'translate-x-0 animate-bounce-in' : '-translate-x-full'}
      `}>
        <MainMenu />
      </div>
      <div className={`
        fixed top-0 left-0 h-screen w-96 z-10
        transform transition-transform duration-300 ease-in-out
        ${sidebar.mydata ? 'translate-x-0 animate-bounce-in' : '-translate-x-full'}
      `}>
        <MyData />
      </div>

      <div className={`
        fixed top-0 left-0 h-screen w-96 z-10
        transform transition-transform duration-300 ease-in-out
        ${sidebar.notifications ? 'translate-x-0 animate-bounce-in' : '-translate-x-full'}
      `}>
        <Notifications />
      </div>
    </>
  )
}

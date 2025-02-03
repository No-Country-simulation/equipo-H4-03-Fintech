import { Outlet } from 'react-router-dom';
import Sidebar from '@components/dashboard/sidebar.jsx/Sidebar';
import BottomMenu from '@ui/bottomMenu/BottomMenu';

export default function Dashboard() {


  return (
    <div className='w-screen min-h-screen flex flex-col justify-start items-center pr-5 pt-5 pb-0 bg-background'>
      <Sidebar />
      <Outlet />
      <BottomMenu />
    </div>
  )
}

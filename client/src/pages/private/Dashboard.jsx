import DashboardHeader from '../../components/ui/DashboardHeader';
import Sidebar from '../../components/dashboard/sidebar.jsx/Sidebar';
import { Outlet } from 'react-router-dom';
import BottomMenu from '../../components/ui/BottomMenu';

export default function Dashboard() {


  return (
    <div className='w-screen min-h-screen flex flex-col justify-start items-center pr-5 pt-5 pb-0 bg-background'>
      <DashboardHeader />
      <Sidebar />
      <Outlet />
      <BottomMenu />
    </div>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { openMenu } from "../../redux/slices/sidebarSlices";
import Sidebar from '../../components/dashboard/sidebar.jsx/Sidebar'
import MyData from '../../components/dashboard/sidebar.jsx/MyData';

export default function Dashboard() {

  const sidebar = useSelector(state => state.sidebar)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-5'>
      <div className="flex gap-10">
        <button
          onClick={() => dispatch(openMenu('menu'))}
        >
          menu
        </button>
        <h1 className='text-title'>component dashboard</h1>
      </div>
      <div className={`
        fixed top-0 left-0 h-screen w-96
        transform transition-transform duration-300 ease-in-out
        ${sidebar.menu ? 'translate-x-0 animate-bounce-in' : '-translate-x-full'}
      `}>
        <Sidebar />
      </div>
      <div className={`
        fixed top-0 left-0 h-screen w-96 z-10
        transform transition-transform duration-300 ease-in-out
        ${sidebar.mydata ? 'translate-x-0 animate-bounce-in' : '-translate-x-full'}
      `}>
        <MyData />
      </div>

      <Outlet />
    </div>
  )
}

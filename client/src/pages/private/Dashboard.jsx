import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/slices/userSlices'
import Sidebar from '../../components/dashboard/sidebar.jsx/Sidebar'
import { useState } from 'react'

export default function Dashboard() {

  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/')
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-5'>
      <div className="flex gap-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
        >
          menu
        </button>
        <h1 className='text-title'>component dashboard</h1>
      </div>
      <div className={`
        fixed top-0 left-0 h-screen w-96
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 animate-bounce-in' : '-translate-x-full'}
      `}>
        <Sidebar setIsOpen={setIsOpen} />
      </div>

      <button
        className='border px-5 py-2 rounded-3xl'
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
      <Outlet />
    </div>
  )
}

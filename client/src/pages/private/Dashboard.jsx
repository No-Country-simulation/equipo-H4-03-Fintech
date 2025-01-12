import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/slices/userSlices'

export default function Dashboard () {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/')
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-5'>
      <h1 className='text-title'>component dashboard</h1>
      <button
      className='border px-5 py-2 rounded-3xl'
       onClick={handleLogout}
       >
        Cerrar sesión
        </button>
    </div>
  )
}

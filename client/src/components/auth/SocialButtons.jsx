import { Link } from 'react-router-dom';

export default function SocialButtons({ auth }) {

  const URL = import.meta.env.VITE_API_GOOGLE_AUTH

  return (
    <Link
      to={URL}
      className='w-full border border-blue-300 py-2 rounded-3xl text-center mb-4'
    >
      Google
    </Link>
  )
}

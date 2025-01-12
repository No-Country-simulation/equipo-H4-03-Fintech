import { Link } from 'react-router-dom';

export default function SocialButtons({ auth }) {

  const URL = import.meta.env.VITE_API_GOOGLE_AUTH

  return (
    <section className="w-full flex flex-col gap-5 mb-4">
      <Link
        to={URL}
        className='w-full border border-blue-300 py-2 rounded-3xl text-center'
      >
        Google
      </Link>
      <button className='w-full border border-gray-300 py-2 rounded-3xl'>apple</button>
    </section>
  )
}

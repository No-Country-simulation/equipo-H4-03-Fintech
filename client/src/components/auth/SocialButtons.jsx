import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'

export default function SocialButtons() {
  return (
    <section className="w-full flex flex-col gap-5 mb-4">
      <GoogleLogin
        onSuccess={({ credential }) => {
          const { email } = jwtDecode(credential)
          console.log({ email })
        }}
        onError={(error) => console.log(error)}
      />
      <button className='w-full border border-gray-300 py-2 rounded-[4px]'>apple</button>
    </section>
  )
}

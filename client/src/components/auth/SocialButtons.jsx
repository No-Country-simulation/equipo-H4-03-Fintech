import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'
import authService from '../../services/auth.service'

export default function SocialButtons({ auth }) {

  const onSuccessHandler = ({ credential }) => {
    if (auth.login) {
      const { email } = jwtDecode(credential)
      authService.login({
        email,
        token: credential
      })
    } else if (auth.register) {
      const { email, given_name, family_name } = jwtDecode(credential)
      authService.register({
        name: `${given_name} ${family_name}`,
        email,
        token: credential
      })
    }
  }

  return (
    <section className="w-full flex flex-col gap-5 mb-4">
      <GoogleLogin
        onSuccess={onSuccessHandler}
        onError={(error) => console.log(error)}
      />
      <button className='w-full border border-gray-300 py-2 rounded-[4px]'>apple</button>
    </section>
  )
}

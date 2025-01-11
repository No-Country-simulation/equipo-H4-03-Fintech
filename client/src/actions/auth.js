/* global google */
import { loginFormSchema, registerFormSchema } from '../../lib/definitions'
import authService from '../services/auth.service'
import { jwtDecode } from 'jwt-decode'

export async function SignIn(state, formData) {
  const validatedFields = loginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors
  }
  else {
    return await authService.login(validatedFields.data)
  }
}

export async function SignUp(state, formData) {
  const validatedFields = registerFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors
  }
  else {
    return await authService.register(validatedFields.data)
  }
}

function callback({ credential }) {
  console.log({ credential });

  // try {
  //   const responsePayload = jwtDecode(credential);
  //   console.log({ responsePayload });
  // } catch (error) {
  //   console.error({ handleCredentialResponse: error });
  // }
}
const call = (token) => {
  console.log(token);

}

export const googleAuth = () => {

  google.accounts.id.initialize({
    client_id: "569629281175-7209tv54e04eb8kbkmu6u88hf4rvjlen.apps.googleusercontent.com",  // import.meta.env.VITE_GOOGLE_CLIENT_ID,
    auto_select: false,
    callback: (response) => {
      // Here we call our provider with the token provided by Google
      call(response)
    }
  })

  google.accounts.id.prompt((notification) => {
    console.log('Notification', notification)
  })
}

export const googleLogout = () => {
  google.accounts.id.disableAutoSelect();
};
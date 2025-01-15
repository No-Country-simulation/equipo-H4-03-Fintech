/* global google */
import { loginFormSchema, registerFormSchema } from '../../lib/definitions'
import authService from '../services/auth.service'

export async function SignIn(state, formData) {
  const validatedFields = loginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors
  }
  else {
    const { password, email } = validatedFields.data
    const result = await authService.login({
      username: email,
      password
    })
    
    return result
  }
}

export async function SignUp(state, formData) {
  const validatedFields = registerFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    terms: formData.get('terms'),
    policy: formData.get('policy')
  })

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors
  }
  else {
    const { name, email, password } = validatedFields.data
    const [firstName, lastname] = name.split(' ')
    const data = {
      firstName,
      lastName: lastname ? lastname : ' ',
      username: email,
      password
    }
    return await authService.register(data)
  }
}

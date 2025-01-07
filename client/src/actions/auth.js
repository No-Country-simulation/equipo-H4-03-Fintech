import { loginFormSchema, registerFormSchema } from '../lib/definitions'
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
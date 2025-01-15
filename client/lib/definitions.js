import z from 'zod'

export const registerFormSchema = z.object({
  name: z
    .string({ message: 'Requerido.' })
    .trim(),
  email: z
    .string({ message: 'Requerido.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Debe tener un mínimo de 8 caracteres' })
    .regex(/[a-zA-Z]/, { message: 'Debe contener al menos 1 letra.' })
    .regex(/[0-9]/, { message: 'Debe contener al menos 1 numero.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos 1 caracter especial.',
    })
    .trim(),
  terms: z
    .string({
      message: "Debes aceptar las políticas de privacidad"
    })
    .refine((val) => val === "true", {
      message: "Debes aceptar los términos y condiciones"
    }),
  policy: z
    .string({
      message: "Debes aceptar las políticas de privacidad"
    })
    .refine((val) => val === "true", {
      message: "Debes aceptar las políticas de privacidad"
    })
})

export const loginFormSchema = z.object({
  email: z
    .string({ message: 'Requerido.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Debe tener un mínimo de 8 caracteres' })
    .regex(/[a-zA-Z]/, { message: 'Debe contener al menos 1 letra.' })
    .regex(/[0-9]/, { message: 'Debe contener al menos 1 numero.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos 1 caracter especial.',
    })
    .trim(),
})

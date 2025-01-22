import z from 'zod'

export const profileFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(50, { message: 'El nombre no puede exceder 50 caracteres' })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: 'El nombre solo puede contener letras'
    })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: 'El apellido debe tener al menos 2 caracteres' })
    .max(50, { message: 'El apellido no puede exceder 50 caracteres' })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: 'El apellido solo puede contener letras'
    })
    .trim(),
  birthdate: z
    .string()
    .min(1, { message: 'La fecha de nacimiento es requerida' })
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    }, { message: "Debes ser mayor de 18 años" })
    .refine((date) => !isNaN(new Date(date).getTime()), {
      message: "Fecha inválida"
    })
})

export const IdentificationFormSchema = z.object({
  dni: z
    .string()
    .min(8, { message: 'El DNI es requerida' }),
  terms: z
    .string()
    .refine((val) => val === "true", {
      message: "Debes aceptar los términos y condiciones"
    })
})

export const AddressFormSchema = z.object({
  country: z
    .string(),
  calle: z
    .string()
    .min(1, { message: 'La calle es requerida' })
    .trim(),
  numero: z
    .string()
    .min(4, { message: 'La numeración es requerida' })
    .regex(/^[0-9]+$/, { message: 'Solo se permiten números' }),
  ciudad: z
    .string()
    .min(1, { message: 'La ciudad es requerida' })
    .trim(),
  codigo_postal: z
    .string()
    .min(4, { message: 'El código postal es requerido' })
    .regex(/^[0-9]+$/, { message: 'Solo se permiten números' })
})
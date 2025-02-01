import {
  profileFormSchema,
  IdentificationFormSchema,
  AddressFormSchema,
} from '../../lib/onboardingDataSchemas'

export async function Profile(state, formData) {

  const validatedFields = profileFormSchema.safeParse({
    fullName: formData.get("fullName"),
    username: formData.get("username"),
    dni: formData.get("dni"),
    sex: formData.get("sex"),
    birthdate: formData.get("birthdate")
  })

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors
  }
  else {
    return { success: true }
  }
}

export async function Identification(state, formData) {

  const validatedFields = IdentificationFormSchema.safeParse({
    dni: formData.get("dni"),
    terms: formData.get("terms")
  })

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors
  }
  else {
    return { success: true }
  }
}

export async function Location(state, formData) {

  const validatedFields = AddressFormSchema.safeParse({
    country: formData.get("country"),
    calle: formData.get("calle"),
    numero: formData.get("numero"),
    ciudad: formData.get("ciudad"),
    codigo_postal: formData.get("codigo_postal"),
  })

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors
  }
  else {
    return { success: true }
  }
}
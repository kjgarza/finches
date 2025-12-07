import { z } from "zod"

export const curpSchema = z
  .string()
  .length(18, "El CURP debe tener 18 caracteres")
  .regex(
    /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/,
    "Formato de CURP inválido"
  )

export const rfcSchema = z
  .string()
  .min(12, "El RFC debe tener al menos 12 caracteres")
  .max(13, "El RFC debe tener máximo 13 caracteres")
  .regex(
    /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/,
    "Formato de RFC inválido"
  )

export const clabeSchema = z
  .string()
  .length(18, "La CLABE debe tener 18 dígitos")
  .regex(/^\d{18}$/, "La CLABE solo debe contener números")

export const emailSchema = z
  .string()
  .email("Correo electrónico inválido")
  .toLowerCase()

export const passwordSchema = z
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
    "La contraseña debe contener mayúsculas, minúsculas, números y caracteres especiales"
  )

export const mxnAmountSchema = z
  .number()
  .min(100, "El monto mínimo es $100")
  .max(1000000, "El monto máximo es $1,000,000")

export const investmentCreateSchema = z.object({
  instrumentType: z.enum(["CETES", "BONDDIA", "UDIBONOS"]),
  principal: mxnAmountSchema,
  termDays: z.number().min(28).max(728),
  autoReinvest: z.boolean().default(false),
  paymentMethod: z.enum(["spei", "domiciliacion"]),
})

export const recurringSavingSchema = z.object({
  amount: z.number().min(100).max(12000),
  frequency: z.enum(["weekly", "biweekly", "monthly"]),
  reinvestmentInstrument: z.enum(["CETES", "BONDDIA"]),
  isActive: z.boolean().default(true),
})

export const userRegistrationSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: emailSchema,
  username: z
    .string()
    .min(3, "El usuario debe tener al menos 3 caracteres")
    .regex(/^[a-z0-9_]+$/, "El usuario solo puede contener letras minúsculas, números y guiones bajos"),
  password: passwordSchema,
  curp: curpSchema,
  rfc: rfcSchema,
  dateOfBirth: z.string(),
  gender: z.enum(["M", "F"]),
  entity: z.string(),
  bankAccount: z.object({
    clabe: clabeSchema,
    bankName: z.string().min(3),
    accountHolder: z.string().min(3),
    beneficiaries: z
      .array(
        z.object({
          name: z.string(),
          percentage: z.number().min(0).max(100),
        })
      )
      .optional(),
  }),
  acceptContract: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar el contrato",
  }),
})

export const maturityInstructionSchema = z.object({
  investmentId: z.string(),
  action: z.enum(["withdraw", "reinvest_same", "reinvest_other"]),
  targetInstrument: z.enum(["CETES", "BONDDIA", "UDIBONOS"]).optional(),
})

export type InvestmentCreateInput = z.infer<typeof investmentCreateSchema>
export type RecurringSavingInput = z.infer<typeof recurringSavingSchema>
export type UserRegistrationInput = z.infer<typeof userRegistrationSchema>
export type MaturityInstructionInput = z.infer<typeof maturityInstructionSchema>

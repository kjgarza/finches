export enum InstrumentType {
  CETES = "CETES",
  BONDDIA = "BONDDIA",
  UDIBONOS = "UDIBONOS",
}

export interface InvestmentInstrument {
  type: InstrumentType
  name: string
  minAmount: number
  maxAmount: number
  description: string
  riskLevel: "low" | "medium" | "high"
}

export enum InvestmentStatus {
  PENDING = "pending",
  ACTIVE = "active",
  MATURED = "matured",
  CANCELLED = "cancelled",
}

export interface Investment {
  id: string
  userId: string
  instrumentType: InstrumentType
  principal: number
  annualRate: number
  termDays: number
  purchaseDate: string
  maturityDate: string
  currentValue: number
  status: InvestmentStatus
  autoReinvest: boolean
  paymentMethod: "spei" | "domiciliacion"
  createdAt: string
  updatedAt: string
}

export interface Portfolio {
  id: string
  userId: string
  totalBalance: number
  totalInvested: number
  totalGain: number
  gainPercentage: number
  investments: string[]
  updatedAt: string
}

export enum RecurringSavingFrequency {
  WEEKLY = "weekly",
  BIWEEKLY = "biweekly",
  MONTHLY = "monthly",
}

export interface RecurringSaving {
  id: string
  userId: string
  amount: number
  frequency: RecurringSavingFrequency
  reinvestmentInstrument: InstrumentType
  isActive: boolean
  lastExecutionDate?: string
  nextExecutionDate: string
  createdAt: string
  updatedAt: string
}

export enum MaturityAction {
  WITHDRAW = "withdraw",
  REINVEST_SAME = "reinvest_same",
  REINVEST_OTHER = "reinvest_other",
}

export interface MaturityInstruction {
  id: string
  userId: string
  investmentId: string
  action: MaturityAction
  targetInstrument?: InstrumentType
  createdAt: string
}

export interface BankAccount {
  clabe: string
  bankName: string
  accountHolder: string
  beneficiaries?: {
    name: string
    percentage: number
  }[]
}

export interface User {
  id: string
  email: string
  username: string
  password: string
  name: string
  curp: string
  rfc: string
  dateOfBirth: string
  gender: "M" | "F"
  entity: string
  bankAccount: BankAccount
  contractNumber: string
  createdAt: string
  updatedAt: string
}

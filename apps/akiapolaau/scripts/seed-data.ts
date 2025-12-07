import { nanoid } from "nanoid"
import { addDays, format } from "date-fns"
import type { User, Investment, Portfolio, RecurringSaving } from "@repo/utils"
import { InstrumentType, InvestmentStatus, RecurringSavingFrequency } from "@repo/utils"
import { calculateMaturityValue, calculatePortfolioMetrics, calculateNextExecutionDate } from "../src/lib/investment-calculations"
import { promises as fs } from "fs"
import path from "path"

// Sample user data with realistic Mexican information
const users: User[] = [
  {
    id: nanoid(),
    email: "maria.lopez@example.com",
    username: "mlopez",
    password: "$2b$10$abcdefghijklmnopqrstuvwxyz1234567890",
    name: "María López García",
    curp: "LOGM850315MDFPRR09",
    rfc: "LOGM850315AB1",
    dateOfBirth: "1985-03-15",
    gender: "F",
    entity: "Ciudad de México",
    bankAccount: {
      clabe: "012180001234567890",
      bankName: "BBVA México",
      accountHolder: "María López García",
    },
    contractNumber: "CT-2024-001",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: nanoid(),
    email: "juan.perez@example.com",
    username: "jperez",
    password: "$2b$10$abcdefghijklmnopqrstuvwxyz1234567890",
    name: "Juan Pérez Martínez",
    curp: "PEMJ900525HDFRRN03",
    rfc: "PEMJ900525CD2",
    dateOfBirth: "1990-05-25",
    gender: "M",
    entity: "Jalisco",
    bankAccount: {
      clabe: "014180002345678901",
      bankName: "Santander México",
      accountHolder: "Juan Pérez Martínez",
      beneficiaries: [
        { name: "Ana Pérez López", percentage: 100 },
      ],
    },
    contractNumber: "CT-2024-002",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: nanoid(),
    email: "carmen.rodriguez@example.com",
    username: "crodriguez",
    password: "$2b$10$abcdefghijklmnopqrstuvwxyz1234567890",
    name: "Carmen Rodríguez Hernández",
    curp: "ROHC920810MDFRDR04",
    rfc: "ROHC920810EF3",
    dateOfBirth: "1992-08-10",
    gender: "F",
    entity: "Nuevo León",
    bankAccount: {
      clabe: "072180003456789012",
      bankName: "Banorte",
      accountHolder: "Carmen Rodríguez Hernández",
    },
    contractNumber: "CT-2024-003",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: nanoid(),
    email: "roberto.sanchez@example.com",
    username: "rsanchez",
    password: "$2b$10$abcdefghijklmnopqrstuvwxyz1234567890",
    name: "Roberto Sánchez Torres",
    curp: "SATR880420HDFNRB08",
    rfc: "SATR880420GH4",
    dateOfBirth: "1988-04-20",
    gender: "M",
    entity: "Guanajuato",
    bankAccount: {
      clabe: "021180004567890123",
      bankName: "HSBC México",
      accountHolder: "Roberto Sánchez Torres",
    },
    contractNumber: "CT-2024-004",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: nanoid(),
    email: "ana.martinez@example.com",
    username: "amartinez",
    password: "$2b$10$abcdefghijklmnopqrstuvwxyz1234567890",
    name: "Ana Martínez Flores",
    curp: "MAFA950618MDFRLR01",
    rfc: "MAFA950618IJ5",
    dateOfBirth: "1995-06-18",
    gender: "F",
    entity: "Veracruz",
    bankAccount: {
      clabe: "044180005678901234",
      bankName: "Scotiabank México",
      accountHolder: "Ana Martínez Flores",
    },
    contractNumber: "CT-2024-005",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// Generate investments for each user
const investments: Investment[] = []
const portfolios: Portfolio[] = []
const recurringSavings: RecurringSaving[] = []

const instrumentTypes: InstrumentType[] = [InstrumentType.CETES, InstrumentType.BONDDIA, InstrumentType.UDIBONOS]
const terms = [28, 91, 182, 364, 728]
const rates: Record<InstrumentType, number[]> = {
  [InstrumentType.CETES]: [10.5, 11.0, 11.25, 11.5, 11.75],
  [InstrumentType.BONDDIA]: [9.8, 10.2, 10.5, 10.8, 11.0],
  [InstrumentType.UDIBONOS]: [5.5, 6.0, 6.25, 6.5, 6.75],
}

users.forEach((user) => {
  const userInvestments: Investment[] = []
  const numInvestments = Math.floor(Math.random() * 3) + 3 // 3-5 investments

  for (let i = 0; i < numInvestments; i++) {
    const instrumentType = instrumentTypes[Math.floor(Math.random() * instrumentTypes.length)]!
    const termDays = terms[Math.floor(Math.random() * terms.length)]!
    const annualRate = rates[instrumentType][Math.floor(Math.random() * rates[instrumentType].length)]!
    const principal = Math.floor(Math.random() * 90000) + 10000 // 10,000 - 100,000
    
    const daysAgo = Math.floor(Math.random() * 180) // 0-180 days ago
    const purchaseDate = new Date()
    purchaseDate.setDate(purchaseDate.getDate() - daysAgo)
    
    const maturityDate = addDays(purchaseDate, termDays)
    const isMatured = maturityDate <= new Date()
    
    const currentValue = isMatured
      ? calculateMaturityValue(principal, annualRate, termDays)
      : calculateMaturityValue(principal, annualRate, Math.min(daysAgo, termDays))

    const investment: Investment = {
      id: nanoid(),
      userId: user.id,
      instrumentType,
      principal,
      annualRate,
      termDays,
      purchaseDate: purchaseDate.toISOString(),
      maturityDate: maturityDate.toISOString(),
      currentValue,
      status: isMatured ? InvestmentStatus.MATURED : InvestmentStatus.ACTIVE,
      autoReinvest: Math.random() > 0.5,
      paymentMethod: Math.random() > 0.5 ? "spei" : "domiciliacion",
      createdAt: purchaseDate.toISOString(),
      updatedAt: new Date().toISOString(),
    }

    investments.push(investment)
    userInvestments.push(investment)
  }

  // Create portfolio for user
  const metrics = calculatePortfolioMetrics(userInvestments)
  const portfolio: Portfolio = {
    id: nanoid(),
    userId: user.id,
    totalBalance: metrics.totalBalance,
    totalInvested: metrics.totalInvested,
    totalGain: metrics.totalGain,
    gainPercentage: metrics.gainPercentage,
    investments: userInvestments.map((inv) => inv.id),
    updatedAt: new Date().toISOString(),
  }
  portfolios.push(portfolio)

  // Create 2 recurring savings per user
  for (let i = 0; i < 2; i++) {
    const frequency = [RecurringSavingFrequency.WEEKLY, RecurringSavingFrequency.BIWEEKLY, RecurringSavingFrequency.MONTHLY][Math.floor(Math.random() * 3)]!
    const amount = [500, 1000, 2000, 5000][Math.floor(Math.random() * 4)]!
    const reinvestmentInstrument = [InstrumentType.CETES, InstrumentType.BONDDIA][Math.floor(Math.random() * 2)]!
    const isActive = i === 0 // First one active, second inactive

    const recurringSaving: RecurringSaving = {
      id: nanoid(),
      userId: user.id,
      amount,
      frequency,
      reinvestmentInstrument,
      isActive,
      lastExecutionDate: isActive ? format(new Date(), "yyyy-MM-dd") : undefined,
      nextExecutionDate: format(calculateNextExecutionDate(frequency), "yyyy-MM-dd"),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    recurringSavings.push(recurringSaving)
  }
})

// Write data to JSON files
async function seedData() {
  const dataDir = path.join(process.cwd(), "data")
  
  try {
    await fs.mkdir(dataDir, { recursive: true })

    await fs.writeFile(
      path.join(dataDir, "users.json"),
      JSON.stringify(users, null, 2),
      "utf-8"
    )
    console.log(`✓ Created ${users.length} users`)

    await fs.writeFile(
      path.join(dataDir, "investments.json"),
      JSON.stringify(investments, null, 2),
      "utf-8"
    )
    console.log(`✓ Created ${investments.length} investments`)

    await fs.writeFile(
      path.join(dataDir, "portfolios.json"),
      JSON.stringify(portfolios, null, 2),
      "utf-8"
    )
    console.log(`✓ Created ${portfolios.length} portfolios`)

    await fs.writeFile(
      path.join(dataDir, "recurring-savings.json"),
      JSON.stringify(recurringSavings, null, 2),
      "utf-8"
    )
    console.log(`✓ Created ${recurringSavings.length} recurring savings`)

    console.log("\n✅ Database seeded successfully!")
    console.log("\nSample credentials:")
    console.log("Email: maria.lopez@example.com")
    console.log("Email: juan.perez@example.com")
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  }
}

seedData()

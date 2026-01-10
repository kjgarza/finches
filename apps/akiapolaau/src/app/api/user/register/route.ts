import { NextRequest } from "next/server"
import { nanoid } from "nanoid"
import { RepositoryFactory } from "@/lib/repositories/repository-factory"
import { withJsonApi, jsonApiResponse } from "@/lib/jsonapi/middleware"
import { singleResourceResponse } from "@/lib/jsonapi/response-builder"

async function handler(req: NextRequest) {
  if (req.method === "POST") {
    const body = await req.json()

    const userRepo = RepositoryFactory.getUserRepository()

    // Check if user exists
    const existingEmail = await userRepo.findByEmail(body.email)
    if (existingEmail) {
      throw new Error("El correo electrónico ya está registrado")
    }

    const existingUsername = await userRepo.findByUsername(body.username)
    if (existingUsername) {
      throw new Error("El nombre de usuario ya está en uso")
    }

    // Create user
    const userId = nanoid()
    const user = {
      id: userId,
      email: body.email,
      username: body.username,
      password: body.password, // In production, hash this
      name: body.name,
      curp: body.curp,
      rfc: body.rfc,
      dateOfBirth: body.dateOfBirth,
      gender: body.gender,
      entity: body.entity,
      bankAccount: body.bankAccount,
      nationality: body.nationality,
      residenceCountry: body.residenceCountry,
      securityQuestions: [
        {
          question: body.securityQuestion1,
          answer: body.securityAnswer1,
        },
        {
          question: body.securityQuestion2,
          answer: body.securityAnswer2,
        },
      ],
      contractNumber: `CT-${new Date().getFullYear()}-${userId.slice(0, 6)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    await userRepo.create(user)

    // Create empty portfolio
    const portfolioRepo = RepositoryFactory.getPortfolioRepository()
    await portfolioRepo.create({
      id: nanoid(),
      userId,
      totalBalance: 0,
      totalInvested: 0,
      totalGain: 0,
      gainPercentage: 0,
      investments: [],
      updatedAt: new Date().toISOString(),
    })

    return jsonApiResponse(
      singleResourceResponse("user", user.id, {
        username: user.username,
        email: user.email,
        name: user.name,
        contractNumber: user.contractNumber,
      }),
      201
    )
  }

  throw new Error("Method not allowed")
}

export const POST = withJsonApi(handler)

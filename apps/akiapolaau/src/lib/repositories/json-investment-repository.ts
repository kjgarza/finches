import path from "path"
import { Investment } from "@repo/utils"
import { BaseRepository } from "./base-repository"

export class JsonInvestmentRepository extends BaseRepository<Investment> {
  protected filePath: string

  constructor() {
    super()
    this.filePath = path.join(process.cwd(), "data", "investments.json")
  }

  async findByUserId(userId: string): Promise<Investment[]> {
    return await this.findBy((investment) => investment.userId === userId)
  }

  async findActiveByUserId(userId: string): Promise<Investment[]> {
    return await this.findBy(
      (investment) =>
        investment.userId === userId && investment.status === "active"
    )
  }

  async findMaturedByUserId(userId: string): Promise<Investment[]> {
    return await this.findBy(
      (investment) =>
        investment.userId === userId && investment.status === "matured"
    )
  }
}

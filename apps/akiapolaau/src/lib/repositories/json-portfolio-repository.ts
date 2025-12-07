import path from "path"
import { Portfolio } from "@repo/utils"
import { BaseRepository } from "./base-repository"

export class JsonPortfolioRepository extends BaseRepository<Portfolio> {
  protected filePath: string

  constructor() {
    super()
    this.filePath = path.join(process.cwd(), "data", "portfolios.json")
  }

  async findByUserId(userId: string): Promise<Portfolio | null> {
    const portfolios = await this.findBy((portfolio) => portfolio.userId === userId)
    return portfolios[0] || null
  }
}

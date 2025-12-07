import { JsonUserRepository } from "./json-user-repository"
import { JsonInvestmentRepository } from "./json-investment-repository"
import { JsonPortfolioRepository } from "./json-portfolio-repository"
import { JsonRecurringSavingRepository } from "./json-recurring-saving-repository"

export const RepositoryFactory = {
  getUserRepository: () => new JsonUserRepository(),
  getInvestmentRepository: () => new JsonInvestmentRepository(),
  getPortfolioRepository: () => new JsonPortfolioRepository(),
  getRecurringSavingRepository: () => new JsonRecurringSavingRepository(),
}

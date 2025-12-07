import path from "path"
import { RecurringSaving } from "@repo/utils"
import { BaseRepository } from "./base-repository"

export class JsonRecurringSavingRepository extends BaseRepository<RecurringSaving> {
  protected filePath: string

  constructor() {
    super()
    this.filePath = path.join(process.cwd(), "data", "recurring-savings.json")
  }

  async findByUserId(userId: string): Promise<RecurringSaving[]> {
    return await this.findBy((saving) => saving.userId === userId)
  }

  async findActiveByUserId(userId: string): Promise<RecurringSaving[]> {
    return await this.findBy(
      (saving) => saving.userId === userId && saving.isActive
    )
  }
}

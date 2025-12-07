import path from "path"
import { User } from "@repo/utils"
import { BaseRepository } from "./base-repository"

export class JsonUserRepository extends BaseRepository<User> {
  protected filePath: string

  constructor() {
    super()
    this.filePath = path.join(process.cwd(), "data", "users.json")
  }

  async findByEmail(email: string): Promise<User | null> {
    const users = await this.findBy((user) => user.email === email)
    return users[0] || null
  }

  async findByUsername(username: string): Promise<User | null> {
    const users = await this.findBy((user) => user.username === username)
    return users[0] || null
  }

  async findByCurp(curp: string): Promise<User | null> {
    const users = await this.findBy((user) => user.curp === curp)
    return users[0] || null
  }
}

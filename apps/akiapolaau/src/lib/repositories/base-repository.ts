import { promises as fs } from "fs"
import path from "path"

export abstract class BaseRepository<T extends { id: string }> {
  protected abstract filePath: string

  protected async readData(): Promise<T[]> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8")
      return JSON.parse(data)
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        return []
      }
      throw error
    }
  }

  protected async writeData(data: T[]): Promise<void> {
    const dir = path.dirname(this.filePath)
    await fs.mkdir(dir, { recursive: true })
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8")
  }

  async findById(id: string): Promise<T | null> {
    const data = await this.readData()
    return data.find((item) => item.id === id) || null
  }

  async findAll(): Promise<T[]> {
    return await this.readData()
  }

  async findBy(predicate: (item: T) => boolean): Promise<T[]> {
    const data = await this.readData()
    return data.filter(predicate)
  }

  async create(item: T): Promise<T> {
    const data = await this.readData()
    data.push(item)
    await this.writeData(data)
    return item
  }

  async update(id: string, updates: Partial<T>): Promise<T | null> {
    const data = await this.readData()
    const index = data.findIndex((item) => item.id === id)
    
    if (index === -1) {
      return null
    }
    
    data[index] = { ...data[index], ...updates } as T
    await this.writeData(data)
    return data[index]
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.readData()
    const filteredData = data.filter((item) => item.id !== id)
    
    if (filteredData.length === data.length) {
      return false
    }
    
    await this.writeData(filteredData)
    return true
  }
}

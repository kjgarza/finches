export interface JsonApiResource {
  type: string
  id: string
  attributes: Record<string, any>
  relationships?: Record<string, {
    data: { type: string; id: string } | { type: string; id: string }[]
  }>
}

export interface JsonApiDocument {
  data: JsonApiResource | JsonApiResource[] | null
  included?: JsonApiResource[]
  meta?: Record<string, any>
  links?: {
    self?: string
    first?: string
    last?: string
    prev?: string
    next?: string
  }
}

export interface JsonApiError {
  id?: string
  status: string
  code?: string
  title: string
  detail?: string
  source?: {
    pointer?: string
    parameter?: string
  }
}

export interface JsonApiErrorDocument {
  errors: JsonApiError[]
}

export interface JsonApiMeta {
  total?: number
  page?: number
  perPage?: number
  [key: string]: any
}

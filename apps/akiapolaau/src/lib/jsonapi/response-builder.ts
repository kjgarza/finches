import { JsonApiDocument, JsonApiResource, JsonApiErrorDocument, JsonApiError, JsonApiMeta } from "./types"

export function successResponse(
  data: JsonApiResource | JsonApiResource[] | null,
  meta?: JsonApiMeta
): JsonApiDocument {
  const response: JsonApiDocument = { data }
  if (meta) {
    response.meta = meta
  }
  return response
}

export function errorResponse(errors: JsonApiError[]): JsonApiErrorDocument {
  return { errors }
}

export function paginatedResponse(
  data: JsonApiResource[],
  total: number,
  page: number = 1,
  perPage: number = 10,
  baseUrl?: string
): JsonApiDocument {
  const totalPages = Math.ceil(total / perPage)
  
  const response: JsonApiDocument = {
    data,
    meta: {
      total,
      page,
      perPage,
      totalPages,
    },
  }

  if (baseUrl) {
    response.links = {
      self: `${baseUrl}?page=${page}&perPage=${perPage}`,
    }
    
    if (page > 1) {
      response.links.first = `${baseUrl}?page=1&perPage=${perPage}`
      response.links.prev = `${baseUrl}?page=${page - 1}&perPage=${perPage}`
    }
    
    if (page < totalPages) {
      response.links.next = `${baseUrl}?page=${page + 1}&perPage=${perPage}`
      response.links.last = `${baseUrl}?page=${totalPages}&perPage=${perPage}`
    }
  }

  return response
}

export function singleResourceResponse(
  type: string,
  id: string,
  attributes: Record<string, any>
): JsonApiDocument {
  return successResponse({
    type,
    id,
    attributes,
  })
}

export function multiResourceResponse(
  type: string,
  items: Array<{ id: string; [key: string]: any }>
): JsonApiDocument {
  const resources: JsonApiResource[] = items.map((item) => {
    const { id, ...attributes } = item
    return {
      type,
      id,
      attributes,
    }
  })
  return successResponse(resources)
}

import { NextRequest, NextResponse } from "next/server"
import { handleError } from "./error-handler"
import { errorResponse } from "./response-builder"

export type ApiHandler = (
  req: NextRequest,
  context?: any
) => Promise<NextResponse> | NextResponse

export function withJsonApi(handler: ApiHandler): ApiHandler {
  return async (req: NextRequest, context?: any) => {
    try {
      const response = await handler(req, context)
      
      // Add JSONAPI content type if not already set
      if (!response.headers.get("content-type")) {
        response.headers.set("content-type", "application/vnd.api+json")
      }
      
      return response
    } catch (error) {
      const { errors, status } = handleError(error)
      
      return NextResponse.json(errorResponse(errors), {
        status,
        headers: {
          "content-type": "application/vnd.api+json",
        },
      })
    }
  }
}

export function jsonApiResponse(data: any, status: number = 200): NextResponse {
  return NextResponse.json(data, {
    status,
    headers: {
      "content-type": "application/vnd.api+json",
    },
  })
}

import { JsonApiError } from "./types"
import { ZodError } from "zod"

export function handleError(error: unknown): { errors: JsonApiError[]; status: number } {
  console.error("API Error:", error)

  if (error instanceof ZodError) {
    return {
      errors: error.errors.map((err) => ({
        status: "400",
        title: "Validation Error",
        detail: err.message,
        source: {
          pointer: `/data/attributes/${err.path.join("/")}`,
        },
      })),
      status: 400,
    }
  }

  if (error instanceof Error) {
    if (error.message.includes("not found") || error.message.includes("Not found")) {
      return {
        errors: [
          {
            status: "404",
            title: "Not Found",
            detail: error.message,
          },
        ],
        status: 404,
      }
    }

    if (error.message.includes("already exists") || error.message.includes("duplicate")) {
      return {
        errors: [
          {
            status: "409",
            title: "Conflict",
            detail: error.message,
          },
        ],
        status: 409,
      }
    }

    if (error.message.includes("unauthorized") || error.message.includes("Unauthorized")) {
      return {
        errors: [
          {
            status: "401",
            title: "Unauthorized",
            detail: error.message,
          },
        ],
        status: 401,
      }
    }

    if (error.message.includes("forbidden") || error.message.includes("Forbidden")) {
      return {
        errors: [
          {
            status: "403",
            title: "Forbidden",
            detail: error.message,
          },
        ],
        status: 403,
      }
    }

    return {
      errors: [
        {
          status: "400",
          title: "Bad Request",
          detail: error.message,
        },
      ],
      status: 400,
    }
  }

  return {
    errors: [
      {
        status: "500",
        title: "Internal Server Error",
        detail: "An unexpected error occurred",
      },
    ],
    status: 500,
  }
}

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

const devMode = process.env.DEV_MODE === "true"

export const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard")
      const isOnApi = nextUrl.pathname.startsWith("/api/user")

      if (devMode) {
        return true
      }

      if (isOnDashboard || isOnApi) {
        if (isLoggedIn) return true
        return false
      }

      return true
    },
    async session({ session, token }) {
      if (devMode && !session.user) {
        return {
          ...session,
          user: {
            id: "dev-user",
            email: "maria.lopez@example.com",
            name: "María López García",
          },
        }
      }
      
      if (token.sub) {
        session.user.id = token.sub
      }
      
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const nextAuthResult = NextAuth(authConfig)

export const handlers = nextAuthResult.handlers
export const auth = nextAuthResult.auth
export const signIn: typeof nextAuthResult.signIn = nextAuthResult.signIn
export const signOut = nextAuthResult.signOut

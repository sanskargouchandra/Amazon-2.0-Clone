import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0"
import GoogleProvider from "next-auth/providers/google"


export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
});


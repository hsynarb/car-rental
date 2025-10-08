import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import z from "zod";
import postgres from "postgres";
import bycrypt from "bcrypt";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
async function getUser(phone: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE phone=${phone}`;
    return user[0];
  } catch (error) {
    console.error("failed to fetch user", error);
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ phone: z.string(), otp: z.string() })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { phone, otp } = parsedCredentials.data;
          const user = await getUser(phone);
          if (!user) return null;

          const passwordMatch = await bycrypt.compare(otp, user.otp);
          if (passwordMatch) return user;
        }
        console.log("invalid credentials");
        return null;
      },
    }),
  ],
});

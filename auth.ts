import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { db } from './lib/database.connection';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { getUserById } from './actions/user.action';
import { UserRole } from '@prisma/client';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	adapter: PrismaAdapter(db), // prisma adapter is supported on non edge
	pages: {
		signIn: '/auth/signin',
		error: '/auth/error',
	},
	callbacks: {
		async session({ token, session }) {
			if (!token.sub) return null;
			if (token.sub && session.user) {
				// mapping token.sub in session's user id
				session.user.id = token.sub;
			}
			if (token.role && session.user) {
				session.user.role = token.role as UserRole; // stored it in session, now it can be accessed in fronted
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token; // logged out user
			const exisitingUser = await getUserById(token.sub);

			if (!exisitingUser) return {}; // user not found
			token.role = exisitingUser.role || 'USER';

			// const existingAccount = await getUserById(exisitingUser.id);
			return token;
		},
	},
	session: {
		maxAge: 60 * 60, // 1 hour
		strategy: 'jwt',
	},
	...authConfig,
});

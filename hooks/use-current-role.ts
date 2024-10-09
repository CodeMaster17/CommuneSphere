// This hook is created to fetch the role of the current user
import { auth } from '@/auth';

export const useCurrentRole = async () => {
	const session = await auth();

	return session?.user.role;
};

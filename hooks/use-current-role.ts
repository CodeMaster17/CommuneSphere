// This hook is created to fetch the role of the current user
import { useSession } from 'next-auth/react';

export const useCurrentRole = () => {
	const session = useSession();

	return session.data?.user?.role;
};

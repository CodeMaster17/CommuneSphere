import { useSession } from 'next-auth/react';

export const GetCurrentUser = () => {
	const { data: session, status } = useSession();

	return { user: session?.user, status };
};

import { countAllUsers } from '@/actions/user.action';
import { toast } from 'sonner';

export async function getAllUsersCount(): Promise<number | null> {
	try {
		const count = await countAllUsers();

		return count;
	} catch (error) {
		toast.error('Failed to fetch member count');

		return null;
	}
}

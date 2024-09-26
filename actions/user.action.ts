'use server';
import { useDisplayYear } from '@/hooks/use-display-data';
import { db } from '@/lib/database.connection';
import { revalidatePath } from 'next/cache';

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.user.findUnique({ where: { email } });

		return user;
	} catch {
		return null;
	}
};

export const getUserById = async (id: string) => {
	try {
		const user = await db.user.findUnique({ where: { id } });

		return user;
	} catch {
		return null;
	}
};

// get all users
export const getAllUsers = async () => {
	try {
		const users = await db.user.findMany();

		return users;
	} catch {
		return null;
	}
};

// to count all members
export const countAllUsers = async () => {
	try {
		const count = await db.user.count();

		return count;
	} catch {
		return null;
	}
};

export async function getServerSideProps() {
	const data = await getAllUsers();

	// Only returning the required fields
	const processedData =
		data?.map((user, index) => {
			return {
				sno: index + 1,
				id: user.id,
				name: user.name,
				email: user.email,
				role: user.role,
				position: user.position,
				current_year: user.current_year,
				year_of_joining:
					(useDisplayYear(user.year_of_joining) as '2021') ||
					'2022' ||
					'2023' ||
					'2024' ||
					'2025' ||
					null,
			};
		}) || [];

	return { props: { data: processedData } };
}

// functtion to delete user from the database
export const deleteUser = async (id: string) => {
	try {
		await db.user.delete({ where: { id } });
		revalidatePath('/dashboard/members');
	} catch {
		return null;
	}
};

// function to count number of female members
export const countFemaleMembers = async () => {
	try {
		const count = await db.user.count({
			where: { gender: { equals: 'female' } },
		});

		return count;
	} catch {
		return null;
	}
};

// function to count number of male members
export const countMaleMembers = async () => {
	try {
		const count = await db.user.count({
			where: { gender: { equals: 'male' } },
		});

		return count;
	} catch {
		return null;
	}
};

// update the image of the user
export async function updateProfileImage(userId: string, imageUrl: string) {
	if (!userId || !imageUrl) {
		throw new Error('Missing required data');
	}

	try {
		// Update the user's profile with the new image URL
		await db.user.update({
			where: { id: userId },
			data: { image: imageUrl },
		});

		return { success: true, message: 'Profile image updated successfully' };
	} catch (error) {
		console.error('Error updating profile image:', error);
		throw new Error('Internal server error');
	}
}

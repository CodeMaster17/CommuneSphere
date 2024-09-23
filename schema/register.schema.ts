import {
	ERR_MSG_EMAIL_REQUIRED,
	ERR_MSG_PWD_REQUIRED,
	ERR_NAME_REQUIRED,
} from '@/constants/error.message';
import { ROLE_ADMIN, ROLE_USER } from '@/constants/role.constant';
import { z } from 'zod';

export const RegisterSchema = z.object({
	name: z.string().min(1, {
		message: ERR_NAME_REQUIRED,
	}),
	email: z.string().email({
		message: ERR_MSG_EMAIL_REQUIRED,
	}),
	password: z.string().min(1, {
		message: ERR_MSG_PWD_REQUIRED,
	}),
	role: z.enum([ROLE_ADMIN, ROLE_USER]),
	roll_number: z.string().optional(),
	phone: z.string().optional(),
	current_year: z.enum(['First', 'Second', 'Third', 'Fourth']).optional(),
	branch: z
		.enum(['CSE', 'ECE', 'ME', 'CE', 'EE', 'IT', 'MCA', 'MBA'])
		.optional(),
	year_of_joining: z
		.enum(['Y_2020', 'Y_2021', 'Y_2022', 'Y_2023', 'Y_2024', 'Y_2025'])
		.optional(),
	position: z
		.enum([
			'Member',
			'Lead',
			'Vice_Lead',
			'Tech_Lead',
			'PR_Lead',
			'CR_Lead',
			'Executive',
			'Creative_Lead',
			'Design_Lead',
			'Ar_Lead',
			'Web_Lead',
			'App_Lead',
			'Vr_Lead',
		])
		.optional(),
	github: z.string().url({ message: 'Enter valid github link' }).optional(),
	linkedin: z
		.string()
		.url({ message: 'Enter valid linkedin link' })
		.optional(),
	instagram: z
		.string()
		.url({ message: 'Enter valid instagram link' })
		.optional(),
	twitter: z.string().url({ message: 'Enter valid twitter link' }).optional(),
	facebook: z
		.string()
		.url({ message: 'Enter valid facebook link' })
		.optional(),
	personal_email: z
		.string()
		.email({ message: 'Enter valid email' })
		.optional(),
	domain: z
		.enum([
			'web',
			'app',
			'cloud',
			'cyber',
			'ml',
			'video_editing',
			'graphics_designing',
			'content_writing',
			'marketing',
			'finance',
			'public_relations',
			'creative',
			'design',
		])
		.optional(),
	gender: z.enum(['male', 'female', 'other']),
});

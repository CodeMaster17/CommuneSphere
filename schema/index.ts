import {
	ERR_MSG_EMAIL_REQUIRED,
	ERR_MSG_PWD_REQUIRED,
} from '@/constants/error.message';
import * as z from 'zod';

export const LoginSchema = z.object({
	email: z.string().email({
		message: ERR_MSG_EMAIL_REQUIRED,
	}),
	password: z.string().min(1, {
		message: ERR_MSG_PWD_REQUIRED,
	}),
});


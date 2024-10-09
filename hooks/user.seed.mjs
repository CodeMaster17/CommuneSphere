'use strict';
/* eslint-disable camelcase */
// @ts-nocheck
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Generate random role
const getRandomRole = () => {
	const roles = ['ADMIN', 'USER'];

	return roles[Math.floor(Math.random() * roles.length)];
};

// Generate random position
const getRandomPosition = () => {
	const positions = [
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
	];

	return positions[Math.floor(Math.random() * positions.length)];
};

// Generate random year of joining
const getRandomYearOfJoining = () => {
	const years = [
		'Y_2020',
		'Y_2021',
		'Y_2022',
		'Y_2023',
		'Y_2024',
		'Y_2025',
	];

	return years[Math.floor(Math.random() * years.length)];
};

// Generate random branch
const getRandomBranch = () => {
	const branches = [
		'CSE',
		'ECE',
		'ME',
		'CE',
		'EE',
		'IT',
		'MCA',
		'MBA',
	];

	return branches[Math.floor(Math.random() * branches.length)];
};

// Generate random phone number
const getRandomPhoneNumber = () => {
	return faker.phone.number({ style: 'national' })
};

// Generate random gender
const getRandomGender = () => {
	return faker.helpers.arrayElement(['male', 'female', 'other']);
};

// Generate random email
const getRandomEmail = () => {
	return faker.internet.email();
};

// Generate random password
const getRandomPassword = (length) => {
	return faker.internet.password(length);
};

// Generate random roll number
const getRandomRollNumber = () => {
	return faker.string.uuid().slice(0, 8).toUpperCase();
};

async function seed() {
	console.log('Deleting existing users...');
	await prisma.user.deleteMany();
	console.log('Seeding users...');

	const users = [];


	for (let i = 0; i < 10; i++) {
		users.push({
			name: faker.person.fullName(),
			email: getRandomEmail(),
			password: getRandomPassword(10),
			role: getRandomRole(),
			roll_number: getRandomRollNumber(),
			phone: getRandomPhoneNumber(),
			current_year: faker.helpers.arrayElement(['First', 'Second', 'Third', 'Fourth']),
			branch: getRandomBranch(),
			year_of_joining: getRandomYearOfJoining(),
			position: getRandomPosition(),
			github: faker.internet.url(),
			linkedin: faker.internet.url(),
			instagram: faker.internet.url(),
			twitter: faker.internet.url(),
			facebook: faker.internet.url(),
			personal_email: getRandomEmail(),
			domain: faker.helpers.arrayElement(['web', 'app', 'cloud', 'cyber', 'ml', 'video_editing', 'graphics_designing', 'content_writing', 'marketing', 'finance', 'public_relations', 'creative', 'design']),
			gender: getRandomGender(),
		});
	}

	await prisma.user.createMany({
		data: users,
	});

	console.log('Seeding complete!');
}

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

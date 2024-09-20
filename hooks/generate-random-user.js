const{ PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Function to generate random user data
function generateRandomUser() {
  const userRoles = ["ADMIN", "USER"];
  const branches = ["CSE", "ECE", "ME", "CE", "EE", "IT", "MCA", "MBA"];
  const positions = [
    "Member",
    "Lead",
    "Vice_Lead",
    "Tech_Lead",
    "PR_Lead",
    "CR_Lead",
    "Executive",
    "Creative_Lead",
    "Design_Lead",
    "Ar_Lead",
    "Web_Lead",
    "App_Lead",
    "Vr_Lead",
  ];
  const yearsOfJoining = [
    "Y_2020",
    "Y_2021",
    "Y_2022",
    "Y_2023",
    "Y_2024",
    "Y_2025",
  ];
  const currentYearsOfStudent = ["First", "Second", "Third", "Fourth"];
  const domains = [
    "web",
    "app",
    "cloud",
    "cyber",
    "ml",
    "video_editing",
    "graphics_designing",
    "content_writing",
    "marketing",
    "finance",
    "public_relations",
    "creative",
    "design",
  ];
  const genders = ["male", "female", "other"];

  const randomUser = {
    name: `User ${Math.floor(Math.random() * 1000)}`,
    email: `user${Math.floor(Math.random() * 1000)}@example.com`,
    password: "password123", // For simplicity, use a static password. In a real scenario, hash the password.
    role: userRoles[Math.floor(Math.random() * userRoles.length)],
    branch: branches[Math.floor(Math.random() * branches.length)],
    year_of_joining:
      yearsOfJoining[Math.floor(Math.random() * yearsOfJoining.length)],
    position: positions[Math.floor(Math.random() * positions.length)],
    current_year:
      currentYearsOfStudent[
        Math.floor(Math.random() * currentYearsOfStudent.length)
      ],
    domain: domains[Math.floor(Math.random() * domains.length)],
    gender: genders[Math.floor(Math.random() * genders.length)],
    phone: Math.floor(Math.random() * 10000000000).toString(),
    roll_number: Math.floor(Math.random() * 1000000).toString(),
    github: "link.com",
    linkedin: "link.com",
    instagram: "link.com",
    twitter: "link.com",
    facebook: "link.com",
    personal_email: "link.com",
  };

  return randomUser;
}

// Function to insert a random user into the database
async function insertRandomUser() {
  const randomUser = generateRandomUser();
  try {
    const result = await prisma.user.create({
      data: randomUser,
    });
    console.log("User created:", result);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Insert a random user
insertRandomUser();



export type SideNavItem = {
  name: string;
  path: string;
  iconURL?: string;
};

export type MembersDataItem = {
  name: string;
  path: string;
  iconURL?: string;
  position: string;
  kiit_email_id: string;
  personal_email_id: string;
  phone: number;
  current_year: number;
  branch: string;
  roll_number: number;
  type: string;
  portfolio_website: string;
  github_URL: string;
  instagram_URL: string;
  linkedIn_URL: string;
  facebook_URL: string;
  behance_URL: string;
  dribble_URL: string;
  youtube_URL: string;
  x_URL: string;
  drive_URL: string;
};

export interface Sponsors {
  name: string;
  logo_URL: string;
  website_URL: string;
  description: string;
  signed_by: string;
  phone: number;
  email: string;
  sponsor_field: "education";
  signed_date?: string; // Make these properties optional
  end_date?: string;
  is_active?: boolean;
}

// export interface Events {
//   name: string;
//   location: string;
//   description: string;
//   event_website_thumbnail: string;
//   event_domain:
//     | "all"
//     | "web"
//     | "app"
//     | "cloud"
//     | "cyber"
//     | "ml"
//     | "video_editing"
//     | "graphics_designing"
//     | "content_writing"
//     | "marketing"
//     | "finance"
//     | "public_relations"
//     | "creative"
//     | "design";
//   attendees: number;
//   registrations: number;
//   script_link?: string;
//   drive_link?: string;
//   time: string;
//   duration: number;
//   is_completed: boolean; // for wheather the event is completed or not
//   is_published: boolean; // for wheather the event is published on website or not
// }

export type ModalItem = {
  value: string;
  topic: string;
  description: string;
};


export type Events = {
  id: string;
  name: string;
  date: string;
  target_year: "First" | "Second" | "Third" | "Fourth";
  duration?: number | null;
  actual_participants: string;
  expected_participants?: string;
  location?: string;
  event_thumbnail?: string;
};

export interface IUser {
  id: string;
  name?: string; // Name of the member, optional
  email: string;
  password: string;
  role: UserRole; // Enum type
  image?: string; // Optional profile image
  roll_number?: string; // Optional roll number
  phone?: string; // Optional phone number
  current_year?: CurrentYearOfStudent; // Enum type for year of the student
  branch: Branch; // Enum type for branch
  year_of_joining: YearOfJoining; // Enum type for year of joining
  position: Position; // Enum type for position
  github?: string; // Optional GitHub URL
  linkedin?: string; // Optional LinkedIn URL
  twitter?: string; // Optional Twitter URL
  instagram?: string; // Optional Instagram URL
  facebook?: string; // Optional Facebook URL
  personal_email?: string; // Optional personal email
  domain: Domain; // Enum type for domain
  event?: Event[]; // Array of events the user is associated with
  gender: Gender; // Enum type for gender
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER"
}

export enum Branch {
  CSE = "CSE",
  ECE = "ECE",
  ME = "ME",
  CE = "CE",
  EE = "EE",
  IT = "IT",
  MCA = "MCA",
  MBA = "MBA"
}

export enum Position {
  Member = "Member",
  Lead = "Lead",
  Vice_Lead = "Vice_Lead",
  Tech_Lead = "Tech_Lead",
  PR_Lead = "PR_Lead",
  CR_Lead = "CR_Lead",
  Executive = "Executive",
  Creative_Lead = "Creative_Lead",
  Design_Lead = "Design_Lead",
  Ar_Lead = "Ar_Lead",
  Web_Lead = "Web_Lead",
  App_Lead = "App_Lead",
  Vr_Lead = "Vr_Lead"
}

export enum YearOfJoining {
  Y_2020 = "Y_2020",
  Y_2021 = "Y_2021",
  Y_2022 = "Y_2022",
  Y_2023 = "Y_2023",
  Y_2024 = "Y_2024",
  Y_2025 = "Y_2025"
}

export enum CurrentYearOfStudent {
  First = "First",
  Second = "Second",
  Third = "Third",
  Fourth = "Fourth"
}

export enum Domain {
  Web = "web",
  App = "app",
  Cloud = "cloud",
  Cyber = "cyber",
  ML = "ml",
  VideoEditing = "video_editing",
  GraphicsDesigning = "graphics_designing",
  ContentWriting = "content_writing",
  Marketing = "marketing",
  Finance = "finance",
  PublicRelations = "public_relations",
  Creative = "creative",
  Design = "design"
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

// Example Event interface (optional, based on your schema)
export interface IEvent {
  id: string;
  name: string;
  date: string;
  target_year: CurrentYearOfStudent;
  duration?: number;
  expected_participants?: string;
  actual_participants?: string;
  location?: string;
  event_thumbnail?: string;
  created_by?: IUser;
  created_at: Date;
  updated_at?: Date;
}
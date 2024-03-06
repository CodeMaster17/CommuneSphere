

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


export interface Events {
  id: string;
  name: string;
  date: string;
  target_year: 
          |"First"
          | "Second"
          | "Third"
          | "Fourth";
  duration: number | null;
  expected_participants: string;
  actual_participants: string;
  location: string | null;
  event_thumbnail: string | null;
  created_at: Date;
  updated_at: Date; 
}
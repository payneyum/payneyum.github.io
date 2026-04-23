import { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  bio: string;
  education: string;
  profession: string;
  offersSkills: string[];
  wantsSkills: string[];
  phone: string;
  subscriptionPlan: string;
  credits: number;
  profileComplete: boolean;
}

interface Message {
  id: string;
  fromId: string;
  toId: string;
  text: string;
  timestamp: Date;
}

interface ForumPost {
  id: string;
  title: string;
  author: string;
  authorInitials: string;
  timestamp: string;
  category: string;
  content?: string;
}

interface AppContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  users: User[];
  addUser: (user: User) => void;
  messages: Message[];
  addMessage: (message: Message) => void;
  forumPosts: ForumPost[];
  addForumPost: (post: ForumPost) => void;
  selectedChat: User | null;
  setSelectedChat: (user: User | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedChat, setSelectedChat] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      fromId: "user2",
      toId: "user1",
      text: "Hi! I'd love to learn 3D modeling from you.",
      timestamp: new Date("2026-04-23T10:30:00"),
    },
  ]);

  const [forumPosts, setForumPosts] = useState<ForumPost[]>([
    {
      id: "1",
      title: "Looking for a Spanish tutor - Can teach Web Development",
      author: "Marco Santos",
      authorInitials: "MS",
      timestamp: "2h ago",
      category: "Skill Exchange",
    },
  ]);

  const [users, setUsers] = useState<User[]>([
    {
      id: "user1", name: "Avenido Jimsol", email: "jimsol@gmail.com", age: 28,
      bio: "Experienced professional looking to exchange skills. Passionate about teaching and learning new abilities.",
      education: "Bachelor of Fine Arts, University of the Philippines",
      profession: "Digital Artist",
      offersSkills: ["Illustration", "Concept Art", "Logo Design"],
      wantsSkills: ["3D Modeling", "Animation", "UI Design"],
      phone: "+639176543210",
      subscriptionPlan: "Deluxe",
      credits: 45,
      profileComplete: true,
    },
      {
    id: "user2",
    name: "Basty Devio",
    email: "basty02@gmail.com",
    age: 26,
    bio: "Backend-heavy developer. I have great logic but my apps look dated; I need a designer to teach me modern UX principles.",
    education: "BS Computer Science, UP Diliman",
    profession: "Backend Developer",
    offersSkills: ["RESTful APIs", "Express.js", "System Design"],
    wantsSkills: ["UX Research", "Figma Auto-layout", "Color Theory"],
    phone: "+639123456789",
    subscriptionPlan: "Premium",
    credits: 31,
    profileComplete: true,
    },
    {
      id: "user3",
      name: "Balingao Haydie",
      email: "balingao1245@gmail.com",
      age: 25,
      bio: "Full-stack developer specializing in React and Node.js. Want to learn music production.",
      education: "BS Computer Science, Ateneo de Manila",
      profession: "Full-stack Developer",
      offersSkills: ["Programming", "Web Development", "Database Design"],
      wantsSkills: ["Music Production", "Audio Engineering", "Guitar"],
      phone: "+639192345678",
      subscriptionPlan: "Standard",
      credits: 28,
      profileComplete: true,
    },
    {
      id: "user3",
      name: "Brusola Christian",
      email: "christian@gmail.com",
      age: 21,
      bio: "Graphic designer with 5 years of experience. Love to cook and want to improve my culinary skills.",
      education: "BS Graphic Design, De La Salle University",
      profession: "Graphic Designer",
      offersSkills: ["Graphic Design", "Adobe Photoshop", "Branding"],
      wantsSkills: ["Cooking", "Baking", "Recipe Development"],
      phone: "+639181234567",
      subscriptionPlan: "Premium",
      credits: 32,
      profileComplete: true,
    },
  {
    id: "user4",
    name: "Canete, Lei",
    email: "lei@example.com",
    age: 21,
    bio: "Aspiring Professional Player. I can teach high-level mechanics. I need help building a professional brand and streaming presence.",
    education: "Student, University of the East",
    profession: "Esports Player",
    offersSkills: ["Mechanical Skill Drills", "Game Strategy", "Mental Performance"],
    wantsSkills: ["Personal Branding", "Twitch Integration", "Video Editing"],
    phone: "+639151567547",
    subscriptionPlan: "Premium",
    credits: 16,
    profileComplete: true,
  },
  {
    id: "user5",
    name: "Delos Reyes",
    email: "delos@gmail.com",
    age: 29,
    bio: "Commercial Photographer. I want to add motion to my services and am seeking basic cinematography and color grading lessons.",
    education: "Bachelor of Arts in Multimedia Arts",
    profession: "Photographer",
    offersSkills: ["High-end Photo Retouching", "Studio Lighting", "Product Photography"],
    wantsSkills: ["DaVinci Resolve", "Frame Composition", "Video Editing"],
    phone: "+639100000003",
    subscriptionPlan: "Premium",
    credits: 9,
    profileComplete: true,
  },
  {
    id: "user6",
    name: "Denaga Kerby",
    email: "kerby@example.com",
    age: 20,
    bio: "Cybersecurity student. I can help with basic PC security and Linux. Looking for someone to help me strengthen my Python programming.",
    education: "BS IT Student, STI College",
    profession: "Cybersecurity Student",
    offersSkills: ["Linux Terminal Basics", "Network Security", "OS Hardening"],
    wantsSkills: ["Python for Automation", "Object Oriented Programming", "Git/GitHub"],
    phone: "+639151567547",
    subscriptionPlan: "Standard",
    credits: 10,
    profileComplete: true,
  },
  {
    id: "user6",
    name: "Fuentes Cheska",
    email: "cheska@gmail.com",
    age: 22,
    bio: "TikTok Content Strategist. I help small businesses go viral. Seeking motion graphics skills to increase my production value.",
    education: "BS Marketing, San Beda",
    profession: "Content Strategist",
    offersSkills: ["Short-form Video Trends", "Audience Engagement", "Scripting"],
    wantsSkills: ["After Effects", "Motion Design", "Adobe Audition"],
    phone: "+639533655428",
    subscriptionPlan: "Deluxe",
    credits: 21,
    profileComplete: true,
  },
  {
    id: "user7",
    name: "Hernandez Gian",
    email: "uhernandezgian@gmail.com",
    age: 24,
    bio: "Freelance UI Designer. I want to build my own designs, so I need to learn how to translate Figma files into clean React code.",
    education: "BS Information Technology, STI College",
    profession: "UI Designer",
    offersSkills: ["Mobile UI Design", "Design Systems", "Prototyping"],
    wantsSkills: ["Tailwind CSS", "React Hooks", "Webflow CMS"],
    phone: "+639533655428",
    subscriptionPlan: "Standard",
    credits: 20,
    profileComplete: true,
  },
  {
    id: "user8",
    name: "Jeffrey Urbano",
    email: "jeffrey@gmail.com",
    age: 22,
    bio: "Junior Frontend Developer. Looking to improve my design eye so I can become a more well-rounded Creative Technologist.",
    education: "BS Information Technology, FEU Tech",
    profession: "Frontend Developer",
    offersSkills: ["Semantic HTML", "CSS Flexbox/Grid", "JavaScript DOM"],
    wantsSkills: ["UI Design Basics", "Visual Hierarchy", "User Testing"],
    phone: "+639154321678",
    subscriptionPlan: "Standard",
    credits: 12,
    profileComplete: true,
  },
  {
    id: "user9",
    name: "Judah Paolo",
    email: "judah@gmail.com",
    age: 21,
    bio: "Esports Coach and Analyst. I want to start a YouTube channel for game analysis and need video editing and streaming setup help.",
    education: "Current Student, Mapua University",
    profession: "Esports Coach",
    offersSkills: ["Competitive Coaching", "VOD Analysis", "Tactical Strategy"],
    wantsSkills: ["Adobe Premiere Pro", "OBS Studio Setup", "YouTube SEO"],
    phone: "+639176543210",
    subscriptionPlan: "Premium",
    credits: 15,
    profileComplete: true,
  },
  {
    id: "user10",
    name: "Julian Vergara",
    email: "julian@gmail.com",
    age: 23,
    bio: "Product Designer. I focus on how things feel. I need to learn how to code prototypes to better communicate with engineering teams.",
    education: "BS Multimedia Arts, Benilde",
    profession: "Product Designer",
    offersSkills: ["User Journey Mapping", "Wireframing", "Figma Components"],
    wantsSkills: ["Basic React", "CSS Animations", "JavaScript Logic"],
    phone: "+639533655428",
    subscriptionPlan: "Premium",
    credits: 19,
    profileComplete: true,
  },
  {
    id: "user11",
    name: "Justine Fider",
    email: "justine@gmail.com",
    age: 24,
    bio: "App Developer focused on iOS/Android. Looking to learn how to integrate cloud-based backends for scalable mobile solutions.",
    education: "BS Computer Engineering, PLM",
    profession: "App Developer",
    offersSkills: ["Flutter Development", "Swift Basics", "App Store Publishing"],
    wantsSkills: ["Firebase Auth", "AWS Lambda", "NoSQL Databases"],
    phone: "+639198765432",
    subscriptionPlan: "Standard",
    credits: 10,
    profileComplete: true,
  },
  {
    id: "user12",
    name: "Micah Shaneal",
    email: "micah@gmail.com",
    age: 22,
    bio: "SEO Copywriter. I can write high-ranking articles. I want to learn the technical side of WordPress to manage my own niche sites.",
    education: "BA Journalism, UST",
    profession: "SEO Copywriter",
    offersSkills: ["Long-form Writing", "On-page SEO", "Email Marketing"],
    wantsSkills: ["WordPress Development", "Site Speed Optimization", "PHP Basics"],
    phone: "+639112233445",
    subscriptionPlan: "Standard",
    credits: 9,
    profileComplete: true,
  },
  {
    id: "user13",
    name: "Ronn Loyola",
    email: "ronn@example.com",
    age: 27,
    bio: "Audio Engineer for local podcasts. I want to learn digital illustration to design my own album and podcast covers.",
    education: "Diploma in Music Production",
    profession: "Audio Engineer",
    offersSkills: ["Podcast Editing", "Audio Clean-up", "Sound Design"],
    wantsSkills: ["Digital Painting", "Vector Art", "Photoshop Layouts"],
    phone: "+639151567547",
    subscriptionPlan: "Standard",
    credits: 13,
    profileComplete: true,
  },
  {
    id: "user14",
    name: "Shiena Tan",
    email: "shiena@example.com",
    age: 23,
    bio: "Travel Vlogger. I have great footage but need to learn professional storytelling through editing and thumbnail design to grow.",
    education: "BA Journalism Graduate",
    profession: "Travel Vlogger",
    offersSkills: ["Travel Storytelling", "On-camera Hosting", "Basic Photography"],
    wantsSkills: ["Advanced Video Editing", "YouTube Thumbnail Design", "Audience Analytics"],
    phone: "+639533535428",
    subscriptionPlan: "Standard",
    credits: 6,
    profileComplete: true,
  },
  {
    id: "user15",
    name: "Tanayer Harry",
    email: "harry@gmail.com",
    age: 24,
    bio: "Indie Game Developer. I handle the logic but struggle with aesthetics. Looking for 3D artists and UI designers for collaboration.",
    education: "BS EMC, iACADEMY",
    profession: "Game Developer",
    offersSkills: ["C# Programming", "Unity Physics", "Game Optimization"],
    wantsSkills: ["3D Environment Design", "UX for Games", "Sound FX"],
    phone: "+639176543210",
    subscriptionPlan: "Standard",
    credits: 14,
    profileComplete: true,
  },
  {
    id: "user15",
    name: "Sample wahh",
    email: "exp@gmail.com",
    age: 24,
    bio: "ano jayy.",
    education: "BS EMC, iACADEMY",
    profession: "Game Developer",
    offersSkills: ["C# Programming", "Unity Physics", "Game Optimization"],
    wantsSkills: ["3D Environment Design", "UX for Games", "Sound FX"],
    phone: "+639176543210",
    subscriptionPlan: "Standard",
    credits: 14,
    profileComplete: true,
    },
  ]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const addMessage = (message: Message) => {
    setMessages([...messages, message]);
  };

  const addForumPost = (post: ForumPost) => {
    setForumPosts([post, ...forumPosts]);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        addUser,
        messages,
        addMessage,
        forumPosts,
        addForumPost,
        selectedChat,
        setSelectedChat,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};


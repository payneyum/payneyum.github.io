import { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  bio: string;
  education: string;
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
      id: "user1",
      name: "Avenido Jimsol",
      email: "jimsol@gmail.com",
      age: 28,
      bio: "Experienced professional looking to exchange skills. Passionate about teaching and learning new abilities.",
      education: "Bachelor of Fine Arts, University of the Philippines",
      offersSkills: ["Illustration", "Concept Art", "Logo Design"],
      wantsSkills: ["3D Modeling", "Animation", "UI Design"],
      phone: "+639176543210",
      subscriptionPlan: "Deluxe",
      credits: 45,
      profileComplete: true,
    },
    {
      id: "user2",
      name: "Jane Doe",
      email: "jane@example.com",
      age: 25,
      bio: "Graphic designer with 5 years of experience. Love to cook and want to improve my culinary skills.",
      education: "BS Graphic Design, De La Salle University",
      offersSkills: ["Graphic Design", "Adobe Photoshop", "Branding"],
      wantsSkills: ["Cooking", "Baking", "Recipe Development"],
      phone: "+639181234567",
      subscriptionPlan: "Premium",
      credits: 32,
      profileComplete: true,
    },
    {
      id: "user3",
      name: "Carlos Reyes",
      email: "carlos@example.com",
      age: 30,
      bio: "Full-stack developer specializing in React and Node.js. Want to learn music production.",
      education: "BS Computer Science, Ateneo de Manila",
      offersSkills: ["Programming", "Web Development", "Database Design"],
      wantsSkills: ["Music Production", "Audio Engineering", "Guitar"],
      phone: "+639192345678",
      subscriptionPlan: "Standard",
      credits: 28,
      profileComplete: true,
    },
    {
      id: "user4",
      name: "Maria Santos",
      email: "maria@example.com",
      age: 27,
      bio: "Professional chef and food blogger. Looking to learn digital marketing.",
      education: "Culinary Arts Diploma, Center for Culinary Arts Manila",
      offersSkills: ["Cooking", "Baking", "Food Styling"],
      wantsSkills: ["Digital Marketing", "SEO", "Content Writing"],
      phone: "+639203456789",
      subscriptionPlan: "Deluxe",
      credits: 52,
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


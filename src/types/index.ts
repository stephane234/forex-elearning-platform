export interface User {
  id: string;
  email: string;
  displayName: string;
  purchasedCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  videoUrl: string;
  previewUrl: string;
  isAIGenerated: boolean;
  duration: string;
  topics: string[];
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
} 
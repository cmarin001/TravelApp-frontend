import { User as FirebaseUser } from "firebase/auth";

interface HomeProps {
  user: FirebaseUser | null;
}

interface LogInProps {
  setUser: (user: FirebaseUser | null) => void;
}

export type { HomeProps, LogInProps };

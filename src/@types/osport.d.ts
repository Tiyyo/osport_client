export interface User {
  id: string;
  name: string;
  password: string;
  // email: string;
  authToken?: string;
}

export interface LogInProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

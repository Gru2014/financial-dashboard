import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { fetchUser } from '../services/fetchUser';
import { User } from '../types/types';


interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (userData: Partial<User>) => void;
  logout: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const userData: User = await fetchUser();
        setUser({
          id: userData.id,
          yourName: userData.yourName,
          email: userData.email,
          userName: userData.userName,
          dateOfBirth: userData.dateOfBirth,
          presentAddress: userData.presentAddress,
          permanentAddress: userData.permanentAddress,
          city: userData.city,
          country: userData.country,
          postalCode: userData.postalCode,
          password: userData.password,
          avatar: userData.avatar,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeUser();
  }, []);

  const updateUser = (userData: Partial<User>) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      return { ...prevUser, ...userData };
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    setUser,
    updateUser,
    logout,
    isLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

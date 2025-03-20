import { User } from "../types/types";
import { mockUser } from "../utils/mockData";

export const fetchUser = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUser), 0);
  });
};
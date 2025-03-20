export interface FormData {
  yourName: string;
  email: string;
  dateOfBirth: string;
  permanentAddress: string;
  postalCode: string;
  userName: string;
  password: string;
  presentAddress: string;
  city: string;
  country: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface User {
  id: string;
  yourName: string;
  email: string;
  dateOfBirth: string;
  permanentAddress: string;
  postalCode: string;
  userName: string;
  password: string;
  presentAddress: string;
  city: string;
  country: string;
  avatar?: string;
}

export interface Card {
  id: string;
  userId: string;
  balance: number;
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  variant: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: string;
  amount: number;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  iconColor: string;
}

export interface WeeklyActivity {
  id: string;
  userId: string;
  day: string;
  deposit: number;
  withdraw: number;
}

export interface ExpenseStats {
  id: string;
  userId: string;
  name: string;
  value: number;
  color: string;
}

export interface QuickTransfer {
  id: string;
  userId: string;
  name: string;
  role: string;
  image: string;
}

export interface BalanceHistory {
  id: string;
  userId: string;
  month: string;
  value: number;
}

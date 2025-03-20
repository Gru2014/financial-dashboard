import { CardIcon, PaypalIcon, UserIcon } from "../components/icons";
import {
  BalanceHistory,
  Card,
  ExpenseStats,
  QuickTransfer,
  Transaction,
  User,
  WeeklyActivity,
} from "../types/types";

export const mockUser: User = {
  id: "1",
  yourName: "Charlene Reed",
  email: "charlenereed@gmail.com",
  dateOfBirth: "25 January 1990",
  permanentAddress: "San Jose, California, USA",
  postalCode: "45962",
  userName: "Charlene Reed",
  password: "12345678",
  presentAddress: "San Jose, California, USA",
  city: "San Jose",
  country: "USA",
  avatar: "/avatars/Avatar1.png",
};

export const mockCards: Card[] = [
  {
    id: "1",
    userId: "1",
    balance: 5750.83,
    cardNumber: "4562 1122 4594 7852",
    cardHolder: "John Doe",
    validThru: "05/24",
    variant: "dark",
  },
  {
    id: "2",
    userId: "1",
    balance: 3250.45,
    cardNumber: "4562 1122 4594 7852",
    cardHolder: "John Doe",
    validThru: "05/24",
    variant: "light",
  },
  {
    id: "3",
    userId: "3",
    balance: 5750.83,
    cardNumber: "4562 1122 4594 7852",
    cardHolder: "John Doe",
    validThru: "05/24",
    variant: "dark",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    userId: "1",
    type: "Deposit from my Card",
    amount: -850,
    date: "28 January 2021",
    icon: CardIcon,
    color: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    id: "2",
    userId: "1",
    type: "Deposit Paypal",
    amount: 2500,
    date: "25 January 2021",
    icon: PaypalIcon,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "3",
    userId: "1",
    type: "Jemi Wilson",
    amount: 5400,
    date: "21 January 2021",
    icon: UserIcon,
    color: "bg-teal-50",
    iconColor: "text-teal-500",
  },
];

export const mockWeeklyActivity: WeeklyActivity[] = [
  { id: "1", userId: "1", day: "Sat", deposit: 220, withdraw: 450 },
  { id: "2", userId: "1", day: "Sun", deposit: 150, withdraw: 350 },
  { id: "3", userId: "1", day: "Mon", deposit: 250, withdraw: 300 },
  { id: "4", userId: "1", day: "Tue", deposit: 300, withdraw: 400 },
  { id: "5", userId: "1", day: "Wed", deposit: 150, withdraw: 200 },
  { id: "6", userId: "1", day: "Thu", deposit: 220, withdraw: 350 },
  { id: "7", userId: "1", day: "Fri", deposit: 300, withdraw: 350 },
];

export const mockExpenseStats: ExpenseStats[] = [
  { id: "1", userId: "1", name: "Entertainment", value: 30, color: "#3B82F6" },
  { id: "2", userId: "1", name: "Bill Expense", value: 15, color: "#F97316" },
  { id: "3", userId: "1", name: "Others", value: 35, color: "#1F2937" },
  { id: "4", userId: "1", name: "Investment", value: 20, color: "#4F46E5" },
];

export const mockQuickTransfer: QuickTransfer[] = [
  {
    id: "1",
    userId: "1",
    name: "Livia Bator",
    role: "CEO",
    image: "/avatars/Avatar2.png",
  },
  {
    id: "2",
    userId: "1",
    name: "Randy Press",
    role: "Director",
    image: "/avatars/Avatar3.png",
  },
  {
    id: "3",
    userId: "1",
    name: "Workman",
    role: "Designer",
    image: "/avatars/Avatar4.png",
  },
];

export const mockBalanceHistory: BalanceHistory[] = [
  { id: "1", userId: "1", month: "Jul", value: 200 },
  { id: "2", userId: "1", month: "Aug", value: 350 },
  { id: "3", userId: "1", month: "Sep", value: 450 },
  { id: "4", userId: "1", month: "Oct", value: 700 },
  { id: "5", userId: "1", month: "Nov", value: 300 },
  { id: "6", userId: "1", month: "Dec", value: 250 },
  { id: "7", userId: "1", month: "Jan", value: 400 },
];

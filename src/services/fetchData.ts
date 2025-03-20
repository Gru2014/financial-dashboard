import {
  BalanceHistory,
  Card,
  ExpenseStats,
  QuickTransfer,
  Transaction,
  WeeklyActivity,
} from "../types/types";
import {
  mockBalanceHistory,
  mockCards,
  mockExpenseStats,
  mockQuickTransfer,
  mockTransactions,
  mockWeeklyActivity,
} from "../utils/mockData";

export const fetchCards = async (userId: string): Promise<Card[]> => {
  return new Promise((resolve) => {
    const userCards = mockCards.filter((card) => card.userId === userId);
    setTimeout(() => resolve(userCards), 0);
  });
};

export const fetchTransactions = async (
  userId: string
): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    const userTransactions = mockTransactions.filter(
      (transaction) => transaction.userId === userId
    );
    setTimeout(() => resolve(userTransactions), 0);
  });
};

export const fetchWeeklyActivity = async (
  userId: string
): Promise<WeeklyActivity[]> => {
  return new Promise((resolve) => {
    const userWeeklyActivity = mockWeeklyActivity.filter(
      (activity) => activity.userId === userId
    );
    setTimeout(() => resolve(userWeeklyActivity), 0);
  });
};

export const fetchExpenseStats = async (
  userId: string
): Promise<ExpenseStats[]> => {
  return new Promise((resolve) => {
    const userExpenseStats = mockExpenseStats.filter(
      (stat) => stat.userId === userId
    );
    setTimeout(() => resolve(userExpenseStats), 0);
  });
};

export const fetchQuickTransfer = async (
  userId: string
): Promise<QuickTransfer[]> => {
  return new Promise((resolve) => {
    const userQuickTransfer = mockQuickTransfer.filter(
      (person) => person.userId === userId
    );
    setTimeout(() => resolve(userQuickTransfer), 0);
  });
};

export const fetchBalanceHistory = async (
  userId: string
): Promise<BalanceHistory[]> => {
  return new Promise((resolve) => {
    const userBalanceHistory = mockBalanceHistory.filter(
      (history) => history.userId === userId
    );
    setTimeout(() => resolve(userBalanceHistory), 0);
  });
};

import { useState, useEffect } from "react";
import { fetchCards as fetchCardsData } from "../services/fetchData";
import { fetchTransactions as fetchTransactionsData } from "../services/fetchData";
import { fetchWeeklyActivity as fetchWeeklyActivityData } from "../services/fetchData";
import { fetchExpenseStats as fetchExpenseStatsData } from "../services/fetchData";
import { fetchBalanceHistory as fetchBalanceHistoryData } from "../services/fetchData";
import { fetchQuickTransfer as fetchQuickTransferData } from "../services/fetchData";
import {
  Card,
  Transaction,
  WeeklyActivity,
  ExpenseStats,
  BalanceHistory,
  QuickTransfer,
} from "../types/types";

export function useFetchCards(userId: string) {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCardsData(userId);
        setCards(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch cards")
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchCards();
    }
  }, [userId]);

  return { cards, isLoading, error, setCards };
}

export function useFetchTransactions(userId: string) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTransactionsData(userId);
        setTransactions(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch transactions")
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchTransactions();
    }
  }, [userId]);

  return { transactions, isLoading, error, setTransactions };
}

export function useFetchWeeklyActivity(userId: string) {
  const [weeklyActivity, setWeeklyActivity] = useState<WeeklyActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWeeklyActivity = async () => {
      try {
        setIsLoading(true);
        const data = await fetchWeeklyActivityData(userId);
        setWeeklyActivity(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch weekly activity")
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchWeeklyActivity();
    }
  }, [userId]);

  return { weeklyActivity, isLoading, error, setWeeklyActivity };
}

export function useFetchExpenseStats(userId: string) {
  const [expenseStats, setExpenseStats] = useState<ExpenseStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchExpenseStats = async () => {
      try {
        setIsLoading(true);
        const data = await fetchExpenseStatsData(userId);
        setExpenseStats(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch expense stats")
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchExpenseStats();
    }
  }, [userId]);

  return { expenseStats, isLoading, error, setExpenseStats };
}

export function useFetchBalanceHistory(userId: string) {
  const [balanceHistory, setBalanceHistory] = useState<BalanceHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBalanceHistory = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBalanceHistoryData(userId);
        setBalanceHistory(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch balance history")
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchBalanceHistory();
    }
  }, [userId]);

  return { balanceHistory, isLoading, error, setBalanceHistory };
}

export function useFetchQuickTransfer(userId: string) {
  const [quickTransfer, setQuickTransfer] = useState<QuickTransfer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchQuickTransfer = async () => {
      try {
        setIsLoading(true);
        const data = await fetchQuickTransferData(userId);
        setQuickTransfer(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch quick transfer")
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchQuickTransfer();
    }
  }, [userId]);

  return { quickTransfer, isLoading, error, setQuickTransfer };
}

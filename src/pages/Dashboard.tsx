import WeeklyActivity from "../components/dashboard/WeeklyActivity";
import ExpenseStats from "../components/dashboard/ExpenseStats";
import QuickTransfer from "../components/dashboard/QuickTransfer";
import BalanceHistory from "../components/dashboard/BalanceHistory";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import MyCards from "../components/dashboard/MyCards";
import Header from "../components/Header";

interface DashboardProps {
  onMenuClick: () => void;
}

export default function Dashboard({ onMenuClick }: DashboardProps) {
  return (
    <div>
      <Header onMenuClick={onMenuClick} />
      <div className="p-6 md:ml-64">
        <div className="w-full flex flex-col gap-6 justify-between items-center">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:h-[300px] gap-6">
            <MyCards />
            <RecentTransactions />
          </div>
          <div className="w-full flex justify-between flex-col lg:flex-row items-center lg:h-[360px] gap-6">
            <WeeklyActivity />
            <ExpenseStats />
          </div>
          <div className="w-full flex justify-between flex-col lg:flex-row items-center lg:h-[360px] gap-6">
            <QuickTransfer />
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

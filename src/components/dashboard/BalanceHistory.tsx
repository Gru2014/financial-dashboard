import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart, CartesianGrid } from "recharts";
import { useUser } from "../../contexts/UserContext";
import { useFetchBalanceHistory } from "../../hooks/useFetchData";
import Loading from "../common/Loading";

export default function BalanceHistory() {
  const { user } = useUser();
  const { balanceHistory, isLoading, error } = useFetchBalanceHistory(user?.id || "");

  return (
    <div className="w-full lg:w-2/3 h-full">
      <h2 className="text-xl font-semibold mb-4">Balance History</h2>
      <div className="card h-[300px] p-4 bg-white rounded-lg">
        {isLoading && <Loading />}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={balanceHistory}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                dx={-10}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#4F46E5"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

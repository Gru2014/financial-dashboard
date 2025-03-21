import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useFetchWeeklyActivity } from "../../hooks/useFetchData";
import { useUser } from "../../contexts/UserContext";
import Loading from "../common/Loading";

export default function WeeklyActivity() {
  const { user } = useUser();
  const { weeklyActivity, error, isLoading } = useFetchWeeklyActivity(
    user?.id || ""
  );
  return (
    <div className="w-full lg:w-2/3 h-full">
      <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
      <div className="card h-[300px] p-4">
        {isLoading && <Loading />}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && (
          <>
            <div className="flex items-center justify-end gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm text-gray-600">Deposit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                <span className="text-sm text-gray-600">Withdraw</span>
              </div>
            </div>
            <div className="h-[calc(100%-2rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivity} barGap={8}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    domain={[0, 500]}
                    ticks={[0, 100, 200, 300, 400, 500]}
                  />
                  <Tooltip
                    cursor={false}
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                      padding: "8px 12px",
                    }}
                  />
                  <Bar
                    dataKey="withdraw"
                    fill="#1F2937"
                    radius={[50, 50, 50, 50]}
                    maxBarSize={16}
                  />
                  <Bar
                    dataKey="deposit"
                    fill="#396AFF"
                    radius={[50, 50, 50, 50]}
                    maxBarSize={16}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

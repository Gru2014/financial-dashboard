import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useUser } from "../../contexts/UserContext";
import { useFetchExpenseStats } from "../../hooks/useFetchData";
import Loading from "../common/Loading";

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  name,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y - 8}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-base font-semibold"
      >
        {`${value}%`}
      </text>
      <text
        x={x}
        y={y + 8}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-xs"
      >
        {name}
      </text>
    </g>
  );
};

export default function ExpenseStats() {
  const { user } = useUser();
  const { expenseStats, error, isLoading } = useFetchExpenseStats(
    user?.id || ""
  );
  return (
    <div className="w-full lg:w-1/3 h-full">
      <h2 className="text-xl font-semibold mb-4">Expense Statistics</h2>
      <div className="card h-[300px] p-4">
        {isLoading && <Loading />}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && (
          <div className="w-full h-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={expenseStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomLabel}
                  innerRadius={0}
                  outerRadius={100}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={135}
                  endAngle={-225}
                  nameKey="name"
                >
                  {expenseStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}

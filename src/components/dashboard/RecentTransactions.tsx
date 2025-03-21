import { useFetchTransactions } from "../../hooks/useFetchData";
import { useUser } from "../../contexts/UserContext";
import Loading from "../common/Loading";

export default function RecentTransactions() {
  const { user } = useUser();
  const { transactions, error, isLoading } = useFetchTransactions(
    user?.id || ""
  );
  return (
    <div className="lg:w-1/3 w-full flex flex-col">
      <h2 className="text-xl font-semibold mb-6">Recent Transaction</h2>
      <div className="bg-white rounded-2xl h-[240px] p-4">
        {isLoading && <Loading />}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && (
          <div className="space-y-1">
            {transactions.map((transaction) => {
              const Icon = transaction.icon;
              return (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${transaction.color} flex items-center justify-center`}
                    >
                      <Icon className={`w-10 h-10 ${transaction.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {transaction.type}
                      </p>
                      <p className="text-sm text-gray-500">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div
                    className={` ${
                      transaction.amount > 0 ? "text-green-500" : "text-[#FF4B4A]"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : "-"}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(Math.abs(transaction.amount))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

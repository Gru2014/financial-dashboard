import { useUser } from "../../contexts/UserContext";
import { ChevronRightIcon, SendIcon } from "../icons";
import { useFetchQuickTransfer } from "../../hooks/useFetchData";
import Loading from "../common/Loading";
import Button from "../common/Button";

export default function QuickTransfer() {
  const { user } = useUser();
  const { quickTransfer, error, isLoading } = useFetchQuickTransfer(
    user?.id || ""
  );
  return (
    <div className="w-full lg:w-1/3 h-full">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Quick Transfer
      </h2>
      <div className="h-[300px] bg-white rounded-2xl p-6">
        {isLoading && <Loading />}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && (
          <>
            <div className="relative">
              <div className="flex space-x-4 mb-8 justify-between overflow-x-auto pb-2">
                {quickTransfer.map((person) => (
                  <div
                    key={person.name}
                    className="flex flex-col items-center min-w-fit"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-medium text-gray-900">{person.name}</p>
                    <p className="text-sm text-blue-500">{person.role}</p>
                  </div>
                ))}
                <div>
                  <button className="absolute right-0 top-8 bg-white shadow-lg rounded-full p-2">
                    <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-full flex items-center justify-between relative">
                <label className="block text-base font-medium text-gray-500 mb-2">
                  Write Amount
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="525.50"
                    className="w-full px-8 py-3 bg-[#EDF1F7] rounded-full text-gray-900 focus:outline-none"
                  />
                  <Button variant="primary" className="absolute right-0 top-1/2 -translate-y-1/2 px-6 py-3 bg-gray-900 text-white rounded-full flex items-center gap-2">
                    Send
                    <SendIcon className="w-5 h-5 transform rotate-45" />
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import {
  AccountIcon,
  CreditCardIcon,
  HomeIcon,
  InvestmentIcon,
  LoanIcon,
  PrivilegeIcon,
  ServiceIcon,
  SettingIcon,
  TransactionIcon,
  SoarTaskIcon,
} from "../icons";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Transactions", href: "/transactions", icon: TransactionIcon },
  { name: "Accounts", href: "/accounts", icon: AccountIcon },
  { name: "Investments", href: "/investments", icon: InvestmentIcon },
  { name: "Credit Cards", href: "/credit-cards", icon: CreditCardIcon },
  { name: "Loans", href: "/loans", icon: LoanIcon },
  { name: "Services", href: "/services", icon: ServiceIcon },
  { name: "My Privileges", href: "/privileges", icon: PrivilegeIcon },
  { name: "Setting", href: "/setting", icon: SettingIcon },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          "w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 z-30",
          "transform transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex items-center gap-2">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <SoarTaskIcon className="w-5 h-5" />
            <span className="text-2xl">Soar Task</span>
          </h1>
        </div>

        <nav className="mt-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => onClose()}
                className={clsx(
                  "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "border-l-4 border-black text-black"
                    : "text-gray-500 hover:text-gray-900 border-l-4 border-transparent"
                )}
              >
                <item.icon className="w-5 h-5" color={isActive ? "#000" : "#B1B1B1"} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

import { useUser } from "../contexts/UserContext";
import { SearchIcon, SettingsIcon, NotificationIcon, BurgerIcon } from "./icons";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const { user } = useUser();
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Overview';
      case '/setting':
        return 'Setting';
      default:
        return 'Overview';
    }
  };

  console.log(user);

  return (
    <div className="sticky top-0 left-0 right-0 z-20 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1 flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <BurgerIcon className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-2xl text-gray-900 flex-1 text-center lg:text-left lg:ml-64">{getTitle()}</h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search for something"
              className="pl-10 pr-4 py-2 bg-gray-50 rounded-full w-[300px] text-sm focus:outline-none"
            />
            <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-50 rounded-full hidden md:block">
              <SettingsIcon className="w-6 h-6 text-gray-600" />
            </button>

            <button className="p-2 bg-gray-50 rounded-full relative hidden md:block">
              <NotificationIcon className="w-6 h-6 text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 border-2 border-[#396AFF] rounded-full"></span>
            </button>

            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={user?.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Search - Only visible on mobile */}
      <div className="flex justify-center pb-4 md:hidden">
        <div className="relative w-full max-w-[400px] mx-6">
          <input
            type="text"
            placeholder="Search for something"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full text-sm focus:outline-none"
          />
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}

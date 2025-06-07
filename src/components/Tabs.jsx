import { NavLink } from 'react-router-dom';

const Tabs = () => {
  const tabs = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Add Lodge', to: '/add-lodge' },
    { name: 'Manage Listing', to: '/manage-listing' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Logo Header */}
      <div className="bg-[#F2B272] flex items-center px-4 py-3">
        <img
          src="/svgs/blaze-nest-logo.svg"
          alt="Blaze Nest Logo"
          className="w-6 h-6 mr-2"
        />
        <span className="text-sm font-semibold text-[#065F80]">Blaze Nest</span>
      </div>

      {/* Responsive Navigation Tabs */}
      <div className="bg-[#DE8F35] py-3 px-4 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-3 sm:gap-8 text-white text-sm sm:text-base font-medium">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `transition px-2 py-1 sm:px-3 sm:py-1 border-b-2 ${
                  isActive
                    ? 'border-white font-bold'
                    : 'border-transparent hover:border-white'
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;

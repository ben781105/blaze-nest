import { NavLink } from 'react-router-dom';

const Tabs = () => {
  const tabs = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Add Lodge', to: '/add-lodge' },
    { name: 'Manage Listing', to: '/manage-listing' },
  ];

  return (
    <div className="flex flex-col">
      {/* Logo Header */}
      <div className="bg-[#F2B272] flex items-center px-4 py-2 mb-4">
        <img
          src="/svgs/blaze-nest-logo.svg"
          alt="Blaze Nest Logo"
          className="w-6 h-6 mr-2"
        />
        <span className="text-sm font-semibold text-[#065F80]">Blaze Nest</span>
      </div>

      {/* Centered, narrower Navigation Tabs */}
      <div className="bg-[#DE8F35] py-8 px-70 max-w-8xl mx-auto flex ">
        <div className="max-w-4xl mx-auto flex justify-around font-semibold text-lg">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `transition px-4 py-1 ${
                  isActive
                    ? 'hover:border-b-4 hover:border-[#0C61FF]'
                    : 'hover:text-white'
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

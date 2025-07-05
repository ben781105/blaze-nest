import { Outlet } from 'react-router-dom';

const MessagesLayout = () => {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
};

export default MessagesLayout;

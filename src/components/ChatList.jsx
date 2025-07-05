
import { useSelector, useDispatch } from 'react-redux';
import { setActiveChat } from '../store/features/messages/messageSlice';
import { useNavigate , Link} from 'react-router-dom';

const ChatList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chats = useSelector(state => state.chat.chats);


  const handleClick = (chatId) => {
    dispatch(setActiveChat(chatId));
    navigate(`/student-dashboard/chat/${chatId}`)
  };

  return (
    <section className='flex flex-col relative'>
        <nav className="bg-primary fixed flex items-center justify-between max-sm:px-3  md:space-x-16 xl:px-5 py-2 font-bold inset-x-0 z-50">
                <div className='relative space-y-1'>
                  <Link to="/" className="flex items-center   space-x-1">
                    <img src="/svgs/blaze-nest-logo.svg" className='w-6 h-6 -ml-2' alt="Blaze Nest Logo" />
                    <p className="bg-gradient-black-blue text-sm">Blaze Nest</p>
                  </Link>
                  <span className='flex items-center gap-2'>
                    <img src="/svgs/left-arrow-icon.svg"
                     onClick={() => navigate(-1)}
                     className='cursor-pointer'  alt="Message Icon" width={24}/>
                    <h2 className='text-xl'>Messages</h2>
                  </span>
                </div>
        </nav>
    <div className="pl-2 sm:pl-4 mt-15 pt-6 pr-3 flex flex-col gap-4 ">
      {chats.map(chat => (
        <div
          key={chat.chatId}
          onClick={() => handleClick(chat.chatId)}
          className="w-full flex items-center justify-between p-2 cursor-pointer"
        >
          <span className='flex gap-3 items-center'>
            <span className='w-13 h-13 md:w-16 md:h-16'><img src={chat.otherUserImage} alt="user" className='w-full h-full rounded-full object-cover'/></span>
            <span className='flex flex-col'>
              <h2 className='font-semibold md:text-xl text-base'>{chat.otherUsername}</h2>
              <p className='text-sm md:text-base'>{chat.lastMessage}</p>
            </span>
          </span>

          <span>{chat.lastseen}</span>
        </div>
      ))}
    </div>
    </section>
  );
};

export default ChatList;

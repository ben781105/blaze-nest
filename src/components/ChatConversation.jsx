import { useSelector, useDispatch } from 'react-redux';
import { useParams ,useNavigate, Link} from 'react-router-dom';
import { useState } from 'react';
import { addMessage } from '../store/features/messages/messageSlice';
import { CameraIcon } from 'lucide-react';
import { LucideSend } from 'lucide-react';

const ChatConversation = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const currentUser = useSelector((state) => state.user); 
  const activeChat = useSelector((state) =>
    state.chat.chats.find((chat) => chat.chatId.toString() === chatId)
  );

  const messages = useSelector(
    (state) => state.chat.messages[chatId] || []
  );

  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      content: input,
      senderId: currentUser.id,
      senderRole: currentUser.role,
    };

    dispatch(addMessage({ chatId, message: newMessage }));
    setInput('');
  };

  return (
    <div className="  flex flex-col h-screen bg-white">
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
                <h2 className='text-xl font-semibold'>{activeChat.otherUsername}</h2>
            </span>
            </div>
      </nav>
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 pb-38">
        {messages.map((msg, idx) => {
          const sender = msg.senderId === 2; 
          return (
            <div
              key={idx}
              className={`flex ${!sender ? 'justify-end' : 'justify-start'}`}
            >
              {sender&& (
                <div className='w-10 h-10 self-end mr-2'>
                    <img
                  src={activeChat.otherUserImage}
                  alt="profileimg"
                  className="w-full h-full object-fit rounded-full "
                />
                </div>

              )}
              <div
                className={`px-4 w-fit h-fit flex items-center py-2 rounded-2xl max-w-[56%] mt-4 sm:max-w-[70%] md:max-w-[50%] text-sm ${
                  sender
                    ? 'bg-gray-200 text-black '
                    : 'bg-blue-600 text-white'
                }`}
              >
                {msg.content}
               
              </div>
            </div>
          );
        })}
      </div>

      <form
      onSubmit={handleSend}
       className="fixed bottom-20 inset-x-0 bg-white pl-4 flex items-center gap-2 border-1 border-gray-200 z-50"
      >
        <CameraIcon />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send message"
          className="flex-1 px-4 py-2  text-sm focus:outline-none"
        />
        <button
          type="submit"
          className="bg-orange-400 px-6 py-3  text-black cursor-pointer  hover:bg-orange-500"
        >
          <LucideSend />
        </button>
      </form>
    </div>
  );
};

export default ChatConversation;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    chats:[
        {
         chatId:1,
         otherUserId: 2,
         otherUsername: 'Mike Agent',
         otherUserRole: 'agent',
         lastMessage: 'The lodge is still available',
         lastseen: '11:30 AM',
         otherUserImage: '/imgs/chris.jpg'
        },
        {
         chatId:2,
         otherUserId: 3,
         otherUsername: 'Agent Ben',
         otherUserRole: 'agent',
         lastMessage: 'Yes it has water and electricity',
         lastseen: '11:30 AM',
         otherUserImage: '/imgs/agentben.jpg'
        },
        {
         chatId:3,
         otherUserId: 4,
         otherUsername: 'Alice Smith',
         otherUserRole: 'agent',
         lastMessage: 'I am interested in the lodge',
         lastseen: '2:30 PM',
         otherUserImage: '/imgs/agentjohn.jpg'
        },
        {
         chatId:4,
         otherUserId: 5,
         otherUsername: 'Agent Bob',
         otherUserRole: 'agent',
         lastMessage: 'The bag has three colors',
         lastseen: 'yesterday',
         otherUserImage: '/imgs/abbey.jpg'
        },
        {
         chatId:5,
         otherUserId: 6,
         otherUsername: 'Sarah Connor',
         otherUserRole: 'agent',
         lastMessage: 'Yes Hp laptops are available ',
         lastseen: '2 days ago',
         otherUserImage: '/imgs/charles.jpg'
        },
        {
         chatId:6,
         otherUserId: 7,
         otherUsername: 'Carol Brown',
         otherUserRole: 'agent',
         lastMessage: 'I am interested in the bag',
         lastseen: '01:54 PM',
         otherUserImage: '/imgs/carol.jpg'
        },
        {
         chatId:7,
         otherUserId: 7,
         otherUsername: 'Agent Smith',
         otherUserRole: 'agent',
         lastMessage: 'i have the reduced the price please',
         lastseen: '01:54 PM',
         otherUserImage: '/imgs/vendorjust.jpg'
        },
         {
         chatId:8,
         otherUserId: 7,
         otherUsername: 'Agent Juliet',
         otherUserRole: 'agent',
         lastMessage: 'Come and see the lodge yourself',
         lastseen: 'yesterday',
         otherUserImage: '/imgs/juliet.jpg'
        },

        
    ],
    activeChatId:null,
    messages: {
    1:[
    {
      id: 1,
      senderId: 2, 
      senderRole: 'agent',
      content: "Hello, good evening."
    },
    {
      id: 2,
      senderId: 1, 
      senderRole: 'student',
      content: "Hello Ben.",
    },
    {
      id: 3,
      senderId: 1,
      senderRole: 'student',
      content: "Please, I am in search of a lodge. I saw the one you posted and wanted to ask some questions about it.",
    },
    {
      id: 4,
      senderId: 2,
      senderRole: 'agent',
      content: "Yeah. There are 2 lodges available at the moment. Each is spacious and clean as listed. You can honestly visit me whenever you're free and we can check it out.",
    },
    {
      id: 5,
      senderId: 1,
      senderRole: 'student',
      content: "Okay, I am not so available right now but I have someone who can help me confirm it.",
    },
    {
      id: 6,
      senderId: 2,
      senderRole: 'agent',
      content: "Alright, I will be expecting you."
    },
  ],
  2:[
    {
      id: 1,
      senderId: 2, 
      senderRole: 'agent',
      content: "Hello, good evening."
    },
    {
      id: 2,
      senderId: 1, 
      senderRole: 'student',
      content: "Hello Ben.",
    },
    {
      id: 3,
      senderId: 1,
      senderRole: 'student',
      content: "Please, I am in search of a lodge. I saw the one you posted and wanted to ask some questions about it.",
    },
    {
      id: 4,
      senderId: 2,
      senderRole: 'agent',
      content: "Yeah. There are 2 lodges available at the moment. Each is spacious and clean as listed. You can honestly visit me whenever you're free and we can check it out.",
    },
    {
      id: 5,
      senderId: 1,
      senderRole: 'student',
      content: "Okay, I am not so available right now but I have someone who can help me confirm it.",
    },
    {
      id: 6,
      senderId: 2,
      senderRole: 'agent',
      content: "Alright, I will be expecting you."
    },
  ],
  3:[
    {
      id: 1,
      senderId: 2, 
      senderRole: 'agent',
      content: "Hello, good evening."
    },
    {
      id: 2,
      senderId: 1, 
      senderRole: 'student',
      content: "Hello Ben.",
    },
    {
      id: 3,
      senderId: 1,
      senderRole: 'student',
      content: "Please, I am in search of a lodge. I saw the one you posted and wanted to ask some questions about it.",
    },
    {
      id: 4,
      senderId: 2,
      senderRole: 'agent',
      content: "Yeah. There are 2 lodges available at the moment. Each is spacious and clean as listed. You can honestly visit me whenever you're free and we can check it out.",
    },
    {
      id: 5,
      senderId: 1,
      senderRole: 'student',
      content: "Okay, I am not so available right now but I have someone who can help me confirm it.",
    },
    {
      id: 6,
      senderId: 2,
      senderRole: 'agent',
      content: "Alright, I will be expecting you."
    },
  ],
  4:[
    {
      id: 1,
      senderId: 2, 
      senderRole: 'agent',
      content: "Hello, good evening."
    },
    {
      id: 2,
      senderId: 1, 
      senderRole: 'student',
      content: "Hello Ben.",
    },
    {
      id: 3,
      senderId: 1,
      senderRole: 'student',
      content: "Please, I am in search of a lodge. I saw the one you posted and wanted to ask some questions about it.",
    },
    {
      id: 4,
      senderId: 2,
      senderRole: 'agent',
      content: "Yeah. There are 2 lodges available at the moment. Each is spacious and clean as listed. You can honestly visit me whenever you're free and we can check it out.",
    },
    {
      id: 5,
      senderId: 1,
      senderRole: 'student',
      content: "Okay, I am not so available right now but I have someone who can help me confirm it.",
    },
    {
      id: 6,
      senderId: 2,
      senderRole: 'agent',
      content: "Alright, I will be expecting you."
    },
  ],
  5:[
    {
      id: 1,
      senderId: 2, 
      senderRole: 'agent',
      content: "Hello, good evening."
    },
    {
      id: 2,
      senderId: 1, 
      senderRole: 'student',
      content: "Hello Ben.",
    },
    {
      id: 3,
      senderId: 1,
      senderRole: 'student',
      content: "Please, I am in search of a lodge. I saw the one you posted and wanted to ask some questions about it.",
    },
    {
      id: 4,
      senderId: 2,
      senderRole: 'agent',
      content: "Yeah. There are 2 lodges available at the moment. Each is spacious and clean as listed. You can honestly visit me whenever you're free and we can check it out.",
    },
    {
      id: 5,
      senderId: 1,
      senderRole: 'student',
      content: "Okay, I am not so available right now but I have someone who can help me confirm it.",
    },
    {
      id: 6,
      senderId: 2,
      senderRole: 'agent',
      content: "Alright, I will be expecting you."
    },
  ],
  6:[
    {
      id: 1,
      senderId: 2, 
      senderRole: 'agent',
      content: "Hello, good evening."
    },
    {
      id: 2,
      senderId: 1, 
      senderRole: 'student',
      content: "Hello Ben.",
    },
    {
      id: 3,
      senderId: 1,
      senderRole: 'student',
      content: "Please, I am in search of a lodge. I saw the one you posted and wanted to ask some questions about it.",
    },
    {
      id: 4,
      senderId: 2,
      senderRole: 'agent',
      content: "Yeah. There are 2 lodges available at the moment. Each is spacious and clean as listed. You can honestly visit me whenever you're free and we can check it out.",
    },
    {
      id: 5,
      senderId: 1,
      senderRole: 'student',
      content: "Okay, I am not so available right now but I have someone who can help me confirm it.",
    },
    {
      id: 6,
      senderId: 2,
      senderRole: 'agent',
      content: "Alright, I will be expecting you."
    },
  ]
    },
};

const messageSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats(state, action) {
      state.chats = action.payload;
    },
    setActiveChat(state, action) {
      state.activeChatId = action.payload;
    },
    setMessages(state, action) {
      const { chatId, messages } = action.payload;
      state.messages[chatId] = messages;
    },
    addMessage(state, action) {
      const { chatId, message } = action.payload;
      if (!state.messages[chatId]) {
        state.messages[chatId] = [];
      }
      state.messages[chatId].push({
        ...message
      });
    }
  },
})

export const { setChats, setActiveChat, setMessages, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
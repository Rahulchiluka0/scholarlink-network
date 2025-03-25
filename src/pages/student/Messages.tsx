
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, 
  Users, 
  Search, 
  Send, 
  Paperclip, 
  MoreVertical,
  User,
  Phone,
  Video
} from 'lucide-react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState('');

  // Mock data
  const contacts = [
    { id: 1, name: 'Mr. Smith', role: 'Mathematics Teacher', avatar: '🧑‍🏫', online: true, lastSeen: 'Now' },
    { id: 2, name: 'Ms. Johnson', role: 'Physics Teacher', avatar: '👩‍🏫', online: false, lastSeen: '15m ago' },
    { id: 3, name: 'Mrs. Davis', role: 'English Teacher', avatar: '👩‍🏫', online: true, lastSeen: 'Now' },
    { id: 4, name: 'Mr. Wilson', role: 'Computer Science Teacher', avatar: '🧑‍🏫', online: false, lastSeen: '1h ago' },
    { id: 5, name: 'Study Group', role: 'Physics Project', avatar: '👥', online: true, members: ['You', 'Alex', 'Sarah', 'Michael'], lastSeen: 'Now' },
    { id: 6, name: 'Academic Advisor', role: 'Student Support', avatar: '👨‍💼', online: false, lastSeen: 'Yesterday' },
  ];

  const chats = [
    { 
      id: 1, 
      contact: contacts[0],
      messages: [
        { id: 1, sender: 'them', text: 'Hello, I wanted to check if you had any questions about today\'s homework?', time: '10:30 AM' },
        { id: 2, sender: 'me', text: 'Hi Mr. Smith, yes actually! I\'m stuck on problem #5', time: '10:32 AM' },
        { id: 3, sender: 'them', text: 'Let me explain that one. You need to use the quadratic formula here.', time: '10:35 AM' },
        { id: 4, sender: 'me', text: 'Oh, I see! I was trying to factor it directly. Thank you!', time: '10:38 AM' },
        { id: 5, sender: 'them', text: 'You\'re welcome! Let me know if you have any other questions.', time: '10:40 AM' },
      ]
    },
    { 
      id: 2, 
      contact: contacts[2],
      messages: [
        { id: 1, sender: 'them', text: 'Don\'t forget your essay is due this Friday!', time: 'Yesterday' },
        { id: 2, sender: 'me', text: 'I\'ve already started working on it. Can I send you a draft for feedback?', time: 'Yesterday' },
        { id: 3, sender: 'them', text: 'Yes, please do. I\'ll review it as soon as possible.', time: 'Yesterday' },
      ]
    },
    { 
      id: 3, 
      contact: contacts[4],
      messages: [
        { id: 1, sender: 'Alex', text: 'When are we meeting to work on the physics project?', time: '2 days ago' },
        { id: 2, sender: 'Sarah', text: 'How about tomorrow after school in the library?', time: '2 days ago' },
        { id: 3, sender: 'me', text: 'That works for me!', time: '2 days ago' },
        { id: 4, sender: 'Michael', text: 'I can\'t make it tomorrow. How about Wednesday?', time: '2 days ago' },
        { id: 5, sender: 'me', text: 'Wednesday is fine with me too.', time: '2 days ago' },
        { id: 6, sender: 'Sarah', text: 'Wednesday it is then!', time: '2 days ago' },
      ]
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim() === '' || !selectedChat) return;
    
    // This would be a server call in a real app
    console.log('Sending message:', messageText, 'to chat:', selectedChat.id);
    
    // Clear input after sending
    setMessageText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <MainLayout userRole="student">
      <div className="h-[calc(100vh-120px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full gap-0">
          {/* Left sidebar - Contacts list */}
          <div className="border-r border-gray-200 md:col-span-1 h-full overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-bold">Messages</h1>
                <div className="mt-2 relative">
                  <input 
                    type="text" 
                    placeholder="Search contacts..." 
                    className="form-input py-2 pl-8 pr-4 w-full text-sm"
                  />
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <Tabs defaultValue="recent" className="flex-1 flex flex-col">
                <div className="px-4 pt-2">
                  <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="all">All Contacts</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="recent" className="flex-1 overflow-y-auto">
                  <div className="divide-y divide-gray-100">
                    {chats.map((chat) => (
                      <div 
                        key={chat.id}
                        className={`p-3 cursor-pointer hover:bg-gray-50 ${selectedChat?.id === chat.id ? 'bg-gray-50' : ''}`}
                        onClick={() => setSelectedChat(chat)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="relative">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                              {chat.contact.avatar}
                            </div>
                            {chat.contact.online && (
                              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <p className="text-sm font-medium truncate">{chat.contact.name}</p>
                              <p className="text-xs text-gray-500">{chat.messages[chat.messages.length - 1].time}</p>
                            </div>
                            <p className="text-xs text-gray-500 truncate">
                              {chat.messages[chat.messages.length - 1].sender === 'me' 
                                ? 'You: ' 
                                : chat.contact.members 
                                  ? `${chat.messages[chat.messages.length - 1].sender}: `
                                  : ''
                              }
                              {chat.messages[chat.messages.length - 1].text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="all" className="flex-1 overflow-y-auto">
                  <div className="divide-y divide-gray-100">
                    {contacts.map((contact) => (
                      <div 
                        key={contact.id}
                        className="p-3 cursor-pointer hover:bg-gray-50"
                        onClick={() => {
                          const existingChat = chats.find(c => c.contact.id === contact.id);
                          if (existingChat) {
                            setSelectedChat(existingChat);
                          } else {
                            // In a real app, this would create a new chat
                            console.log('Would create new chat with:', contact.name);
                          }
                        }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="relative">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                              {contact.avatar}
                            </div>
                            {contact.online && (
                              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{contact.name}</p>
                            <p className="text-xs text-gray-500">{contact.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Right side - Chat area */}
          <div className="md:col-span-2 lg:col-span-3 h-full flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat header */}
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                        {selectedChat.contact.avatar}
                      </div>
                      {selectedChat.contact.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{selectedChat.contact.name}</p>
                      <p className="text-xs text-gray-500">
                        {selectedChat.contact.online ? 'Online' : `Last seen ${selectedChat.contact.lastSeen}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                      <Video className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Messages area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {selectedChat.messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender !== 'me' && selectedChat.contact.members && (
                        <div className="mr-2">
                          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                            {message.sender === 'them' ? selectedChat.contact.avatar : '👤'}
                          </div>
                        </div>
                      )}
                      <div 
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.sender === 'me' 
                            ? 'bg-primary text-white rounded-br-none' 
                            : 'bg-gray-100 rounded-bl-none'
                        }`}
                      >
                        {selectedChat.contact.members && message.sender !== 'me' && (
                          <p className="text-xs font-medium mb-1" style={{ color: '#E91E63' }}>{message.sender}</p>
                        )}
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 text-right ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message input */}
                <div className="p-3 border-t border-gray-200">
                  <div className="flex items-end space-x-2">
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <div className="flex-1 relative">
                      <textarea
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Type a message..."
                        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary min-h-[80px] max-h-[160px] text-sm"
                      ></textarea>
                    </div>
                    <button 
                      className={`p-2 rounded-full ${messageText.trim() ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center flex-col p-4 text-center">
                <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-700">Your Messages</h3>
                <p className="text-gray-500 mt-2 max-w-md">
                  Select a conversation from the left or start a new one by selecting a contact.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;

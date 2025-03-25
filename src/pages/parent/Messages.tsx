
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Send, PlusCircle, Paperclip, ArrowLeft, MoreVertical } from 'lucide-react';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  
  // Mock conversation data
  const conversations = [
    {
      id: 1,
      person: {
        name: 'Mrs. Johnson',
        role: 'Math Teacher',
        avatar: '/placeholder.svg',
      },
      messages: [
        { id: 1, text: 'Hello Mr. Smith, I wanted to discuss Emma\'s recent math test performance.', sender: 'teacher', time: '10:30 AM' },
        { id: 2, text: 'Hi Mrs. Johnson, thank you for reaching out. How did she do?', sender: 'parent', time: '10:35 AM' },
        { id: 3, text: 'She\'s improved significantly since our last assessment. She scored an A- which is great progress!', sender: 'teacher', time: '10:38 AM' },
        { id: 4, text: 'That\'s wonderful news! We\'ve been practicing at home.', sender: 'parent', time: '10:40 AM' },
        { id: 5, text: 'The practice is definitely showing. I\'d like to discuss some additional resources that might help her continue to improve.', sender: 'teacher', time: '10:42 AM' },
      ],
      unread: 0,
    },
    {
      id: 2,
      person: {
        name: 'Mr. Peterson',
        role: 'Science Teacher',
        avatar: '/placeholder.svg',
      },
      messages: [
        { id: 1, text: 'Good afternoon. Just a reminder about the upcoming science fair project due next week.', sender: 'teacher', time: '2:15 PM' },
        { id: 2, text: 'Thanks for the reminder. Jack has been working on his project about renewable energy.', sender: 'parent', time: '2:45 PM' },
      ],
      unread: 1,
    },
    {
      id: 3,
      person: {
        name: 'Ms. Adams',
        role: 'Principal',
        avatar: '/placeholder.svg',
      },
      messages: [
        { id: 1, text: 'The school will be closed on Friday for teacher development day. Please make appropriate arrangements.', sender: 'teacher', time: 'Yesterday' },
      ],
      unread: 1,
    },
  ];
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you would send this to an API
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const formatTime = (time: string) => {
    // Simple formatting - in a real app you might use a library like date-fns
    return time;
  };

  return (
    <MainLayout userRole="parent">
      <div className="h-[calc(100vh-8rem)]">
        <div className="flex h-full rounded-lg overflow-hidden border">
          {/* Conversation List */}
          <div className={`w-full lg:w-1/3 bg-white border-r ${selectedConversation && 'hidden lg:block'}`}>
            <div className="p-4 border-b">
              <h1 className="text-xl font-bold">Messages</h1>
              <div className="relative mt-3">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-9"
                />
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(100%-5rem)]">
              {conversations.map((convo) => (
                <div
                  key={convo.id}
                  className={`flex items-center p-4 hover:bg-muted/50 cursor-pointer ${selectedConversation === convo.id ? 'bg-muted' : ''}`}
                  onClick={() => setSelectedConversation(convo.id)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={convo.person.avatar} alt={convo.person.name} />
                    <AvatarFallback>{convo.person.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{convo.person.name}</h3>
                      <span className="text-xs text-muted-foreground">
                        {convo.messages[convo.messages.length - 1]?.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground truncate w-48">
                        {convo.messages[convo.messages.length - 1]?.text}
                      </p>
                      {convo.unread > 0 && (
                        <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {convo.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Area */}
          {selectedConversation ? (
            <div className={`flex flex-col w-full ${!selectedConversation && 'hidden lg:flex'}`}>
              {/* Chat Header */}
              <div className="p-4 border-b flex justify-between items-center bg-white">
                <div className="flex items-center">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="lg:hidden mr-2"
                    onClick={() => setSelectedConversation(null)}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Avatar className="h-10 w-10">
                    <AvatarImage 
                      src={conversations.find(c => c.id === selectedConversation)?.person.avatar} 
                      alt={conversations.find(c => c.id === selectedConversation)?.person.name} 
                    />
                    <AvatarFallback>
                      {conversations.find(c => c.id === selectedConversation)?.person.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h3 className="font-medium">
                      {conversations.find(c => c.id === selectedConversation)?.person.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {conversations.find(c => c.id === selectedConversation)?.person.role}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
                <div className="space-y-4">
                  {conversations.find(c => c.id === selectedConversation)?.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'parent' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[75%] rounded-lg p-3 ${
                          message.sender === 'parent' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'parent' 
                            ? 'text-primary-foreground/80' 
                            : 'text-muted-foreground'
                        }`}>
                          {formatTime(message.time)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex items-center">
                  <Button variant="ghost" size="icon">
                    <PlusCircle className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="flex-1 mx-2"
                  />
                  <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex flex-col items-center justify-center w-2/3 bg-muted/20">
              <div className="text-center p-6">
                <h3 className="text-lg font-medium">Select a conversation</h3>
                <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;


import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Search, Send, Users } from 'lucide-react';

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState<number | null>(1);
  const [messageText, setMessageText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock contacts data
  const contacts = [
    { id: 1, name: 'Alice Johnson', role: 'Student', avatar: 'A', unread: 2, status: 'online' },
    { id: 2, name: 'Bob Smith', role: 'Student', avatar: 'B', unread: 0, status: 'offline' },
    { id: 3, name: 'Charlie Brown', role: 'Student', avatar: 'C', unread: 1, status: 'online' },
    { id: 4, name: 'Diana Ross', role: 'Student', avatar: 'D', unread: 0, status: 'online' },
    { id: 5, name: 'Math Department', role: 'Group', avatar: 'M', unread: 5, status: 'online' },
    { id: 6, name: 'Principal Office', role: 'Admin', avatar: 'P', unread: 0, status: 'online' },
  ];
  
  // Mock messages data
  const messages = [
    { id: 1, contactId: 1, sender: 'teacher', text: 'Hello Alice, how is your project coming along?', time: '10:30 AM' },
    { id: 2, contactId: 1, sender: 'contact', text: 'Hi Professor, I\'ve completed the first part but I\'m stuck on the second section.', time: '10:32 AM' },
    { id: 3, contactId: 1, sender: 'teacher', text: 'What specific issue are you facing?', time: '10:35 AM' },
    { id: 4, contactId: 1, sender: 'contact', text: 'I\'m having trouble understanding the formula we need to apply.', time: '10:36 AM' },
    { id: 5, contactId: 1, sender: 'teacher', text: 'Let\'s schedule a quick call tomorrow to go through it.', time: '10:40 AM' },
    { id: 6, contactId: 1, sender: 'contact', text: 'That would be great! Thank you!', time: '10:41 AM' },
    { id: 7, contactId: 3, sender: 'contact', text: 'Professor, will we have a quiz this Friday?', time: 'Yesterday' },
    { id: 8, contactId: 3, sender: 'teacher', text: 'Yes, it will cover the material from chapters 4 and 5.', time: 'Yesterday' },
  ];
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const currentMessages = messages.filter(message => message.contactId === selectedContact);
  
  const handleSendMessage = () => {
    if (messageText.trim() && selectedContact) {
      // In a real app, this would add the message to state and potentially send to a server
      console.log(`Sending message to contact ${selectedContact}: ${messageText}`);
      setMessageText('');
    }
  };

  return (
    <MainLayout userRole="teacher">
      <div className="h-[calc(100vh-10rem)] flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Messages</h1>
        
        <div className="flex flex-1 overflow-hidden rounded-lg border">
          {/* Contacts sidebar */}
          <div className="w-full max-w-xs border-r bg-card">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search contacts..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="overflow-y-auto h-[calc(100vh-14rem)]">
              {filteredContacts.map((contact) => (
                <div 
                  key={contact.id}
                  className={`flex items-center p-4 cursor-pointer hover:bg-muted/50 ${selectedContact === contact.id ? 'bg-muted' : ''}`}
                  onClick={() => setSelectedContact(contact.id)}
                >
                  <div className={`h-10 w-10 rounded-full bg-primary-foreground flex items-center justify-center text-primary font-semibold mr-3 relative ${contact.status === 'online' ? 'ring-2 ring-green-500' : ''}`}>
                    {contact.avatar}
                    {contact.unread > 0 && (
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[11px] font-medium text-primary-foreground flex items-center justify-center">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium truncate">{contact.name}</h4>
                      {contact.status === 'online' && (
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{contact.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Message content */}
          <div className="flex-1 flex flex-col bg-background">
            {selectedContact ? (
              <>
                <div className="p-4 border-b bg-card flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-foreground flex items-center justify-center text-primary font-semibold mr-3">
                    {contacts.find(c => c.id === selectedContact)?.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{contacts.find(c => c.id === selectedContact)?.name}</h4>
                    <p className="text-xs text-muted-foreground">{contacts.find(c => c.id === selectedContact)?.status === 'online' ? 'Online' : 'Offline'}</p>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentMessages.length > 0 ? (
                    currentMessages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.sender === 'teacher' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === 'teacher' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <span className="text-xs mt-1 block opacity-70">{message.time}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/50" />
                        <p className="mt-2 text-sm text-muted-foreground">No messages yet</p>
                        <p className="text-xs text-muted-foreground">Send a message to start the conversation</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <button 
                      className="p-2 rounded-full bg-primary text-primary-foreground disabled:opacity-50"
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-2 text-lg font-medium">Select a contact</h3>
                  <p className="text-sm text-muted-foreground">Choose a contact to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;

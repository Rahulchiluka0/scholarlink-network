
import React, { useState } from 'react';
import { 
  Users, Calendar, CheckCircle, FileText, 
  MessageSquare, CreditCard, ChevronRight, 
  AlertCircle, TrendingUp, Clock, BarChart2, 
  ChevronDown, User
} from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from 'recharts';

const ParentDashboard = () => {
  const [selectedChild, setSelectedChild] = useState('Emma Johnson');
  
  // Mock data
  const children = [
    { id: 1, name: 'Emma Johnson', grade: '9th Grade', photo: null },
    { id: 2, name: 'Michael Johnson', grade: '6th Grade', photo: null },
  ];
  
  const childStats = [
    { title: 'Attendance', value: '94%', icon: CheckCircle, color: 'text-emerald-500' },
    { title: 'GPA', value: '3.7', icon: TrendingUp, color: 'text-primary' },
    { title: 'Assignments', value: '5', icon: FileText, color: 'text-accent' },
    { title: 'Due Payments', value: '$120', icon: CreditCard, color: 'text-destructive' },
  ];
  
  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Meeting', date: 'Jun 15, 2023', time: '09:00 AM - 12:00 PM' },
    { id: 2, title: 'Science Exhibition', date: 'Jun 20, 2023', time: '01:00 PM - 04:00 PM' },
    { id: 3, title: 'End of Term Break', date: 'Jun 25, 2023', type: 'holiday', time: 'All Day' },
  ];
  
  const recentMessages = [
    { id: 1, from: 'Ms. Anderson (Math)', message: 'Emma has been performing exceptionally well in calculus.', time: '2 hours ago', read: true },
    { id: 2, from: 'Mr. Wilson (Science)', message: 'Please ensure Emma completes the physics homework by Friday.', time: '1 day ago', read: false },
    { id: 3, from: 'School Admin', message: 'Reminder: School fees for the second quarter are due next week.', time: '2 days ago', read: true },
  ];
  
  const classesMissed = [
    { id: 1, subject: 'History', date: 'Jun 5, 2023', reason: 'Sick Leave', status: 'Excused' },
    { id: 2, subject: 'Physical Education', date: 'May 28, 2023', reason: 'Doctor\'s Appointment', status: 'Excused' },
    { id: 3, subject: 'French', date: 'May 15, 2023', reason: 'No reason provided', status: 'Unexcused' },
  ];
  
  // Chart data
  const attendanceData = [
    { month: 'Jan', present: 18, absent: 2 },
    { month: 'Feb', present: 19, absent: 1 },
    { month: 'Mar', present: 17, absent: 3 },
    { month: 'Apr', present: 20, absent: 0 },
    { month: 'May', present: 19, absent: 1 },
    { month: 'Jun', present: 16, absent: 2 },
  ];
  
  const gradesData = [
    { subject: 'Mathematics', current: 92, average: 85 },
    { subject: 'Science', current: 88, average: 82 },
    { subject: 'English', current: 90, average: 84 },
    { subject: 'History', current: 85, average: 80 },
    { subject: 'Art', current: 95, average: 88 },
    { subject: 'PE', current: 98, average: 90 },
  ];
  
  const performanceTrendData = [
    { month: 'Jan', score: 88 },
    { month: 'Feb', score: 85 },
    { month: 'Mar', score: 90 },
    { month: 'Apr', score: 92 },
    { month: 'May', score: 94 },
    { month: 'Jun', score: 90 },
  ];
  
  return (
    <MainLayout userRole="parent">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Parent Dashboard</h1>
            <p className="text-muted-foreground">Monitor your child's academic progress and school activities</p>
          </div>
          
          <div className="flex-shrink-0 bg-white shadow-smooth rounded-md flex items-center px-4 py-2">
            <User size={18} className="text-gray-400 mr-2" />
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="text-sm font-medium bg-transparent focus:outline-none pr-6"
            >
              {children.map((child) => (
                <option key={child.id} value={child.name}>{child.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Child overview */}
        <div className="bg-white shadow-smooth-lg rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary-800 font-bold text-2xl">
                {selectedChild.split(' ').map(name => name[0]).join('')}
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-xl font-bold">{selectedChild}</h2>
              <p className="text-gray-500">9th Grade (Section A) • Student ID: 202110089</p>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {childStats.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`rounded-full p-2 ${stat.color} bg-opacity-10 mr-3`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{stat.title}</p>
                      <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 space-y-2 w-full md:w-auto">
              <button className="btn-primary w-full md:w-auto flex items-center justify-center">
                <MessageSquare size={16} className="mr-2" />
                Contact Teachers
              </button>
              <button className="btn-outline w-full md:w-auto flex items-center justify-center">
                <Calendar size={16} className="mr-2" />
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
        
        {/* Messages and events */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Messages */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Recent Messages</CardTitle>
                  <CardDescription>Communication from teachers and staff</CardDescription>
                </div>
                <MessageSquare size={18} className="text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex gap-3">
                      <div className={`h-2 w-2 mt-2 rounded-full flex-shrink-0 ${message.read ? 'bg-gray-300' : 'bg-primary'}`} />
                      <div>
                        <p className="font-medium">{message.from}</p>
                        <p className="text-sm text-gray-600 mt-1">{message.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-xs text-primary font-medium flex items-center justify-center">
                  View all messages
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </CardContent>
          </Card>
          
          {/* Events */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  <CardDescription>School activities and important dates</CardDescription>
                </div>
                <Calendar size={18} className="text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-100 rounded-lg p-4 hover:border-primary/20 transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <div className="flex items-center mt-1">
                          <Clock size={14} className="text-gray-400 mr-1" />
                          <p className="text-sm text-gray-500">{event.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{event.date}</p>
                        {event.type === 'holiday' && (
                          <span className="text-xs badge badge-accent mt-1">Holiday</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-xs text-primary font-medium flex items-center justify-center">
                  View school calendar
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Performance and attendance */}
        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Student Progress</CardTitle>
                <CardDescription>Academic performance and attendance</CardDescription>
              </div>
              <BarChart2 size={18} className="text-gray-400" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="grades">
              <div className="px-6">
                <TabsList className="w-full grid grid-cols-3 mb-6">
                  <TabsTrigger value="grades">Grades</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="grades">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-2">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={gradesData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="subject" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              borderRadius: '8px',
                              border: 'none',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                            }} 
                          />
                          <Legend />
                          <Bar dataKey="current" name="Your Child" fill="#1565C0" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="average" name="Class Average" fill="#90CAF9" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <Card className="shadow-none border border-gray-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Grade Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                          <div>
                            <p className="text-sm text-gray-500">Current GPA</p>
                            <p className="text-2xl font-bold text-primary">3.7</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Class Rank</p>
                            <p className="text-2xl font-bold text-accent">5th</p>
                          </div>
                        </div>
                        <div className="pt-4">
                          <p className="text-sm font-medium mb-2">Grade Distribution</p>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>A (90-100%)</span>
                                <span>3 subjects</span>
                              </div>
                              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500" style={{ width: '50%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>B (80-89%)</span>
                                <span>2 subjects</span>
                              </div>
                              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500" style={{ width: '33%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>C (70-79%)</span>
                                <span>1 subject</span>
                              </div>
                              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500" style={{ width: '17%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-gray-100 pt-4">
                        <button className="btn-outline text-sm w-full">Download Report Card</button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="attendance">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-2">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={attendanceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              borderRadius: '8px',
                              border: 'none',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                            }} 
                          />
                          <Legend />
                          <Bar dataKey="present" name="Present" fill="#4CAF50" stackId="a" />
                          <Bar dataKey="absent" name="Absent" fill="#F44336" stackId="a" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Missed Classes</h4>
                    <div className="space-y-3">
                      {classesMissed.map((missed) => (
                        <div key={missed.id} className="p-3 border border-gray-100 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{missed.subject}</span>
                            <span 
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                missed.status === 'Excused' ? 'bg-green-100 text-green-800' : 
                                'bg-red-100 text-red-800'
                              }`}
                            >
                              {missed.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">Date: {missed.date}</p>
                          <p className="text-xs text-gray-500">Reason: {missed.reason}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border border-dashed border-gray-200 rounded-lg bg-gray-50 mt-4">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Attendance Policy</p>
                          <p className="text-xs text-gray-500">Students must maintain at least 85% attendance to qualify for examinations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="btn-outline text-sm w-full">Request Absence Leave</button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="performance">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-2">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceTrendData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="month" />
                          <YAxis domain={[70, 100]} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              borderRadius: '8px',
                              border: 'none',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                            }} 
                          />
                          <Line type="monotone" dataKey="score" name="Overall Score" stroke="#1565C0" strokeWidth={2} dot={{ r: 5 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <Card className="shadow-none border border-gray-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Teacher Feedback</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 py-0">
                        <div className="divide-y">
                          <div className="py-3">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Ms. Anderson (Math)</span>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={star} className={`w-4 h-4 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">Emma consistently demonstrates strong problem-solving skills and contributes thoughtfully to class discussions.</p>
                          </div>
                          
                          <div className="py-3">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Mr. Wilson (Science)</span>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">Emma shows enthusiasm for experiments but needs to improve on submitting lab reports on time.</p>
                          </div>
                          
                          <div className="py-3">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Mrs. Taylor (English)</span>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={star} className={`w-4 h-4 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">Excellent writing skills. Emma's essays are well-structured and demonstrate critical thinking.</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-gray-100 pt-4">
                        <button className="btn-primary text-sm w-full">Schedule Teacher Meeting</button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="px-6 pt-0">
            <a href="#" className="text-primary hover:text-primary-700 text-sm flex items-center">
              View detailed academic report
              <ChevronRight size={16} className="ml-1" />
            </a>
          </CardFooter>
        </Card>
        
        {/* Fee management summary */}
        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Fee Management</CardTitle>
                <CardDescription>Payment history and due amounts</CardDescription>
              </div>
              <CreditCard size={18} className="text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-none border border-gray-100 md:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Payment History</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Description</th>
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Date</th>
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Amount</th>
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 font-medium">First Quarter Tuition</td>
                          <td className="p-3 text-sm">Jan 15, 2023</td>
                          <td className="p-3 text-sm">$850.00</td>
                          <td className="p-3">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 font-medium">Lab Fee</td>
                          <td className="p-3 text-sm">Feb 05, 2023</td>
                          <td className="p-3 text-sm">$120.00</td>
                          <td className="p-3">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 font-medium">Second Quarter Tuition</td>
                          <td className="p-3 text-sm">Apr 10, 2023</td>
                          <td className="p-3 text-sm">$850.00</td>
                          <td className="p-3">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 font-medium">Field Trip Fee</td>
                          <td className="p-3 text-sm">Jun 01, 2023</td>
                          <td className="p-3 text-sm">$120.00</td>
                          <td className="p-3">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                              Due
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-none border border-gray-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Payment Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Annual Fee</span>
                      <span className="font-medium">$3,600.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Amount Paid</span>
                      <span className="font-medium">$1,820.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Remaining Balance</span>
                      <span className="font-medium">$1,780.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Due Now</span>
                      <span className="font-medium text-destructive">$120.00</span>
                    </div>
                    <div className="pt-2">
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '50.5%' }}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>50.5% paid</span>
                        <span>Next due: Jun 15, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-100 pt-4">
                  <button className="btn-primary text-sm w-full">Make Payment</button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ParentDashboard;

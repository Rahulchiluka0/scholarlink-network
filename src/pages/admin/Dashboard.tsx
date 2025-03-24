
import React from 'react';
import { 
  Users, BookOpen, ClipboardCheck, Calendar, 
  TrendingUp, MessageSquare, Bell, Layers
} from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const AdminDashboard = () => {
  // Mock data for the dashboard
  const statistics = [
    { title: 'Total Students', value: 1248, icon: Users, change: '+8%', color: 'text-primary' },
    { title: 'Total Teachers', value: 86, icon: BookOpen, change: '+3%', color: 'text-secondary' },
    { title: 'Classes', value: 42, icon: Layers, change: '+5%', color: 'text-accent' },
    { title: 'Attendance Rate', value: '94%', icon: ClipboardCheck, change: '+2%', color: 'text-emerald-500' },
  ];
  
  // Chart data
  const attendanceData = [
    { name: 'Mon', present: 92, absent: 8 },
    { name: 'Tue', present: 94, absent: 6 },
    { name: 'Wed', present: 89, absent: 11 },
    { name: 'Thu', present: 95, absent: 5 },
    { name: 'Fri', present: 91, absent: 9 },
  ];
  
  const performanceData = [
    { month: 'Jan', science: 78, math: 83, english: 87, history: 75 },
    { month: 'Feb', science: 80, math: 85, english: 82, history: 78 },
    { month: 'Mar', science: 82, math: 80, english: 85, history: 81 },
    { month: 'Apr', science: 85, math: 87, english: 82, history: 84 },
    { month: 'May', science: 89, math: 92, english: 87, history: 88 },
    { month: 'Jun', science: 87, math: 89, english: 90, history: 85 },
  ];
  
  const gradePieData = [
    { name: 'A', value: 35, color: '#4CAF50' },
    { name: 'B', value: 40, color: '#2196F3' },
    { name: 'C', value: 18, color: '#FFC107' },
    { name: 'D', value: 5, color: '#FF9800' },
    { name: 'F', value: 2, color: '#F44336' },
  ];
  
  const recentNotifications = [
    { id: 1, message: 'New student registration needs approval', time: '10 minutes ago', type: 'action' },
    { id: 2, message: 'Teacher Mark submitted grades for Math 101', time: '1 hour ago', type: 'info' },
    { id: 3, message: 'System maintenance scheduled for Sunday', time: '2 hours ago', type: 'warning' },
    { id: 4, message: 'New curriculum guidelines uploaded', time: '5 hours ago', type: 'info' },
  ];
  
  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Meeting', date: 'Jun 15, 2023', time: '09:00 AM - 12:00 PM' },
    { id: 2, title: 'Science Exhibition', date: 'Jun 20, 2023', time: '01:00 PM - 04:00 PM' },
    { id: 3, title: 'Staff Development Day', date: 'Jun 25, 2023', time: 'All Day' },
  ];
  
  return (
    <MainLayout userRole="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, manage your school at a glance.</p>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <Card key={index} className="dashboard-card overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                    <p className={`mt-1 text-xs font-medium ${stat.color}`}>{stat.change} from last month</p>
                  </div>
                  <div className={`rounded-full p-3 ${stat.color} bg-opacity-10`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="h-1 w-full bg-gray-100">
                  <div className={`h-full w-2/3 ${stat.color.replace('text-', 'bg-')}`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Attendance Chart */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Attendance Overview</CardTitle>
              <CardDescription>Daily attendance records for the current week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={attendanceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                      }} 
                    />
                    <Bar dataKey="present" stackId="a" fill="#4CAF50" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="absent" stackId="a" fill="#F44336" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Academic Performance Chart */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Academic Performance</CardTitle>
              <CardDescription>Average grades by subject over 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis domain={[50, 100]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="math" stroke="#1565C0" activeDot={{ r: 6 }} strokeWidth={2} />
                    <Line type="monotone" dataKey="science" stroke="#4CAF50" activeDot={{ r: 6 }} strokeWidth={2} />
                    <Line type="monotone" dataKey="english" stroke="#FF8F00" activeDot={{ r: 6 }} strokeWidth={2} />
                    <Line type="monotone" dataKey="history" stroke="#7E57C2" activeDot={{ r: 6 }} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Third row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Grade Distribution */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Grade Distribution</CardTitle>
              <CardDescription>Overall grade distribution this semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={gradePieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {gradePieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Notifications */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Recent Notifications</CardTitle>
                  <CardDescription>Latest updates and alerts</CardDescription>
                </div>
                <Bell size={18} className="text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-72 overflow-y-auto">
                {recentNotifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-3 border-b border-gray-100 pb-3">
                    <div className={`h-2 w-2 mt-2 rounded-full ${
                      notification.type === 'action' ? 'bg-primary' : 
                      notification.type === 'warning' ? 'bg-accent' : 
                      'bg-secondary'
                    }`} />
                    <div>
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-xs text-primary font-medium">View all notifications</a>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Events */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  <CardDescription>Scheduled events and activities</CardDescription>
                </div>
                <Calendar size={18} className="text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-72 overflow-y-auto">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-b border-gray-100 pb-3">
                    <p className="text-sm font-medium">{event.title}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{event.date}</p>
                      <p className="text-xs badge badge-primary">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-xs text-primary font-medium">View all events</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;

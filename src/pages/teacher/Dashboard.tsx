
import React, { useState } from 'react';
import { 
  Users, BookOpen, Calendar, CheckCircle, AlertCircle, 
  Clock, ChevronRight, Search, Plus, BarChart2, 
  CheckSquare, XSquare
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
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const TeacherDashboard = () => {
  const [selectedClass, setSelectedClass] = useState('Class 9A');
  
  // Mock data
  const classOptions = ['Class 9A', 'Class 10B', 'Class 11C', 'Class 12A'];
  
  const classStats = [
    { title: 'Total Students', value: 32, icon: Users, color: 'text-primary' },
    { title: 'Subjects Taught', value: 3, icon: BookOpen, color: 'text-secondary' },
    { title: 'Attendance Today', value: '93%', icon: CheckCircle, color: 'text-emerald-500' },
    { title: 'Assignments Due', value: 5, icon: Calendar, color: 'text-accent' },
  ];
  
  const todaySchedule = [
    { id: 1, subject: 'Mathematics', class: 'Class 9A', time: '08:30 - 09:30', room: 'Room 101', status: 'Completed' },
    { id: 2, subject: 'Physics', class: 'Class 11C', time: '10:00 - 11:00', room: 'Room 205', status: 'Ongoing' },
    { id: 3, subject: 'Chemistry', class: 'Class 10B', time: '12:30 - 13:30', room: 'Lab 3', status: 'Upcoming' },
    { id: 4, subject: 'Mathematics', class: 'Class 12A', time: '14:00 - 15:00', room: 'Room 107', status: 'Upcoming' },
  ];
  
  const upcomingAssignments = [
    { id: 1, title: 'Quadratic Equations', class: 'Class 9A', dueDate: 'Jun 15, 2023', submissions: '12/32' },
    { id: 2, title: 'Newton\'s Laws of Motion', class: 'Class 11C', dueDate: 'Jun 17, 2023', submissions: '8/30' },
    { id: 3, title: 'Periodic Table Quiz', class: 'Class 10B', dueDate: 'Jun 20, 2023', submissions: '0/28' },
  ];
  
  const students = [
    { id: 1, name: 'John Doe', attendance: 98, grades: 92, status: 'Present' },
    { id: 2, name: 'Jane Smith', attendance: 95, grades: 88, status: 'Present' },
    { id: 3, name: 'Robert Johnson', attendance: 85, grades: 78, status: 'Absent' },
    { id: 4, name: 'Emily Davis', attendance: 92, grades: 85, status: 'Present' },
    { id: 5, name: 'Michael Brown', attendance: 90, grades: 82, status: 'Present' },
    { id: 6, name: 'Sarah Wilson', attendance: 88, grades: 90, status: 'Late' },
    { id: 7, name: 'David Miller', attendance: 94, grades: 89, status: 'Present' },
    { id: 8, name: 'Lisa Anderson', attendance: 80, grades: 75, status: 'Absent' },
  ];
  
  // Chart data
  const attendanceData = [
    { subject: 'Mathematics', present: 28, absent: 4 },
    { subject: 'Physics', present: 26, absent: 4 },
    { subject: 'Chemistry', present: 25, absent: 3 },
  ];
  
  const gradeDistributionData = [
    { name: 'A', value: 12, color: '#4CAF50' },
    { name: 'B', value: 10, color: '#2196F3' },
    { name: 'C', value: 6, color: '#FFC107' },
    { name: 'D', value: 3, color: '#FF9800' },
    { name: 'F', value: 1, color: '#F44336' },
  ];
  
  return (
    <MainLayout userRole="teacher">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, manage your classes and students.</p>
          </div>
          
          <div className="mt-4 md:mt-0 bg-white shadow-smooth rounded-md flex items-center">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 rounded-md text-sm font-medium bg-transparent focus:outline-none"
            >
              {classOptions.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {classStats.map((stat, index) => (
            <Card key={index} className="dashboard-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`rounded-full p-3 ${stat.color} bg-opacity-10`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Schedule and assignments */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Today's Schedule */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Today's Schedule</CardTitle>
                  <CardDescription>Your classes for today</CardDescription>
                </div>
                <Clock size={18} className="text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {todaySchedule.map((session) => (
                  <div 
                    key={session.id} 
                    className="border-l-4 pl-4 py-2 rounded-sm"
                    style={{ 
                      borderColor: 
                        session.status === 'Completed' ? '#4CAF50' : 
                        session.status === 'Ongoing' ? '#2196F3' : '#FFC107' 
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{session.subject}</p>
                        <p className="text-sm text-gray-500">{session.class} • {session.room}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{session.time}</p>
                        <p 
                          className="text-xs" 
                          style={{ 
                            color: 
                              session.status === 'Completed' ? '#4CAF50' : 
                              session.status === 'Ongoing' ? '#2196F3' : '#FFC107' 
                          }}
                        >
                          {session.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-xs text-primary font-medium flex items-center justify-center">
                  View full schedule
                  <ChevronRight size={14} />
                </a>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Assignments */}
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Assignments</CardTitle>
                  <CardDescription>Recent and upcoming assignments</CardDescription>
                </div>
                <div className="flex space-x-1">
                  <button className="text-gray-500 p-1 hover:bg-gray-100 rounded-md">
                    <Search size={16} />
                  </button>
                  <button className="text-gray-500 p-1 hover:bg-gray-100 rounded-md">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {upcomingAssignments.map((assignment) => (
                  <div key={assignment.id} className="border border-gray-100 rounded-md p-4 hover:border-primary/30 transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-gray-500">{assignment.class}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-700">Due: {assignment.dueDate}</p>
                        <p className="text-xs text-gray-500">Submissions: {assignment.submissions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button className="btn-primary text-sm px-4 py-2 w-full">
                  Create New Assignment
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Class performance and attendance */}
        <div className="grid grid-cols-1 gap-6">
          <Card className="dashboard-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{selectedClass} Overview</CardTitle>
                  <CardDescription>Performance and attendance data</CardDescription>
                </div>
                <BarChart2 size={18} className="text-gray-400" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="students">
                <div className="px-6">
                  <TabsList className="w-full grid grid-cols-3 mb-6">
                    <TabsTrigger value="students">Students</TabsTrigger>
                    <TabsTrigger value="attendance">Attendance</TabsTrigger>
                    <TabsTrigger value="grades">Grades</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="students" className="px-6">
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search students..."
                        className="form-input pl-10"
                      />
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Name</th>
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Attendance</th>
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Grades</th>
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Status</th>
                          <th className="text-left p-3 text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student) => (
                          <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-3">
                              <p className="font-medium">{student.name}</p>
                            </td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <div className="h-2 w-16 bg-gray-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-primary" 
                                    style={{ width: `${student.attendance}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm">{student.attendance}%</span>
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <div className="h-2 w-16 bg-gray-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-secondary" 
                                    style={{ width: `${student.grades}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm">{student.grades}%</span>
                              </div>
                            </td>
                            <td className="p-3">
                              <span 
                                className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  student.status === 'Present' ? 'bg-green-100 text-green-800' : 
                                  student.status === 'Absent' ? 'bg-red-100 text-red-800' : 
                                  'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {student.status}
                              </span>
                            </td>
                            <td className="p-3">
                              <button className="text-primary hover:text-primary-700 text-sm">View Details</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="attendance">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-2">
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={attendanceData} layout="vertical" margin={{ top: 20, right: 30, left: 70, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                            <XAxis type="number" domain={[0, 32]} />
                            <YAxis type="category" dataKey="subject" />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'white', 
                                borderRadius: '8px',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                              }} 
                            />
                            <Bar dataKey="present" stackId="a" fill="#4CAF50" name="Present" />
                            <Bar dataKey="absent" stackId="a" fill="#F44336" name="Absent" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div>
                      <Card className="shadow-none border border-gray-100">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Today's Attendance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-3 bg-green-50 rounded-lg">
                              <CheckSquare className="mx-auto h-6 w-6 text-green-500 mb-1" />
                              <p className="text-xl font-bold text-green-500">28</p>
                              <p className="text-xs text-gray-500">Present</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded-lg">
                              <XSquare className="mx-auto h-6 w-6 text-red-500 mb-1" />
                              <p className="text-xl font-bold text-red-500">4</p>
                              <p className="text-xs text-gray-500">Absent</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Attendance Rate</span>
                              <span className="font-medium">87.5%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '87.5%' }}></div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t border-gray-100 pt-4">
                          <button className="btn-outline text-sm w-full">Take Attendance</button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="grades">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-2">
                      <div className="h-80 overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-100">
                              <th className="text-left p-3 text-sm font-medium text-gray-500">Student</th>
                              <th className="text-left p-3 text-sm font-medium text-gray-500">Quiz 1</th>
                              <th className="text-left p-3 text-sm font-medium text-gray-500">Assignment</th>
                              <th className="text-left p-3 text-sm font-medium text-gray-500">Midterm</th>
                              <th className="text-left p-3 text-sm font-medium text-gray-500">Project</th>
                              <th className="text-left p-3 text-sm font-medium text-gray-500">Final</th>
                              <th className="text-left p-3 text-sm font-medium text-gray-500">Overall</th>
                            </tr>
                          </thead>
                          <tbody>
                            {students.slice(0, 5).map((student) => (
                              <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-3 font-medium">{student.name}</td>
                                <td className="p-3">85%</td>
                                <td className="p-3">92%</td>
                                <td className="p-3">88%</td>
                                <td className="p-3">90%</td>
                                <td className="p-3">86%</td>
                                <td className="p-3 font-medium">{student.grades}%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <Card className="shadow-none border border-gray-100">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Grade Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-60">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={gradeDistributionData}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={40}
                                  outerRadius={80}
                                  paddingAngle={5}
                                  dataKey="value"
                                >
                                  {gradeDistributionData.map((entry, index) => (
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
                                  formatter={(value) => [`${value} students`, 'Count']}
                                />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="grid grid-cols-5 gap-1 text-center mt-2">
                            {gradeDistributionData.map((grade) => (
                              <div key={grade.name} className="text-xs">
                                <div className="w-4 h-4 mx-auto rounded-sm mb-1" style={{ backgroundColor: grade.color }}></div>
                                <span>{grade.name}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t border-gray-100 pt-4">
                          <button className="btn-outline text-sm w-full">Update Grades</button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherDashboard;

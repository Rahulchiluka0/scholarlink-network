
import React from 'react';
import { 
  BookOpen, Clock, Calendar, CheckCircle, FileText, 
  Award, Bell, BarChart2, ChevronRight, AlertCircle,
  ChevronUp, ChevronDown, ArrowUpRight
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
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis, 
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const StudentDashboard = () => {
  // Mock data
  const classesToday = [
    { id: 1, subject: 'Mathematics', time: '08:30 - 09:30', room: 'Room 101', teacher: 'Mr. Smith', status: 'Completed' },
    { id: 2, subject: 'Physics', time: '10:00 - 11:00', room: 'Room 205', teacher: 'Ms. Johnson', status: 'Ongoing' },
    { id: 3, subject: 'English Literature', time: '12:30 - 13:30', room: 'Room 103', teacher: 'Mrs. Davis', status: 'Upcoming' },
    { id: 4, subject: 'Computer Science', time: '14:00 - 15:00', room: 'Lab 2', teacher: 'Mr. Wilson', status: 'Upcoming' },
  ];
  
  const assignments = [
    { id: 1, subject: 'Mathematics', title: 'Quadratic Equations', dueDate: 'Jun 15, 2023', status: 'Pending' },
    { id: 2, subject: 'Physics', title: 'Newton\'s Laws of Motion', dueDate: 'Jun 17, 2023', status: 'Submitted' },
    { id: 3, subject: 'English Literature', title: 'Shakespeare Essay', dueDate: 'Jun 20, 2023', status: 'Pending' },
    { id: 4, subject: 'Computer Science', title: 'Algorithm Design', dueDate: 'Jun 18, 2023', status: 'Graded', grade: 'A' },
  ];
  
  const announcements = [
    { id: 1, title: 'Final Exam Schedule', description: 'The final examination schedule has been published.', date: 'Jun 10, 2023', type: 'important' },
    { id: 2, title: 'Science Exhibition', description: 'Join us for the annual science exhibition next week.', date: 'Jun 8, 2023', type: 'event' },
    { id: 3, title: 'Library Notice', description: 'Return all borrowed books by the end of this month.', date: 'Jun 5, 2023', type: 'notice' },
  ];
  
  const grades = [
    { subject: 'Mathematics', midterm: 85, final: 92, project: 88, overall: 90 },
    { subject: 'Physics', midterm: 78, final: 85, project: 90, overall: 84 },
    { subject: 'English Literature', midterm: 92, final: 88, project: 95, overall: 92 },
    { subject: 'Computer Science', midterm: 95, final: 90, project: 98, overall: 94 },
    { subject: 'History', midterm: 82, final: 78, project: 85, overall: 81 },
    { subject: 'Chemistry', midterm: 75, final: 80, project: 82, overall: 79 },
  ];
  
  // Chart data
  const attendanceData = [
    { month: 'Jan', attendance: 98 },
    { month: 'Feb', attendance: 95 },
    { month: 'Mar', attendance: 97 },
    { month: 'Apr', attendance: 96 },
    { month: 'May', attendance: 98 },
    { month: 'Jun', attendance: 94 },
  ];
  
  const gradesTrendData = [
    { month: 'Jan', math: 85, physics: 78, english: 90, cs: 92 },
    { month: 'Feb', math: 87, physics: 80, english: 88, cs: 90 },
    { month: 'Mar', math: 84, physics: 83, english: 91, cs: 94 },
    { month: 'Apr', math: 88, physics: 81, english: 89, cs: 93 },
    { month: 'May', math: 90, physics: 84, english: 92, cs: 95 },
    { month: 'Jun', math: 92, physics: 85, english: 90, cs: 94 },
  ];
  
  const subjectDistributionData = [
    { name: 'Mathematics', value: 4, color: '#1565C0' },
    { name: 'Science', value: 5, color: '#4CAF50' },
    { name: 'Languages', value: 3, color: '#FF8F00' },
    { name: 'Social Studies', value: 2, color: '#7E57C2' },
    { name: 'Arts', value: 1, color: '#EC407A' },
  ];
  
  return (
    <MainLayout userRole="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, your academic journey at a glance.</p>
        </div>
        
        {/* Overview cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">My Courses</p>
                  <p className="mt-2 text-3xl font-bold">6</p>
                  <p className="mt-1 text-xs text-primary">All courses in good standing</p>
                </div>
                <div className="rounded-full p-3 text-primary bg-primary/10">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Attendance</p>
                  <p className="mt-2 text-3xl font-bold">96%</p>
                  <div className="mt-1 flex items-center text-xs text-emerald-500">
                    <ChevronUp className="h-3 w-3 mr-1" />
                    <span>2% from last month</span>
                  </div>
                </div>
                <div className="rounded-full p-3 text-emerald-500 bg-emerald-50">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Assignments</p>
                  <p className="mt-2 text-3xl font-bold">3</p>
                  <p className="mt-1 text-xs text-accent">Due this week</p>
                </div>
                <div className="rounded-full p-3 text-accent bg-accent/10">
                  <FileText className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">GPA</p>
                  <p className="mt-2 text-3xl font-bold">3.8</p>
                  <div className="mt-1 flex items-center text-xs text-amber-500">
                    <ChevronDown className="h-3 w-3 mr-1" />
                    <span>0.2 from last semester</span>
                  </div>
                </div>
                <div className="rounded-full p-3 text-secondary bg-secondary/10">
                  <Award className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Schedule and assignments */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-8">
          {/* Today's Schedule */}
          <Card className="dashboard-card md:col-span-5">
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
              <div className="space-y-4">
                {classesToday.map((class_) => (
                  <div 
                    key={class_.id} 
                    className="border-l-4 pl-4 py-2 rounded-sm"
                    style={{ 
                      borderColor: 
                        class_.status === 'Completed' ? '#4CAF50' : 
                        class_.status === 'Ongoing' ? '#2196F3' : '#FFC107' 
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{class_.subject}</p>
                        <p className="text-sm text-gray-500">{class_.teacher} • {class_.room}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{class_.time}</p>
                        <p 
                          className="text-xs" 
                          style={{ 
                            color: 
                              class_.status === 'Completed' ? '#4CAF50' : 
                              class_.status === 'Ongoing' ? '#2196F3' : '#FFC107' 
                          }}
                        >
                          {class_.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-xs text-primary font-medium flex items-center justify-center">
                  View full timetable
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </CardContent>
          </Card>
          
          {/* Announcements */}
          <Card className="dashboard-card md:col-span-3">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Announcements</CardTitle>
                  <CardDescription>Latest school updates</CardDescription>
                </div>
                <Bell size={18} className="text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex items-start gap-3">
                      <div 
                        className={`h-2 w-2 mt-2 rounded-full flex-shrink-0 ${
                          announcement.type === 'important' ? 'bg-destructive' : 
                          announcement.type === 'event' ? 'bg-accent' : 
                          'bg-secondary'
                        }`} 
                      />
                      <div>
                        <p className="font-medium">{announcement.title}</p>
                        <p className="text-sm text-gray-500 mt-1">{announcement.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{announcement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-xs text-primary font-medium flex items-center justify-center">
                  View all announcements
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Academic progress */}
        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Academic Progress</CardTitle>
                <CardDescription>Your performance across subjects</CardDescription>
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
                  <TabsTrigger value="subjects">Subjects</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="grades">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-2">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={gradesTrendData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="month" />
                          <YAxis domain={[60, 100]} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              borderRadius: '8px',
                              border: 'none',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                            }} 
                          />
                          <Line type="monotone" dataKey="math" name="Mathematics" stroke="#1565C0" activeDot={{ r: 6 }} strokeWidth={2} />
                          <Line type="monotone" dataKey="physics" name="Physics" stroke="#4CAF50" activeDot={{ r: 6 }} strokeWidth={2} />
                          <Line type="monotone" dataKey="english" name="English" stroke="#FF8F00" activeDot={{ r: 6 }} strokeWidth={2} />
                          <Line type="monotone" dataKey="cs" name="Comp. Science" stroke="#7E57C2" activeDot={{ r: 6 }} strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Current Grades</h4>
                    <div className="space-y-4">
                      {grades.slice(0, 4).map((subject) => (
                        <div key={subject.subject} className="border-b border-gray-100 pb-3 last:border-b-0">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{subject.subject}</span>
                            <div className="flex items-center">
                              <span className="text-sm font-bold">{subject.overall}%</span>
                              <ArrowUpRight size={14} className="ml-1 text-emerald-500" />
                            </div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full"
                              style={{ 
                                width: `${subject.overall}%`,
                                backgroundColor: 
                                  subject.overall >= 90 ? '#4CAF50' :
                                  subject.overall >= 80 ? '#2196F3' :
                                  subject.overall >= 70 ? '#FF8F00' :
                                  '#F44336'
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <button className="btn-outline text-sm w-full">View All Subjects</button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="attendance">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-2">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={attendanceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="month" />
                          <YAxis domain={[80, 100]} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              borderRadius: '8px',
                              border: 'none',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                            }} 
                          />
                          <Area type="monotone" dataKey="attendance" name="Attendance %" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <Card className="shadow-none border border-gray-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Attendance Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-sm text-gray-500">Present Days</p>
                            <p className="text-xl font-bold text-green-500">94</p>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg">
                            <p className="text-sm text-gray-500">Absent Days</p>
                            <p className="text-xl font-bold text-red-500">4</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Year Attendance</span>
                            <span className="font-medium">96%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '96%' }}></div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="p-3 border border-dashed border-gray-200 rounded-lg bg-gray-50">
                            <div className="flex items-start gap-2">
                              <AlertCircle size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">Note:</p>
                                <p className="text-xs text-gray-500">Minimum required attendance is 85%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-gray-100 pt-4">
                        <button className="btn-outline text-sm w-full">Request Leave</button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="subjects">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div>
                    <h4 className="font-medium mb-4">Subject Distribution</h4>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={subjectDistributionData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {subjectDistributionData.map((entry, index) => (
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
                            formatter={(value) => [`${value} hours/week`, 'Hours']}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center mt-4">
                      {subjectDistributionData.map((subject) => (
                        <div key={subject.name} className="mb-2">
                          <div className="w-4 h-4 mx-auto rounded-sm mb-1" style={{ backgroundColor: subject.color }}></div>
                          <span className="text-xs">{subject.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium mb-4">Active Assignments</h4>
                    <div className="space-y-3">
                      {assignments.map((assignment) => (
                        <div 
                          key={assignment.id} 
                          className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
                        >
                          <div className="flex justify-between">
                            <div>
                              <div className="flex items-center mb-1">
                                <span 
                                  className="w-2 h-2 rounded-full mr-2"
                                  style={{ 
                                    backgroundColor: 
                                      assignment.subject === 'Mathematics' ? '#1565C0' : 
                                      assignment.subject === 'Physics' ? '#4CAF50' : 
                                      assignment.subject === 'English Literature' ? '#FF8F00' : 
                                      '#7E57C2'
                                  }}
                                ></span>
                                <span className="text-sm text-gray-500">{assignment.subject}</span>
                              </div>
                              <p className="font-medium">{assignment.title}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm">Due: {assignment.dueDate}</p>
                              <div className="mt-1">
                                {assignment.status === 'Pending' && (
                                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                                    Pending
                                  </span>
                                )}
                                {assignment.status === 'Submitted' && (
                                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                    Submitted
                                  </span>
                                )}
                                {assignment.status === 'Graded' && (
                                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                    Grade: {assignment.grade}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <button className="btn-primary text-sm w-full">View All Assignments</button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;

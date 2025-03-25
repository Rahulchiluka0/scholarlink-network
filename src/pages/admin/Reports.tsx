
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, BarChart3, PieChart, LineChart, Table } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend,
  ResponsiveContainer,
  PieChart as RPieChart,
  Pie,
  Cell,
  LineChart as RLineChart,
  Line
} from 'recharts';

const Reports = () => {
  // Mock data for attendance report
  const attendanceData = [
    { grade: '7th', attendance: 95 },
    { grade: '8th', attendance: 92 },
    { grade: '9th', attendance: 88 },
    { grade: '10th', attendance: 91 },
    { grade: '11th', attendance: 86 },
    { grade: '12th', attendance: 83 },
  ];

  // Mock data for performance report
  const performanceData = [
    { subject: 'Math', average: 82 },
    { subject: 'Science', average: 78 },
    { subject: 'English', average: 85 },
    { subject: 'History', average: 76 },
    { subject: 'Art', average: 92 },
    { subject: 'P.E.', average: 88 },
  ];

  // Mock data for enrollment report
  const enrollmentData = [
    { name: '7th Grade', value: 120 },
    { name: '8th Grade', value: 145 },
    { name: '9th Grade', value: 135 },
    { name: '10th Grade', value: 130 },
    { name: '11th Grade', value: 110 },
    { name: '12th Grade', value: 105 },
  ];

  // Mock data for trend report
  const trendData = [
    { month: 'Sep', attendance: 94, performance: 82 },
    { month: 'Oct', attendance: 92, performance: 83 },
    { month: 'Nov', attendance: 88, performance: 81 },
    { month: 'Dec', attendance: 85, performance: 78 },
    { month: 'Jan', attendance: 90, performance: 80 },
    { month: 'Feb', attendance: 92, performance: 83 },
    { month: 'Mar', attendance: 93, performance: 85 },
  ];

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Mock report summaries
  const reportSummaries = [
    { 
      id: 1, 
      name: 'Annual School Performance', 
      type: 'Academic',
      lastGenerated: 'Jun 15, 2023',
      format: 'PDF'
    },
    { 
      id: 2, 
      name: 'Quarterly Attendance Summary', 
      type: 'Attendance',
      lastGenerated: 'Apr 02, 2023',
      format: 'Excel'
    },
    { 
      id: 3, 
      name: 'Financial Year Summary', 
      type: 'Finance',
      lastGenerated: 'Mar 31, 2023',
      format: 'PDF'
    },
    { 
      id: 4, 
      name: 'Staff Performance Review', 
      type: 'HR',
      lastGenerated: 'May 20, 2023',
      format: 'PDF'
    },
  ];

  return (
    <MainLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
            <p className="text-muted-foreground">View and generate school reports.</p>
          </div>
          <Button variant="outline" className="flex items-center gap-1">
            <Download size={16} />
            <span>Export All</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Available Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {reportSummaries.map((report) => (
                  <div key={report.id} className="flex justify-between items-center py-2 border-b last:border-0">
                    <div>
                      <p className="text-sm font-medium">{report.name}</p>
                      <p className="text-xs text-muted-foreground">{report.type} • {report.format}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-3">
            <Tabs defaultValue="attendance" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="attendance" className="flex items-center gap-1">
                  <BarChart3 size={14} />
                  <span className="hidden sm:inline">Attendance</span>
                </TabsTrigger>
                <TabsTrigger value="performance" className="flex items-center gap-1">
                  <BarChart3 size={14} />
                  <span className="hidden sm:inline">Performance</span>
                </TabsTrigger>
                <TabsTrigger value="enrollment" className="flex items-center gap-1">
                  <PieChart size={14} />
                  <span className="hidden sm:inline">Enrollment</span>
                </TabsTrigger>
                <TabsTrigger value="trends" className="flex items-center gap-1">
                  <LineChart size={14} />
                  <span className="hidden sm:inline">Trends</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="attendance" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Report</CardTitle>
                    <CardDescription>Average attendance rate by grade level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={attendanceData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="grade" />
                          <YAxis domain={[75, 100]} />
                          <RechartsTooltip />
                          <Legend />
                          <Bar dataKey="attendance" name="Attendance %" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="performance" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Performance</CardTitle>
                    <CardDescription>Average scores by subject</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={performanceData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="subject" />
                          <YAxis domain={[50, 100]} />
                          <RechartsTooltip />
                          <Legend />
                          <Bar dataKey="average" name="Average Score" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="enrollment" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Enrollment</CardTitle>
                    <CardDescription>Distribution by grade level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RPieChart>
                          <Pie
                            data={enrollmentData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {enrollmentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <RechartsTooltip />
                          <Legend />
                        </RPieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trends" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Trend Analysis</CardTitle>
                    <CardDescription>Attendance and performance trends over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RLineChart
                          data={trendData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis domain={[70, 100]} />
                          <RechartsTooltip />
                          <Legend />
                          <Line type="monotone" dataKey="attendance" name="Attendance %" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="performance" name="Performance %" stroke="#82ca9d" />
                        </RLineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reports;

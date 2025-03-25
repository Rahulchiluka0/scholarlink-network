
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle, XCircle, AlertCircle, PieChart } from 'lucide-react';
import { 
  ResponsiveContainer, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  Tooltip as RechartsTooltip,
  Legend
} from 'recharts';

const Attendance = () => {
  // Mock data for attendance summary
  const summaryData = {
    present: 85,
    absent: 5,
    late: 3,
    excused: 7,
  };
  
  // Pie chart data
  const pieData = [
    { name: 'Present', value: summaryData.present, color: '#4ade80' },
    { name: 'Absent', value: summaryData.absent, color: '#f87171' },
    { name: 'Late', value: summaryData.late, color: '#facc15' },
    { name: 'Excused', value: summaryData.excused, color: '#60a5fa' },
  ];
  
  // Mock data for recent attendance
  const recentAttendance = [
    { date: '2024-03-01', status: 'present', note: '' },
    { date: '2024-03-02', status: 'present', note: '' },
    { date: '2024-03-03', status: 'absent', note: 'Doctor appointment' },
    { date: '2024-03-04', status: 'present', note: '' },
    { date: '2024-03-05', status: 'late', note: 'Bus delay' },
    { date: '2024-03-06', status: 'present', note: '' },
    { date: '2024-03-07', status: 'present', note: '' },
    { date: '2024-03-08', status: 'present', note: '' },
    { date: '2024-03-09', status: 'excused', note: 'Family event' },
    { date: '2024-03-10', status: 'present', note: '' },
  ];

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };
  
  // Get status icon
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'late':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'excused':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  return (
    <MainLayout userRole="parent">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
          <p className="text-muted-foreground">Track your child's attendance records.</p>
        </div>
        
        {/* Attendance Summary */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Attendance Summary</CardTitle>
              <CardDescription>Current academic year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Attendance Statistics</CardTitle>
              <CardDescription>Breakdown of attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <span>Present</span>
                  </div>
                  <div>
                    <span className="font-medium">{summaryData.present} days</span>
                    <span className="text-sm text-muted-foreground ml-2">({summaryData.present}%)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                    <span>Absent</span>
                  </div>
                  <div>
                    <span className="font-medium">{summaryData.absent} days</span>
                    <span className="text-sm text-muted-foreground ml-2">({summaryData.absent}%)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                    <span>Late</span>
                  </div>
                  <div>
                    <span className="font-medium">{summaryData.late} days</span>
                    <span className="text-sm text-muted-foreground ml-2">({summaryData.late}%)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                    <span>Excused</span>
                  </div>
                  <div>
                    <span className="font-medium">{summaryData.excused} days</span>
                    <span className="text-sm text-muted-foreground ml-2">({summaryData.excused}%)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Attendance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Recent Attendance</CardTitle>
            <CardDescription>Last 10 school days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentAttendance.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50">
                  <div className="flex items-center">
                    {getStatusIcon(day.status)}
                    <span className="ml-3">{formatDate(day.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="capitalize text-sm">{day.status}</span>
                    {day.note && (
                      <span className="ml-2 text-sm text-muted-foreground">
                        - {day.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Attendance;

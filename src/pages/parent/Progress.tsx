
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, TrendingUp, BookOpen, Award } from 'lucide-react';
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

const Progress = () => {
  // Mock data for subject performance
  const subjectData = [
    { subject: 'Math', current: 85, previous: 78 },
    { subject: 'Science', current: 92, previous: 88 },
    { subject: 'English', current: 80, previous: 75 },
    { subject: 'History', current: 88, previous: 82 },
    { subject: 'Art', current: 95, previous: 90 },
  ];

  // Mock data for progress over time
  const progressData = [
    { month: 'Sep', math: 78, science: 82, english: 70 },
    { month: 'Oct', math: 80, science: 85, english: 72 },
    { month: 'Nov', math: 82, science: 88, english: 75 },
    { month: 'Dec', math: 85, science: 90, english: 78 },
    { month: 'Jan', math: 85, science: 92, english: 80 },
  ];

  // Mock achievements
  const achievements = [
    { id: 1, title: 'Perfect Attendance', date: 'December 2023', icon: Trophy },
    { id: 2, title: 'Science Fair Winner', date: 'November 2023', icon: Award },
    { id: 3, title: 'Most Improved in Math', date: 'October 2023', icon: TrendingUp },
  ];

  return (
    <MainLayout userRole="parent">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Academic Progress</h1>
          <p className="text-muted-foreground">Track your child's academic performance and achievements.</p>
        </div>
        
        {/* Subject Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Subject Performance</CardTitle>
            <CardDescription>Current term compared to previous term</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={subjectData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" name="Current Term" fill="#8884d8" />
                  <Bar dataKey="previous" name="Previous Term" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Progress Over Time */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Progress Over Time</CardTitle>
            <CardDescription>Performance in core subjects over the last 5 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={progressData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="math" name="Mathematics" stroke="#8884d8" />
                  <Line type="monotone" dataKey="science" name="Science" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="english" name="English" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Recent Achievements</CardTitle>
            <CardDescription>Recognition and awards received</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
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

export default Progress;

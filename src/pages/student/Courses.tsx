
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from 'lucide-react';

const Courses = () => {
  // Mock data
  const courses = [
    { id: 1, name: 'Mathematics', teacher: 'Mr. Smith', schedule: 'Mon, Wed, Fri 9:00 AM', room: '101', color: '#1565C0' },
    { id: 2, name: 'Physics', teacher: 'Ms. Johnson', schedule: 'Tue, Thu 10:30 AM', room: '205', color: '#4CAF50' },
    { id: 3, name: 'English Literature', teacher: 'Mrs. Davis', schedule: 'Mon, Wed 1:00 PM', room: '103', color: '#FF8F00' },
    { id: 4, name: 'Computer Science', teacher: 'Mr. Wilson', schedule: 'Tue, Fri 2:30 PM', room: 'Lab 2', color: '#7E57C2' },
    { id: 5, name: 'History', teacher: 'Ms. Adams', schedule: 'Mon, Thu 11:00 AM', room: '304', color: '#E91E63' },
    { id: 6, name: 'Chemistry', teacher: 'Dr. Miller', schedule: 'Wed, Fri 11:30 AM', room: 'Lab 1', color: '#009688' },
  ];

  return (
    <MainLayout userRole="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground">All your enrolled courses for this semester.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="dashboard-card overflow-hidden">
              <div className="h-2" style={{ backgroundColor: course.color }}></div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <div className="rounded-full p-2" style={{ backgroundColor: `${course.color}20` }}>
                    <Book className="h-5 w-5" style={{ color: course.color }} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Teacher:</span>
                    <span className="text-sm font-medium">{course.teacher}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Schedule:</span>
                    <span className="text-sm font-medium">{course.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Room:</span>
                    <span className="text-sm font-medium">{course.room}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full btn-outline text-sm">View Details</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;

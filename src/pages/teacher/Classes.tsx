
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, CalendarDays } from 'lucide-react';

const Classes = () => {
  // Mock class data
  const classes = [
    { id: 1, name: 'Mathematics 101', students: 32, schedule: 'Mon, Wed, Fri 9:00 AM', room: 'A-201' },
    { id: 2, name: 'Physics Fundamentals', students: 24, schedule: 'Tue, Thu 11:00 AM', room: 'B-105' },
    { id: 3, name: 'Computer Science', students: 28, schedule: 'Mon, Wed 2:00 PM', room: 'C-302' },
    { id: 4, name: 'English Literature', students: 30, schedule: 'Tue, Thu 1:30 PM', room: 'A-105' },
  ];

  return (
    <MainLayout userRole="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Classes</h1>
          <p className="text-muted-foreground">Manage your classes and teaching schedule.</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem) => (
            <Card key={classItem.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  {classItem.name}
                </CardTitle>
                <CardDescription>Room {classItem.room}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{classItem.students} students</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{classItem.schedule}</span>
                  </div>
                  <div className="pt-2">
                    <button className="text-sm text-primary hover:underline">View details</button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Classes;

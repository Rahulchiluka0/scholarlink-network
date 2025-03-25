
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, CalendarDays, BookOpen, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Children = () => {
  // Mock children data
  const children = [
    { 
      id: 1, 
      name: 'Emma Smith', 
      grade: '10th Grade',
      avatar: '/placeholder.svg',
      attendance: '95%',
      subjects: 'Math, Science, History, English',
      averageGrade: 'A-'
    },
    { 
      id: 2, 
      name: 'Jack Smith', 
      grade: '8th Grade',
      avatar: '/placeholder.svg',
      attendance: '92%',
      subjects: 'Math, Science, Geography, English',
      averageGrade: 'B+'
    },
  ];

  return (
    <MainLayout userRole="parent">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Children</h1>
          <p className="text-muted-foreground">View and manage your children's school information.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {children.map((child) => (
            <Card key={child.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={child.avatar} alt={child.name} />
                    <AvatarFallback>{child.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{child.name}</CardTitle>
                    <CardDescription>{child.grade}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Attendance: {child.attendance}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Subjects: {child.subjects}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Award className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Average Grade: {child.averageGrade}</span>
                  </div>
                  <div className="pt-3 flex space-x-2">
                    <button className="text-sm text-primary hover:underline">View details</button>
                    <button className="text-sm text-primary hover:underline">Contact teachers</button>
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

export default Children;

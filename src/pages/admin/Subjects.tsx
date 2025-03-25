
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, BookOpen, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Subjects = () => {
  // Mock subjects data
  const subjects = [
    { 
      id: 1, 
      name: 'Mathematics', 
      code: 'MATH101',
      department: 'Mathematics',
      credits: 4,
      grade_levels: [9, 10, 11, 12],
      description: 'Fundamentals of algebra, geometry, and calculus',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Physics', 
      code: 'PHYS101',
      department: 'Science',
      credits: 4,
      grade_levels: [10, 11, 12],
      description: 'Mechanics, thermodynamics, and basic principles',
      status: 'active'
    },
    { 
      id: 3, 
      name: 'English Literature', 
      code: 'ENG201',
      department: 'Humanities',
      credits: 3,
      grade_levels: [9, 10, 11, 12],
      description: 'Analysis of classic and contemporary literature',
      status: 'active'
    },
    { 
      id: 4, 
      name: 'History', 
      code: 'HIST101',
      department: 'Humanities',
      credits: 3,
      grade_levels: [9, 10],
      description: 'World history from ancient civilizations to modern day',
      status: 'inactive'
    },
    { 
      id: 5, 
      name: 'Computer Science', 
      code: 'CS101',
      department: 'Technology',
      credits: 3,
      grade_levels: [10, 11, 12],
      description: 'Programming fundamentals and computer systems',
      status: 'active'
    },
    { 
      id: 6, 
      name: 'Biology', 
      code: 'BIO101',
      department: 'Science',
      credits: 4,
      grade_levels: [9, 10, 11],
      description: 'Study of living organisms and natural systems',
      status: 'active'
    }
  ];

  return (
    <MainLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Subjects</h1>
            <p className="text-muted-foreground">Manage all academic subjects.</p>
          </div>
          <Button className="flex items-center gap-1">
            <PlusCircle size={16} />
            <span>Add Subject</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <Card key={subject.id} className={subject.status === 'inactive' ? 'opacity-70' : ''}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg">{subject.name}</CardTitle>
                  <Badge variant={subject.status === 'active' ? 'default' : 'secondary'} className="capitalize">
                    {subject.status}
                  </Badge>
                </div>
                <CardDescription>
                  {subject.code} | {subject.department}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Credits: {subject.credits}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Grade Levels: {subject.grade_levels.join(', ')}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{subject.description}</p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                    <Button variant="outline" size="sm" className="flex-1">Edit</Button>
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

export default Subjects;

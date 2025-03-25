
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Users, BookOpen, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Classes = () => {
  // Mock classes data
  const classes = [
    { 
      id: 1, 
      name: 'Mathematics - Grade 10A', 
      teacher: 'John Doe',
      students: 28,
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      room: 'Room 101',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Science - Grade 10B', 
      teacher: 'Jane Smith',
      students: 25,
      schedule: 'Tue, Thu - 10:30 AM',
      room: 'Lab 3',
      status: 'active'
    },
    { 
      id: 3, 
      name: 'English - Grade 11A', 
      teacher: 'Michael Brown',
      students: 22,
      schedule: 'Mon, Wed - 1:00 PM',
      room: 'Room 205',
      status: 'active'
    },
    { 
      id: 4, 
      name: 'History - Grade 9C', 
      teacher: 'Sarah Johnson',
      students: 26,
      schedule: 'Tue, Thu - 11:45 AM',
      room: 'Room 110',
      status: 'inactive'
    },
  ];

  return (
    <MainLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
            <p className="text-muted-foreground">Manage all classes in the school.</p>
          </div>
          <Button className="flex items-center gap-1">
            <PlusCircle size={16} />
            <span>Add Class</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {classes.map((cls) => (
            <Card key={cls.id} className={cls.status === 'inactive' ? 'opacity-70' : ''}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg">{cls.name}</CardTitle>
                  <Badge variant={cls.status === 'active' ? 'default' : 'secondary'} className="capitalize">
                    {cls.status}
                  </Badge>
                </div>
                <CardDescription>
                  Teacher: {cls.teacher}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{cls.students} Students</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{cls.schedule}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{cls.room}</span>
                  </div>
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

export default Classes;

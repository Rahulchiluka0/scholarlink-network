
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Download, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Timetables = () => {
  // Mock timetable data
  const timetables = [
    { 
      id: 1, 
      name: 'Fall 2023 - High School', 
      classes: 42,
      lastUpdated: 'Sep 5, 2023',
      activeFrom: 'Sep 10, 2023',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Spring 2024 - High School', 
      classes: 40,
      lastUpdated: 'Jan 3, 2024',
      activeFrom: 'Jan 15, 2024',
      status: 'pending'
    },
    { 
      id: 3, 
      name: 'Summer 2023 - Special Courses', 
      classes: 15,
      lastUpdated: 'May 20, 2023',
      activeFrom: 'Jun 5, 2023',
      status: 'archived'
    },
  ];

  // Mock schedule data for timetable view
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['8:00 - 8:50', '9:00 - 9:50', '10:00 - 10:50', '11:00 - 11:50', '12:00 - 12:50', '1:00 - 1:50', '2:00 - 2:50', '3:00 - 3:50'];
  
  const scheduleData = {
    'Monday': {
      '8:00 - 8:50': { subject: 'Mathematics', teacher: 'J. Doe', room: '101' },
      '9:00 - 9:50': { subject: 'Physics', teacher: 'J. Smith', room: 'Lab 3' },
      '10:00 - 10:50': { subject: 'English', teacher: 'M. Johnson', room: '205' },
      '11:00 - 11:50': { subject: '', teacher: '', room: '' },
      '12:00 - 12:50': { subject: 'Lunch', teacher: '', room: 'Cafeteria' },
      '1:00 - 1:50': { subject: 'History', teacher: 'S. Williams', room: '110' },
      '2:00 - 2:50': { subject: 'Computer Science', teacher: 'R. Brown', room: 'Lab 1' },
      '3:00 - 3:50': { subject: 'Study Hall', teacher: 'Various', room: 'Library' },
    },
    'Tuesday': {
      '8:00 - 8:50': { subject: 'Biology', teacher: 'A. Garcia', room: 'Lab 2' },
      '9:00 - 9:50': { subject: 'Mathematics', teacher: 'J. Doe', room: '101' },
      '10:00 - 10:50': { subject: 'Art', teacher: 'L. Chen', room: 'Art Studio' },
      '11:00 - 11:50': { subject: 'Geography', teacher: 'D. Wilson', room: '112' },
      '12:00 - 12:50': { subject: 'Lunch', teacher: '', room: 'Cafeteria' },
      '1:00 - 1:50': { subject: 'Physical Education', teacher: 'T. Moore', room: 'Gym' },
      '2:00 - 2:50': { subject: 'Music', teacher: 'R. Taylor', room: 'Music Room' },
      '3:00 - 3:50': { subject: 'Club Activities', teacher: 'Various', room: 'Various' },
    },
    'Wednesday': {
      '8:00 - 8:50': { subject: 'Mathematics', teacher: 'J. Doe', room: '101' },
      '9:00 - 9:50': { subject: 'Chemistry', teacher: 'E. Adams', room: 'Lab 4' },
      '10:00 - 10:50': { subject: 'English', teacher: 'M. Johnson', room: '205' },
      '11:00 - 11:50': { subject: 'French', teacher: 'S. Martin', room: '118' },
      '12:00 - 12:50': { subject: 'Lunch', teacher: '', room: 'Cafeteria' },
      '1:00 - 1:50': { subject: 'History', teacher: 'S. Williams', room: '110' },
      '2:00 - 2:50': { subject: 'Computer Science', teacher: 'R. Brown', room: 'Lab 1' },
      '3:00 - 3:50': { subject: 'Study Hall', teacher: 'Various', room: 'Library' },
    },
    'Thursday': {
      '8:00 - 8:50': { subject: 'Biology', teacher: 'A. Garcia', room: 'Lab 2' },
      '9:00 - 9:50': { subject: 'Mathematics', teacher: 'J. Doe', room: '101' },
      '10:00 - 10:50': { subject: 'Art', teacher: 'L. Chen', room: 'Art Studio' },
      '11:00 - 11:50': { subject: 'Geography', teacher: 'D. Wilson', room: '112' },
      '12:00 - 12:50': { subject: 'Lunch', teacher: '', room: 'Cafeteria' },
      '1:00 - 1:50': { subject: 'Physical Education', teacher: 'T. Moore', room: 'Gym' },
      '2:00 - 2:50': { subject: 'Music', teacher: 'R. Taylor', room: 'Music Room' },
      '3:00 - 3:50': { subject: 'Club Activities', teacher: 'Various', room: 'Various' },
    },
    'Friday': {
      '8:00 - 8:50': { subject: 'Mathematics', teacher: 'J. Doe', room: '101' },
      '9:00 - 9:50': { subject: 'Physics', teacher: 'J. Smith', room: 'Lab 3' },
      '10:00 - 10:50': { subject: 'English', teacher: 'M. Johnson', room: '205' },
      '11:00 - 11:50': { subject: 'Spanish', teacher: 'M. Rodriguez', room: '120' },
      '12:00 - 12:50': { subject: 'Lunch', teacher: '', room: 'Cafeteria' },
      '1:00 - 1:50': { subject: 'History', teacher: 'S. Williams', room: '110' },
      '2:00 - 2:50': { subject: 'Study Hall', teacher: 'Various', room: 'Library' },
      '3:00 - 3:50': { subject: 'Assembly', teacher: 'Principal', room: 'Auditorium' },
    }
  };

  return (
    <MainLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Timetables</h1>
            <p className="text-muted-foreground">Manage school timetables and schedules.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <Download size={16} />
              <span>Export</span>
            </Button>
            <Button className="flex items-center gap-1">
              <PlusCircle size={16} />
              <span>Create Timetable</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="view">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="view">View Timetables</TabsTrigger>
            <TabsTrigger value="schedule">Schedule View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="view" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {timetables.map((timetable) => (
                <Card key={timetable.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle className="text-lg">{timetable.name}</CardTitle>
                      <Badge 
                        variant={
                          timetable.status === 'active' ? 'default' : 
                          timetable.status === 'pending' ? 'outline' : 'secondary'
                        } 
                        className="capitalize"
                      >
                        {timetable.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      {timetable.classes} Classes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Active from: {timetable.activeFrom}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Last updated: {timetable.lastUpdated}</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">View</Button>
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download size={14} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="schedule" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Class 10A Weekly Schedule</CardTitle>
                <CardDescription>
                  Fall 2023 Semester
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border bg-gray-50">Time</th>
                        {weekdays.map(day => (
                          <th key={day} className="px-4 py-2 border bg-gray-50">{day}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map(timeSlot => (
                        <tr key={timeSlot}>
                          <td className="px-4 py-2 border font-medium bg-gray-50">{timeSlot}</td>
                          {weekdays.map(day => {
                            const cell = scheduleData[day][timeSlot];
                            return (
                              <td key={`${day}-${timeSlot}`} className="px-4 py-2 border">
                                {cell.subject ? (
                                  <div>
                                    <div className="font-medium">{cell.subject}</div>
                                    {cell.teacher && <div className="text-xs text-muted-foreground">{cell.teacher}</div>}
                                    {cell.room && <div className="text-xs text-muted-foreground">Room: {cell.room}</div>}
                                  </div>
                                ) : null}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Timetables;

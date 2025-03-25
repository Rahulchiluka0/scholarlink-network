
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Check, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState('Mathematics 101');
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  
  // Mock class data
  const classes = [
    { id: 1, name: 'Mathematics 101' },
    { id: 2, name: 'Physics Fundamentals' },
    { id: 3, name: 'Computer Science' },
    { id: 4, name: 'English Literature' },
  ];
  
  // Mock student data for the selected class
  const students = [
    { id: 1, name: 'Alice Johnson', status: 'present' },
    { id: 2, name: 'Bob Smith', status: 'present' },
    { id: 3, name: 'Charlie Brown', status: 'absent' },
    { id: 4, name: 'Diana Ross', status: 'present' },
    { id: 5, name: 'Ethan Hunt', status: 'late' },
    { id: 6, name: 'Fiona Apple', status: 'present' },
    { id: 7, name: 'George Miller', status: 'present' },
    { id: 8, name: 'Hannah Montana', status: 'absent' },
  ];
  
  // Previous attendance dates
  const attendanceDates = [
    format(new Date(), 'yyyy-MM-dd'),
    format(new Date(Date.now() - 86400000), 'yyyy-MM-dd'), // yesterday
    format(new Date(Date.now() - 86400000 * 2), 'yyyy-MM-dd'), // day before yesterday
    format(new Date(Date.now() - 86400000 * 3), 'yyyy-MM-dd'),
    format(new Date(Date.now() - 86400000 * 4), 'yyyy-MM-dd'),
  ];
  
  const handleStatusChange = (studentId: number, newStatus: 'present' | 'absent' | 'late') => {
    // In a real app, this would update the state and potentially send data to a server
    console.log(`Updated student ${studentId} status to ${newStatus}`);
  };

  return (
    <MainLayout userRole="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
          <p className="text-muted-foreground">Track and manage student attendance.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-full sm:w-auto sm:min-w-[200px]">
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls.id} value={cls.name}>{cls.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-auto sm:min-w-[200px]">
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger>
                <SelectValue placeholder="Select date" />
              </SelectTrigger>
              <SelectContent>
                {attendanceDates.map((date) => (
                  <SelectItem key={date} value={date}>
                    {format(new Date(date), 'PP')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <button className="ml-auto px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Save Attendance
          </button>
        </div>
        
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-xl flex items-center">
              <CalendarDays className="mr-2 h-5 w-5" />
              {selectedClass} - {format(new Date(selectedDate), 'PPPP')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-2 text-left font-medium">Student</th>
                    <th className="py-3 px-2 text-left font-medium">Status</th>
                    <th className="py-3 px-2 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2">{student.name}</td>
                      <td className="py-3 px-2">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          student.status === 'present' ? 'bg-green-50 text-green-700' : 
                          student.status === 'absent' ? 'bg-red-50 text-red-700' : 
                          'bg-yellow-50 text-yellow-700'
                        }`}>
                          {student.status === 'present' ? (
                            <Check className="mr-1 h-3 w-3" />
                          ) : student.status === 'absent' ? (
                            <X className="mr-1 h-3 w-3" />
                          ) : (
                            <CalendarDays className="mr-1 h-3 w-3" />
                          )}
                          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex space-x-2">
                          <button 
                            className={`px-2 py-1 rounded-md text-xs ${
                              student.status === 'present' ? 'bg-green-100 text-green-800' : 'bg-muted text-muted-foreground'
                            }`}
                            onClick={() => handleStatusChange(student.id, 'present')}
                          >
                            Present
                          </button>
                          <button 
                            className={`px-2 py-1 rounded-md text-xs ${
                              student.status === 'absent' ? 'bg-red-100 text-red-800' : 'bg-muted text-muted-foreground'
                            }`}
                            onClick={() => handleStatusChange(student.id, 'absent')}
                          >
                            Absent
                          </button>
                          <button 
                            className={`px-2 py-1 rounded-md text-xs ${
                              student.status === 'late' ? 'bg-yellow-100 text-yellow-800' : 'bg-muted text-muted-foreground'
                            }`}
                            onClick={() => handleStatusChange(student.id, 'late')}
                          >
                            Late
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Attendance;

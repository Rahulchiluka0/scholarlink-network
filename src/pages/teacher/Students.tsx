
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Users } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock student data
  const students = [
    { id: 1, name: 'Alice Johnson', grade: '11', class: 'Mathematics 101', attendance: '98%', avgGrade: 'A-' },
    { id: 2, name: 'Bob Smith', grade: '11', class: 'Physics Fundamentals', attendance: '92%', avgGrade: 'B+' },
    { id: 3, name: 'Charlie Brown', grade: '11', class: 'Computer Science', attendance: '95%', avgGrade: 'A' },
    { id: 4, name: 'Diana Ross', grade: '11', class: 'English Literature', attendance: '88%', avgGrade: 'B' },
    { id: 5, name: 'Ethan Hunt', grade: '11', class: 'Mathematics 101', attendance: '90%', avgGrade: 'B+' },
    { id: 6, name: 'Fiona Apple', grade: '11', class: 'Physics Fundamentals', attendance: '97%', avgGrade: 'A' },
    { id: 7, name: 'George Miller', grade: '11', class: 'Computer Science', attendance: '89%', avgGrade: 'B' },
    { id: 8, name: 'Hannah Montana', grade: '11', class: 'English Literature', attendance: '93%', avgGrade: 'B+' },
  ];
  
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout userRole="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">View and manage your students.</p>
        </div>
        
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search students..."
              className="w-full pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-xl flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Student List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-2 text-left font-medium">Name</th>
                    <th className="py-3 px-2 text-left font-medium">Grade</th>
                    <th className="py-3 px-2 text-left font-medium">Class</th>
                    <th className="py-3 px-2 text-left font-medium">Attendance</th>
                    <th className="py-3 px-2 text-left font-medium">Avg. Grade</th>
                    <th className="py-3 px-2 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2">{student.name}</td>
                      <td className="py-3 px-2">{student.grade}</td>
                      <td className="py-3 px-2">{student.class}</td>
                      <td className="py-3 px-2">{student.attendance}</td>
                      <td className="py-3 px-2">{student.avgGrade}</td>
                      <td className="py-3 px-2">
                        <button className="text-primary hover:underline">View</button>
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

export default Students;


import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Grades = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock class data
  const classes = [
    { id: 1, name: 'Mathematics 101' },
    { id: 2, name: 'Physics Fundamentals' },
    { id: 3, name: 'Computer Science' },
    { id: 4, name: 'English Literature' },
  ];
  
  // Mock grades data
  const grades = [
    { id: 1, student: 'Alice Johnson', class: 'Mathematics 101', assignment: 'Midterm Exam', grade: '92/100', type: 'Exam', date: '2023-10-15' },
    { id: 2, student: 'Bob Smith', class: 'Mathematics 101', assignment: 'Homework 3', grade: '85/100', type: 'Homework', date: '2023-10-10' },
    { id: 3, student: 'Charlie Brown', class: 'Physics Fundamentals', assignment: 'Lab Report 2', grade: '88/100', type: 'Lab', date: '2023-10-08' },
    { id: 4, student: 'Diana Ross', class: 'Physics Fundamentals', assignment: 'Quiz 4', grade: '78/100', type: 'Quiz', date: '2023-10-05' },
    { id: 5, student: 'Ethan Hunt', class: 'Computer Science', assignment: 'Project 1', grade: '95/100', type: 'Project', date: '2023-10-01' },
    { id: 6, student: 'Fiona Apple', class: 'Computer Science', assignment: 'Coding Challenge', grade: '90/100', type: 'Assignment', date: '2023-09-28' },
    { id: 7, student: 'George Miller', class: 'English Literature', assignment: 'Essay Analysis', grade: '89/100', type: 'Essay', date: '2023-09-25' },
    { id: 8, student: 'Hannah Montana', class: 'English Literature', assignment: 'Book Report', grade: '91/100', type: 'Report', date: '2023-09-20' },
  ];
  
  const filteredGrades = grades.filter(grade => 
    (selectedClass === 'all' || grade.class === selectedClass) &&
    (grade.student.toLowerCase().includes(searchTerm.toLowerCase()) || 
     grade.assignment.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <MainLayout userRole="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Grades</h1>
          <p className="text-muted-foreground">Manage student grades and assessments.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative w-full sm:w-auto sm:min-w-[200px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full sm:w-auto sm:min-w-[200px]">
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {classes.map((cls) => (
                  <SelectItem key={cls.id} value={cls.name}>{cls.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <button className="ml-auto px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Add Grade
          </button>
        </div>
        
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-xl flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Grade Book
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-2 text-left font-medium">Student</th>
                    <th className="py-3 px-2 text-left font-medium">Class</th>
                    <th className="py-3 px-2 text-left font-medium">Assignment</th>
                    <th className="py-3 px-2 text-left font-medium">Type</th>
                    <th className="py-3 px-2 text-left font-medium">Grade</th>
                    <th className="py-3 px-2 text-left font-medium">Date</th>
                    <th className="py-3 px-2 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGrades.map((grade) => (
                    <tr key={grade.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2">{grade.student}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center">
                          <BookOpen className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
                          {grade.class}
                        </div>
                      </td>
                      <td className="py-3 px-2">{grade.assignment}</td>
                      <td className="py-3 px-2">{grade.type}</td>
                      <td className="py-3 px-2 font-medium">{grade.grade}</td>
                      <td className="py-3 px-2 text-muted-foreground">{grade.date}</td>
                      <td className="py-3 px-2">
                        <button className="text-primary hover:underline">Edit</button>
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

export default Grades;

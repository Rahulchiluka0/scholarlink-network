import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Award, 
  ArrowUpRight,
  BarChart2
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis, 
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Grades = () => {
  const [selectedSemester, setSelectedSemester] = useState('current');

  // Mock data
  const grades = [
    { subject: 'Mathematics', midterm: 85, final: 92, project: 88, overall: 90, grade: 'A' },
    { subject: 'Physics', midterm: 78, final: 85, project: 90, overall: 84, grade: 'B+' },
    { subject: 'English Literature', midterm: 92, final: 88, project: 95, overall: 92, grade: 'A' },
    { subject: 'Computer Science', midterm: 95, final: 90, project: 98, overall: 94, grade: 'A' },
    { subject: 'History', midterm: 82, final: 78, project: 85, overall: 81, grade: 'B' },
    { subject: 'Chemistry', midterm: 75, final: 80, project: 82, overall: 79, grade: 'B-' },
  ];

  const semesters = [
    { id: 'current', name: 'Current Semester' },
    { id: 'previous', name: 'Previous Semester' },
    { id: 'all', name: 'All Semesters' }
  ];

  const gradeDistributionData = [
    { grade: 'A', count: 2 },
    { grade: 'A-', count: 0 },
    { grade: 'B+', count: 1 },
    { grade: 'B', count: 1 },
    { grade: 'B-', count: 1 },
    { grade: 'C+', count: 0 },
    { grade: 'C', count: 0 },
    { grade: 'C-', count: 0 },
    { grade: 'D', count: 0 },
    { grade: 'F', count: 0 },
  ];

  const trendData = [
    { semester: 'Fall 2021', gpa: 3.2 },
    { semester: 'Spring 2022', gpa: 3.4 },
    { semester: 'Fall 2022', gpa: 3.6 },
    { semester: 'Spring 2023', gpa: 3.8 },
  ];

  const barColors = {
    A: '#4CAF50',
    'A-': '#8BC34A',
    'B+': '#2196F3',
    B: '#03A9F4',
    'B-': '#00BCD4',
    'C+': '#FFC107',
    C: '#FF9800',
    'C-': '#FF5722',
    D: '#F44336',
    F: '#D32F2F',
  };

  const calculateGPA = () => {
    const gradePoints = {
      'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D': 1.0, 'F': 0.0
    };

    const total = grades.reduce((acc, curr) => acc + gradePoints[curr.grade], 0);
    return (total / grades.length).toFixed(2);
  };

  return (
    <MainLayout userRole="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Grades</h1>
          <p className="text-muted-foreground">View your academic performance and grades.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Current GPA</p>
                  <p className="mt-2 text-3xl font-bold">{calculateGPA()}</p>
                  <div className="mt-1 flex items-center text-xs text-emerald-500">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>0.2 from last semester</span>
                  </div>
                </div>
                <div className="rounded-full p-3 text-secondary bg-secondary/10">
                  <Award className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Grade Report</CardTitle>
              </div>
              <div>
                <select 
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="form-input text-sm py-1 px-3"
                >
                  {semesters.map((semester) => (
                    <option key={semester.id} value={semester.id}>{semester.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="subjects">
              <TabsList className="mb-6">
                <TabsTrigger value="subjects">Subjects</TabsTrigger>
                <TabsTrigger value="distribution">Distribution</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
              </TabsList>

              <TabsContent value="subjects">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left">Subject</th>
                        <th className="border p-3 text-center">Midterm</th>
                        <th className="border p-3 text-center">Final</th>
                        <th className="border p-3 text-center">Project</th>
                        <th className="border p-3 text-center">Overall</th>
                        <th className="border p-3 text-center">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades.map((grade) => (
                        <tr key={grade.subject} className="hover:bg-gray-50">
                          <td className="border p-3">{grade.subject}</td>
                          <td className="border p-3 text-center">{grade.midterm}%</td>
                          <td className="border p-3 text-center">{grade.final}%</td>
                          <td className="border p-3 text-center">{grade.project}%</td>
                          <td className="border p-3 text-center font-medium">{grade.overall}%</td>
                          <td className="border p-3 text-center">
                            <span 
                              className="px-2 py-1 rounded-full text-xs font-medium" 
                              style={{ 
                                backgroundColor: barColors[grade.grade] + '20',
                                color: barColors[grade.grade]
                              }}
                            >
                              {grade.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="distribution">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={gradeDistributionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="grade" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                        }}
                        formatter={(value) => [`${value} courses`, 'Count']}
                      />
                      <Bar 
                        dataKey="count" 
                        name="Number of Courses" 
                        radius={[4, 4, 0, 0]}
                        barSize={30}
                        fill="#4CAF50"
                      >
                        {gradeDistributionData.map((entry, index) => (
                          <rect
                            key={`cell-${index}`}
                            fill={barColors[entry.grade]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="trends">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="semester" />
                      <YAxis domain={[2, 4]} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="gpa" 
                        stroke="#4CAF50" 
                        activeDot={{ r: 8 }} 
                        strokeWidth={3}
                        name="GPA"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Grades;


import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Check, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  CalendarDays
} from 'lucide-react';

const Assignments = () => {
  const [filter, setFilter] = useState('all');

  // Mock data
  const assignments = [
    { 
      id: 1, 
      title: 'Quadratic Equations', 
      subject: 'Mathematics', 
      dueDate: '2023-06-15', 
      status: 'pending', 
      description: 'Solve the given quadratic equations using appropriate methods.',
      color: '#1565C0'
    },
    { 
      id: 2, 
      title: 'Newton\'s Laws of Motion', 
      subject: 'Physics', 
      dueDate: '2023-06-17', 
      status: 'submitted', 
      submittedDate: '2023-06-16',
      description: 'Write a comprehensive essay on Newton\'s three laws of motion with examples.',
      color: '#4CAF50'
    },
    { 
      id: 3, 
      title: 'Shakespeare Essay', 
      subject: 'English Literature', 
      dueDate: '2023-06-20', 
      status: 'pending', 
      description: 'Analyze the character development in Shakespeare\'s Hamlet.',
      color: '#FF8F00'
    },
    { 
      id: 4, 
      title: 'Algorithm Design', 
      subject: 'Computer Science', 
      dueDate: '2023-06-18', 
      status: 'graded', 
      grade: 'A',
      feedback: 'Excellent work! Your algorithm is efficient and well-documented.',
      submittedDate: '2023-06-15',
      gradedDate: '2023-06-17',
      description: 'Design and implement an efficient sorting algorithm.',
      color: '#7E57C2'
    },
    { 
      id: 5, 
      title: 'The French Revolution', 
      subject: 'History', 
      dueDate: '2023-06-22', 
      status: 'pending', 
      description: 'Discuss the causes and effects of the French Revolution.',
      color: '#E91E63'
    },
    { 
      id: 6, 
      title: 'Chemical Reactions Lab Report', 
      subject: 'Chemistry', 
      dueDate: '2023-06-14', 
      status: 'late', 
      description: 'Write a detailed lab report on the chemical reactions observed during the experiment.',
      color: '#009688'
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredAssignments = filter === 'all' 
    ? assignments 
    : assignments.filter(assignment => assignment.status === filter);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'submitted':
        return <Check className="h-5 w-5 text-blue-500" />;
      case 'graded':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'late':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'pending': return 'Pending';
      case 'submitted': return 'Submitted';
      case 'graded': return 'Graded';
      case 'late': return 'Late';
      default: return '';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'text-amber-500 bg-amber-50';
      case 'submitted': return 'text-blue-500 bg-blue-50';
      case 'graded': return 'text-green-500 bg-green-50';
      case 'late': return 'text-red-500 bg-red-50';
      default: return '';
    }
  };

  return (
    <MainLayout userRole="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Assignments</h1>
          <p className="text-muted-foreground">Track and manage your academic assignments.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Pending</p>
                  <p className="mt-2 text-3xl font-bold">
                    {assignments.filter(a => a.status === 'pending').length}
                  </p>
                </div>
                <div className="rounded-full p-3 text-amber-500 bg-amber-50">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Submitted</p>
                  <p className="mt-2 text-3xl font-bold">
                    {assignments.filter(a => a.status === 'submitted').length}
                  </p>
                </div>
                <div className="rounded-full p-3 text-blue-500 bg-blue-50">
                  <Check className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Graded</p>
                  <p className="mt-2 text-3xl font-bold">
                    {assignments.filter(a => a.status === 'graded').length}
                  </p>
                </div>
                <div className="rounded-full p-3 text-green-500 bg-green-50">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Late</p>
                  <p className="mt-2 text-3xl font-bold">
                    {assignments.filter(a => a.status === 'late').length}
                  </p>
                </div>
                <div className="rounded-full p-3 text-red-500 bg-red-50">
                  <AlertCircle className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Assignment List</CardTitle>
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="form-input text-sm py-1 px-3"
              >
                <option value="all">All Assignments</option>
                <option value="pending">Pending</option>
                <option value="submitted">Submitted</option>
                <option value="graded">Graded</option>
                <option value="late">Late</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((assignment) => (
                  <div 
                    key={assignment.id} 
                    className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <span 
                            className="w-2 h-2 rounded-full mr-2"
                            style={{ backgroundColor: assignment.color }}
                          ></span>
                          <span className="text-sm text-gray-500">{assignment.subject}</span>
                        </div>
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-gray-500 mt-1">{assignment.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1 justify-end">
                          <CalendarDays className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm">Due: {formatDate(assignment.dueDate)}</span>
                        </div>
                        <div className="mt-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full inline-flex items-center ${getStatusColor(assignment.status)}`}>
                            {getStatusIcon(assignment.status)}
                            <span className="ml-1">{getStatusText(assignment.status)}</span>
                            {assignment.status === 'graded' && (
                              <span className="ml-1">• {assignment.grade}</span>
                            )}
                          </span>
                        </div>
                        {assignment.status === 'pending' && (
                          <button className="mt-3 btn-primary text-xs">Submit</button>
                        )}
                        {assignment.status === 'graded' && assignment.feedback && (
                          <div className="mt-2 text-xs text-gray-600">"{assignment.feedback}"</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <FileText className="h-12 w-12 mx-auto text-gray-300" />
                  <p className="mt-4 text-gray-500">No assignments found</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Assignments;

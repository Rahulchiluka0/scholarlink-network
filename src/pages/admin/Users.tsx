
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const Users = () => {
  // Mock user data
  const users = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john.doe@school.com',
      role: 'teacher',
      department: 'Mathematics',
      avatar: '/placeholder.svg',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane.smith@school.com',
      role: 'teacher',
      department: 'Science',
      avatar: '/placeholder.svg',
      status: 'active'
    },
    { 
      id: 3, 
      name: 'Mark Johnson', 
      email: 'mark.johnson@school.com',
      role: 'student',
      grade: '10th Grade',
      avatar: '/placeholder.svg',
      status: 'active'
    },
    { 
      id: 4, 
      name: 'Sarah Williams', 
      email: 'sarah.williams@school.com',
      role: 'parent',
      avatar: '/placeholder.svg',
      status: 'inactive'
    },
    { 
      id: 5, 
      name: 'Robert Brown', 
      email: 'robert.brown@school.com',
      role: 'admin',
      avatar: '/placeholder.svg',
      status: 'active'
    },
  ];

  // Function to get role badge color
  const getRoleBadgeColor = (role: string) => {
    switch(role) {
      case 'admin':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'teacher':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'student':
        return 'bg-green-500 hover:bg-green-600';
      case 'parent':
        return 'bg-orange-500 hover:bg-orange-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <MainLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground">Manage all users in the system.</p>
          </div>
          <Button className="flex items-center gap-1">
            <PlusCircle size={16} />
            <span>Add User</span>
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>User List</CardTitle>
            <CardDescription>
              Total users: {users.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">
                              {user.department ? user.department : user.grade ? user.grade : ''}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge className={`${getRoleBadgeColor(user.role)} text-white capitalize`}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge variant={user.status === 'active' ? 'default' : 'secondary'} className="capitalize">
                          {user.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">Delete</Button>
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

export default Users;


import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Pencil, Save, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [editing, setEditing] = React.useState(false);
  
  // Mock student data
  const [studentData, setStudentData] = React.useState({
    name: "John Doe",
    email: "john.doe@school.edu",
    studentId: "ST12345",
    grade: "11th Grade",
    department: "Science",
    phone: "(123) 456-7890",
    address: "123 School Street, Education City, 12345",
    emergencyContact: "Jane Doe (Mother) - (123) 456-7891",
    about: "I'm an enthusiastic student interested in physics and mathematics. I participate in the Science Club and Math Olympiad team.",
    achievements: [
      "Science Fair Gold Medal (2023)",
      "Math Olympiad Regional Finalist (2022)",
      "Perfect Attendance Award (2021-2022)"
    ]
  });
  
  const handleSave = () => {
    setEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };
  
  return (
    <MainLayout userRole="student">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Basic info card */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" alt={studentData.name} />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {studentData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle>{studentData.name}</CardTitle>
              <CardDescription>{studentData.studentId} • {studentData.grade}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Department</div>
                <div>{studentData.department}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                <div>{studentData.email}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Phone</div>
                <div>{studentData.phone}</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setEditing(!editing)}
              >
                {editing ? <Save className="mr-2 h-4 w-4" /> : <Pencil className="mr-2 h-4 w-4" />}
                {editing ? "Save Changes" : "Edit Profile"}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Right column - Tabs with detailed info */}
          <div className="md:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              {/* Personal Info Tab */}
              <TabsContent value="personal" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Manage your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={studentData.name} 
                          onChange={handleChange}
                          disabled={!editing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email"
                          value={studentData.email} 
                          onChange={handleChange}
                          disabled={!editing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={studentData.phone} 
                          onChange={handleChange}
                          disabled={!editing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input 
                          id="address" 
                          name="address"
                          value={studentData.address} 
                          onChange={handleChange}
                          disabled={!editing}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="emergency">Emergency Contact</Label>
                        <Input 
                          id="emergency" 
                          name="emergencyContact"
                          value={studentData.emergencyContact} 
                          onChange={handleChange}
                          disabled={!editing}
                        />
                      </div>
                    </div>
                  </CardContent>
                  {editing && (
                    <CardFooter>
                      <Button onClick={handleSave} className="ml-auto">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>
              
              {/* Academic Tab */}
              <TabsContent value="academic">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Information</CardTitle>
                    <CardDescription>Your academic details and performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input 
                          id="studentId" 
                          value={studentData.studentId} 
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grade">Grade Level</Label>
                        <Input 
                          id="grade"
                          name="grade"
                          value={studentData.grade} 
                          onChange={handleChange}
                          disabled={!editing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input 
                          id="department"
                          name="department"
                          value={studentData.department} 
                          onChange={handleChange}
                          disabled={!editing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="about">About Me</Label>
                      <textarea 
                        id="about"
                        name="about"
                        className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={studentData.about} 
                        onChange={handleChange}
                        disabled={!editing}
                      />
                    </div>
                  </CardContent>
                  {editing && (
                    <CardFooter>
                      <Button onClick={handleSave} className="ml-auto">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>
              
              {/* Achievements Tab */}
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Your awards and recognitions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studentData.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Badge variant="outline" className="mt-0.5">
                            {index + 1}
                          </Badge>
                          <div>{achievement}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Admin routes
import AdminDashboard from "./pages/admin/Dashboard";

// Teacher routes
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherClasses from "./pages/teacher/Classes";
import TeacherStudents from "./pages/teacher/Students";
import TeacherGrades from "./pages/teacher/Grades";
import TeacherAttendance from "./pages/teacher/Attendance";
import TeacherMessages from "./pages/teacher/Messages";

// Student routes
import StudentDashboard from "./pages/student/Dashboard";
import Courses from "./pages/student/Courses";
import Timetable from "./pages/student/Timetable";
import Grades from "./pages/student/Grades";
import Assignments from "./pages/student/Assignments";
import Messages from "./pages/student/Messages";
import Profile from "./pages/student/Profile";

// Parent routes
import ParentDashboard from "./pages/parent/Dashboard";
import Children from "./pages/parent/Children";
import Progress from "./pages/parent/Progress";
import Payments from "./pages/parent/Payments";
import ParentAttendance from "./pages/parent/Attendance";
import ParentMessages from "./pages/parent/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Teacher routes */}
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/classes" element={<TeacherClasses />} />
        <Route path="/teacher/students" element={<TeacherStudents />} />
        <Route path="/teacher/grades" element={<TeacherGrades />} />
        <Route path="/teacher/attendance" element={<TeacherAttendance />} />
        <Route path="/teacher/messages" element={<TeacherMessages />} />
        
        {/* Student routes */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<Courses />} />
        <Route path="/student/timetable" element={<Timetable />} />
        <Route path="/student/grades" element={<Grades />} />
        <Route path="/student/assignments" element={<Assignments />} />
        <Route path="/student/messages" element={<Messages />} />
        <Route path="/student/profile" element={<Profile />} />
        
        {/* Parent routes */}
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/parent/children" element={<Children />} />
        <Route path="/parent/progress" element={<Progress />} />
        <Route path="/parent/payments" element={<Payments />} />
        <Route path="/parent/attendance" element={<ParentAttendance />} />
        <Route path="/parent/messages" element={<ParentMessages />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

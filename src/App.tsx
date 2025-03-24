
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Admin routes
import AdminDashboard from "./pages/admin/Dashboard";

// Teacher routes
import TeacherDashboard from "./pages/teacher/Dashboard";

// Student routes
import StudentDashboard from "./pages/student/Dashboard";

// Parent routes
import ParentDashboard from "./pages/parent/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Teacher routes */}
          <Route path="/teacher" element={<TeacherDashboard />} />
          
          {/* Student routes */}
          <Route path="/student" element={<StudentDashboard />} />
          
          {/* Parent routes */}
          <Route path="/parent" element={<ParentDashboard />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

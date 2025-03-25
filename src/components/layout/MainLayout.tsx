
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Bell, MessageSquare, User, LogOut, 
  ChevronDown, Search, Home, BookOpen, CalendarDays,
  Award, FileText
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  userRole?: 'admin' | 'teacher' | 'student' | 'parent';
}

const MainLayout = ({ children, userRole = 'admin' }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/login');
  };
  
  // Define navigation links based on user role
  const getNavLinks = () => {
    switch(userRole) {
      case 'admin':
        return [
          { name: 'Dashboard', path: '/admin', icon: Home },
          { name: 'Users', path: '/admin/users', icon: User },
          { name: 'Classes', path: '/admin/classes', icon: User },
          { name: 'Subjects', path: '/admin/subjects', icon: User },
          { name: 'Timetables', path: '/admin/timetables', icon: User },
          { name: 'Reports', path: '/admin/reports', icon: User },
          { name: 'Settings', path: '/admin/settings', icon: User },
        ];
      case 'teacher':
        return [
          { name: 'Dashboard', path: '/teacher', icon: Home },
          { name: 'Classes', path: '/teacher/classes', icon: User },
          { name: 'Students', path: '/teacher/students', icon: User },
          { name: 'Attendance', path: '/teacher/attendance', icon: User },
          { name: 'Grades', path: '/teacher/grades', icon: User },
          { name: 'Messages', path: '/teacher/messages', icon: MessageSquare },
        ];
      case 'student':
        return [
          { name: 'Dashboard', path: '/student', icon: Home },
          { name: 'Courses', path: '/student/courses', icon: BookOpen },
          { name: 'Timetable', path: '/student/timetable', icon: CalendarDays },
          { name: 'Grades', path: '/student/grades', icon: Award },
          { name: 'Assignments', path: '/student/assignments', icon: FileText },
          { name: 'Messages', path: '/student/messages', icon: MessageSquare },
        ];
      case 'parent':
        return [
          { name: 'Dashboard', path: '/parent', icon: Home },
          { name: 'Children', path: '/parent/children', icon: User },
          { name: 'Attendance', path: '/parent/attendance', icon: User },
          { name: 'Progress', path: '/parent/progress', icon: User },
          { name: 'Messages', path: '/parent/messages', icon: MessageSquare },
          { name: 'Payments', path: '/parent/payments', icon: User },
        ];
      default:
        return [];
    }
  };
  
  const navLinks = getNavLinks();
  
  const mockNotifications = [
    { id: 1, title: 'New assignment', description: 'Math homework due tomorrow', time: '10 mins ago' },
    { id: 2, title: 'Grade published', description: 'Science quiz grade is now available', time: '1 hour ago' },
    { id: 3, title: 'Schedule change', description: 'PE class moved to Thursday', time: '3 hours ago' },
  ];
  
  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-primary shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-primary-700">
            <h1 className="text-xl font-bold text-white">ScholarLink</h1>
            <button 
              onClick={toggleSidebar}
              className="rounded p-1 text-white hover:bg-primary-700 md:hidden"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-2">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className={`flex items-center space-x-3 ${isActive ? 'nav-link-active' : 'nav-link'}`}
                    >
                      <link.icon size={18} />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* User info */}
          <div className="border-t border-primary-700 p-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-800 font-bold">
                {userRole.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-primary-100 capitalize">{userRole}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center">
              <button 
                onClick={toggleSidebar}
                className="rounded p-1 text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <Menu size={20} />
              </button>
              
              <div className="ml-4 md:ml-6 relative">
                <div className="flex items-center rounded-md bg-gray-100 px-3 py-2 max-w-md">
                  <Search size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="ml-2 bg-transparent outline-none w-full text-sm"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="rounded p-1 text-gray-500 hover:bg-gray-100 focus:outline-none relative"
                >
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium text-white flex items-center justify-center">
                    3
                  </span>
                </button>
                
                {/* Notifications dropdown */}
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-scale-in">
                    <div className="py-2 px-4 border-b border-gray-100">
                      <h3 className="text-sm font-medium">Notifications</h3>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      {mockNotifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                        >
                          <p className="text-sm font-medium">{notification.title}</p>
                          <p className="text-xs text-gray-500">{notification.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="py-2 px-4 text-center border-t border-gray-100">
                      <a href="#" className="text-xs text-primary font-medium">View all notifications</a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* User dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-1 rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                  <span>John Doe</span>
                  <ChevronDown size={16} />
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-scale-in">
                    <div className="py-1">
                      {userRole === 'student' && (
                        <Link to="/student/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <div className="flex items-center">
                            <User size={16} className="mr-2" />
                            <span>Profile</span>
                          </div>
                        </Link>
                      )}
                      {userRole !== 'student' && (
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <div className="flex items-center">
                            <User size={16} className="mr-2" />
                            <span>Profile</span>
                          </div>
                        </a>
                      )}
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center text-destructive">
                          <LogOut size={16} className="mr-2" />
                          <span>Logout</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

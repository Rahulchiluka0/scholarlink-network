
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';

const Timetable = () => {
  // Mock data
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00', '3:00 - 4:00'];
  
  const schedule = [
    { day: 'Monday', time: '9:00 - 10:00', subject: 'Mathematics', teacher: 'Mr. Smith', room: '101', color: '#1565C0' },
    { day: 'Monday', time: '11:00 - 12:00', subject: 'History', teacher: 'Ms. Adams', room: '304', color: '#E91E63' },
    { day: 'Monday', time: '1:00 - 2:00', subject: 'English Literature', teacher: 'Mrs. Davis', room: '103', color: '#FF8F00' },
    { day: 'Tuesday', time: '10:00 - 11:00', subject: 'Physics', teacher: 'Ms. Johnson', room: '205', color: '#4CAF50' },
    { day: 'Tuesday', time: '2:00 - 3:00', subject: 'Computer Science', teacher: 'Mr. Wilson', room: 'Lab 2', color: '#7E57C2' },
    { day: 'Wednesday', time: '9:00 - 10:00', subject: 'Mathematics', teacher: 'Mr. Smith', room: '101', color: '#1565C0' },
    { day: 'Wednesday', time: '11:00 - 12:00', subject: 'Chemistry', teacher: 'Dr. Miller', room: 'Lab 1', color: '#009688' },
    { day: 'Wednesday', time: '1:00 - 2:00', subject: 'English Literature', teacher: 'Mrs. Davis', room: '103', color: '#FF8F00' },
    { day: 'Thursday', time: '10:00 - 11:00', subject: 'Physics', teacher: 'Ms. Johnson', room: '205', color: '#4CAF50' },
    { day: 'Thursday', time: '11:00 - 12:00', subject: 'History', teacher: 'Ms. Adams', room: '304', color: '#E91E63' },
    { day: 'Friday', time: '9:00 - 10:00', subject: 'Mathematics', teacher: 'Mr. Smith', room: '101', color: '#1565C0' },
    { day: 'Friday', time: '11:00 - 12:00', subject: 'Chemistry', teacher: 'Dr. Miller', room: 'Lab 1', color: '#009688' },
    { day: 'Friday', time: '2:00 - 3:00', subject: 'Computer Science', teacher: 'Mr. Wilson', room: 'Lab 2', color: '#7E57C2' },
  ];
  
  const getClassForTimeSlot = (day, time) => {
    return schedule.find(item => item.day === day && item.time === time);
  };

  return (
    <MainLayout userRole="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Timetable</h1>
          <p className="text-muted-foreground">Your weekly class schedule.</p>
        </div>

        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Weekly Schedule</CardTitle>
                <p className="text-sm text-muted-foreground">Week of May 15 - May 19, 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <CalendarDays className="h-5 w-5 text-gray-500" />
                <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 bg-gray-50 min-w-[100px]">Time</th>
                    {days.map((day) => (
                      <th key={day} className="border p-2 bg-gray-50 min-w-[180px]">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map((time) => (
                    <tr key={time}>
                      <td className="border p-2 text-center text-sm font-medium">{time}</td>
                      {days.map((day) => {
                        const classInfo = getClassForTimeSlot(day, time);
                        return (
                          <td key={`${day}-${time}`} className="border p-2 h-24">
                            {classInfo ? (
                              <div className="h-full rounded-md p-2 shadow-sm" style={{ backgroundColor: `${classInfo.color}10`, borderLeft: `3px solid ${classInfo.color}` }}>
                                <div className="font-medium" style={{ color: classInfo.color }}>{classInfo.subject}</div>
                                <div className="text-xs text-gray-500 mt-1">{classInfo.teacher}</div>
                                <div className="text-xs text-gray-500">Room: {classInfo.room}</div>
                              </div>
                            ) : null}
                          </td>
                        );
                      })}
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

export default Timetable;

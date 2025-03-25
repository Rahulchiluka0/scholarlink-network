
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { DollarSign, Clock, CheckCircle, AlarmClock, Download, CreditCard, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Payments = () => {
  // Mock payment data
  const upcomingPayments = [
    { 
      id: 1, 
      title: 'Tuition Fee - Spring Semester', 
      amount: 1200, 
      dueDate: '2024-04-15',
      description: 'Regular semester fee'
    },
    { 
      id: 2, 
      title: 'Field Trip - Science Museum', 
      amount: 45, 
      dueDate: '2024-03-30',
      description: 'Includes transportation and entrance fee'
    },
  ];

  const paymentHistory = [
    { 
      id: 1, 
      title: 'Tuition Fee - Fall Semester', 
      amount: 1200, 
      date: '2023-09-10',
      status: 'Paid',
      method: 'Credit Card'
    },
    { 
      id: 2, 
      title: 'School Books', 
      amount: 150, 
      date: '2023-09-05',
      status: 'Paid',
      method: 'Bank Transfer'
    },
    { 
      id: 3, 
      title: 'School Uniform', 
      amount: 80, 
      date: '2023-08-20',
      status: 'Paid',
      method: 'Credit Card'
    },
  ];

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <MainLayout userRole="parent">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
          <p className="text-muted-foreground">Manage your school payments and view payment history.</p>
        </div>
        
        {/* Payment Summary */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <DollarSign className="mr-2 h-5 w-5 text-primary" />
                Due Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(1245)}</div>
              <p className="text-sm text-muted-foreground">Total amount due</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <AlarmClock className="mr-2 h-5 w-5 text-amber-500" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-sm text-muted-foreground">Upcoming payments</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Paid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(1430)}</div>
              <p className="text-sm text-muted-foreground">Total paid this year</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Upcoming Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Upcoming Payments</CardTitle>
            <CardDescription>Payments that are due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingPayments.map((payment) => (
                <div key={payment.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{payment.title}</h3>
                    <p className="text-sm text-muted-foreground">{payment.description}</p>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Due: {formatDate(payment.dueDate)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 space-y-2">
                    <div className="text-xl font-bold">{formatCurrency(payment.amount)}</div>
                    <Button className="w-full md:w-auto">Pay Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Payment History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Payment History</CardTitle>
            <CardDescription>Record of past payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentHistory.map((payment) => (
                <div key={payment.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">{payment.title}</h3>
                    <div className="flex items-center text-sm">
                      <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{payment.method}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Date: {formatDate(payment.date)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 space-y-2">
                    <div className="text-xl font-bold">{formatCurrency(payment.amount)}</div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
                        {payment.status}
                      </Badge>
                      <Button variant="outline" size="sm" className="h-8">
                        <Download className="h-4 w-4 mr-1" />
                        Receipt
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-center">
            <Button variant="outline" className="w-full md:w-auto">
              <Receipt className="h-4 w-4 mr-2" />
              View All Transactions
            </Button>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Payments;

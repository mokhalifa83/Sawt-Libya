
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  User, 
  Vote, 
  Calendar, 
  FileText, 
  MapPin,
  Bell,
  Settings,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: 'سجل للتصويت',
      description: 'أكمل تسجيلك في قوائم الناخبين',
      icon: <Vote className="w-6 h-6" />,
      color: 'bg-blue-500',
      status: 'متاح'
    },
    {
      title: 'ابحث عن محطتك',
      description: 'اعرف موقع محطة الاقتراع الخاصة بك',
      icon: <MapPin className="w-6 h-6" />,
      color: 'bg-green-500',
      status: 'متاح'
    },
    {
      title: 'المواعيد المهمة',
      description: 'تابع التواريخ المهمة للانتخابات',
      icon: <Calendar className="w-6 h-6" />,
      color: 'bg-purple-500',
      status: 'متاح'
    },
    {
      title: 'الوثائق',
      description: 'حمل النماذج والوثائق المطلوبة',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-orange-500',
      status: 'متاح'
    }
  ];

  const notifications = [
    {
      title: 'تذكير: موعد التسجيل',
      message: 'آخر موعد لتسجيل الناخبين 15 يونيو 2024',
      time: 'منذ ساعتين',
      type: 'warning'
    },
    {
      title: 'تحديث: مواقع الاقتراع',
      message: 'تم نشر قائمة محدثة بمواقع محطات الاقتراع',
      time: 'أمس',
      type: 'info'
    },
    {
      title: 'إعلان مهم',
      message: 'بدء فترة الدعاية الانتخابية',
      time: 'منذ 3 أيام',
      type: 'success'
    }
  ];

  const stats = [
    {
      title: 'الناخبون المسجلون',
      value: '2,547,892',
      change: '+12%',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'محطات الاقتراع',
      value: '1,250',
      change: '+5%',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: 'الدوائر الانتخابية',
      value: '45',
      change: '0%',
      icon: <Vote className="w-8 h-8" />
    },
    {
      title: 'أيام متبقية',
      value: '127',
      change: '-1',
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Cairo, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
              <p className="text-gray-600 mt-1">مرحباً، {user?.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 ml-2" />
                الإعدادات
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 ml-2" />
                الإشعارات
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <div className="text-blue-600">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">الإجراءات السريعة</CardTitle>
                <CardDescription>أكمل مهامك الانتخابية بسهولة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-white`}>
                          {action.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{action.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-green-600">{action.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <div>
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">الإشعارات</CardTitle>
                <CardDescription>آخر التحديثات والأخبار</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  عرض جميع الإشعارات
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-bold">معلومات مهمة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">نسبة المشاركة</h3>
                  <p className="text-3xl font-bold text-blue-600">87.3%</p>
                  <p className="text-sm text-gray-600 mt-1">في آخر انتخابات</p>
                </div>
                <div className="text-center p-4">
                  <Vote className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">المرشحون</h3>
                  <p className="text-3xl font-bold text-green-600">234</p>
                  <p className="text-sm text-gray-600 mt-1">مرشح مسجل</p>
                </div>
                <div className="text-center p-4">
                  <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">موعد الانتخابات</h3>
                  <p className="text-lg font-bold text-purple-600">15 سبتمبر</p>
                  <p className="text-sm text-gray-600 mt-1">2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

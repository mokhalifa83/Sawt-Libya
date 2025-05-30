
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, User, Calendar, FileText } from 'lucide-react';

const Hero = () => {
  const quickServices = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'تسجيل الناخبين',
      description: 'سجل للمشاركة في الانتخابات',
      color: 'bg-blue-500'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'محطات الاقتراع',
      description: 'ابحث عن موقع محطة الاقتراع',
      color: 'bg-green-500'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'مواعيد مهمة',
      description: 'تابع التواريخ المهمة للانتخابات',
      color: 'bg-purple-500'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'النتائج',
      description: 'اطلع على نتائج الانتخابات',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
              نحو انتخابات
              <span className="block text-yellow-300">شفافة ونزيهة</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              الموقع الرسمي للجنة العليا للانتخابات - مصدرك الموثوق لجميع المعلومات والخدمات الانتخابية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                سجل للتصويت الآن
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                دليل التصويت
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">2.5M+</div>
                <div className="text-sm text-blue-100">ناخب مسجل</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">1,250</div>
                <div className="text-sm text-blue-100">محطة اقتراع</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">45</div>
                <div className="text-sm text-blue-100">دائرة انتخابية</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">99.2%</div>
                <div className="text-sm text-blue-100">دقة النتائج</div>
              </div>
            </div>
          </div>

          {/* Quick Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quickServices.map((service, index) => (
              <Card key={index} className="card-hover bg-white/95 backdrop-blur-sm border-0 p-6 cursor-pointer">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium">
                  ابدأ الآن ←
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

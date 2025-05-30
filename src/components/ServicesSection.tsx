
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Search, 
  FileText, 
  Calendar,
  UserCheck,
  MapPin,
  Download,
  Shield
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: 'تسجيل الناخبين',
      description: 'سجل كناخب جديد أو حدث بياناتك الانتخابية بسهولة وأمان',
      features: ['تسجيل إلكتروني', 'تحديث البيانات', 'التحقق من الحالة'],
      color: 'from-blue-500 to-blue-600',
      buttonText: 'سجل الآن'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'محطات الاقتراع',
      description: 'ابحث عن موقع محطة الاقتراع الخاصة بك ومواعيد التصويت',
      features: ['خرائط تفاعلية', 'مواعيد العمل', 'توجيهات الوصول'],
      color: 'from-green-500 to-green-600',
      buttonText: 'ابحث عن محطتك'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'أوراق الاقتراع',
      description: 'اطلع على نماذج أوراق الاقتراع وتعلم طريقة التصويت الصحيحة',
      features: ['نماذج تفاعلية', 'إرشادات التصويت', 'أمثلة عملية'],
      color: 'from-purple-500 to-purple-600',
      buttonText: 'شاهد النماذج'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'التحقق من الأهلية',
      description: 'تحقق من أهليتك للتصويت ومتطلبات المشاركة في الانتخابات',
      features: ['فحص سريع', 'المتطلبات القانونية', 'الوثائق المطلوبة'],
      color: 'from-orange-500 to-orange-600',
      buttonText: 'تحقق من الأهلية'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'التقويم الانتخابي',
      description: 'تابع جميع المواعيد المهمة والأحداث الانتخابية القادمة',
      features: ['تذكيرات مهمة', 'جدولة الأحداث', 'إشعارات فورية'],
      color: 'from-red-500 to-red-600',
      buttonText: 'عرض التقويم'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'الأمان والشكاوى',
      description: 'قدم شكوى أو بلاغ عن أي مخالفات انتخابية بسرية تامة',
      features: ['تقارير سرية', 'متابعة الشكاوى', 'حماية المبلغين'],
      color: 'from-gray-500 to-gray-600',
      buttonText: 'قدم بلاغ'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">خدمات الناخبين</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نوفر لك مجموعة شاملة من الخدمات الإلكترونية لضمان مشاركتك الفعالة في العملية الانتخابية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-white border-0 shadow-lg overflow-hidden">
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold mr-3">{service.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{service.description}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">الميزات المتاحة:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  {service.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Download className="w-8 h-8 text-blue-600 ml-3" />
              <h3 className="text-2xl font-bold text-gray-900">موارد إضافية</h3>
            </div>
            <p className="text-gray-600 mb-6">
              حمل الأدلة والنماذج المهمة لمساعدتك في العملية الانتخابية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                📋 دليل الناخب
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                📄 النماذج الرسمية
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                ⚖️ القوانين الانتخابية
              </Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                📱 تطبيق الهاتف
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowUp, FileText } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'إعلان موعد فتح باب الترشح للانتخابات البرلمانية القادمة',
      excerpt: 'تعلن اللجنة العليا للانتخابات عن فتح باب الترشح اعتباراً من الأول من الشهر القادم، مع توضيح جميع الشروط والمتطلبات...',
      date: '15 يناير 2024',
      category: 'إعلانات رسمية',
      priority: 'عاجل',
      image: '/api/placeholder/400/200'
    },
    {
      id: 2,
      title: 'انطلاق حملة توعية الناخبين في المحافظات',
      excerpt: 'بدأت اليوم فعاليات حملة توعية المواطنين بأهمية المشاركة في العملية الانتخابية وطرق التسجيل الصحيحة...',
      date: '12 يناير 2024',
      category: 'أخبار',
      priority: 'مهم',
      image: '/api/placeholder/400/200'
    },
    {
      id: 3,
      title: 'تطوير نظام التصويت الإلكتروني لضمان الأمان والشفافية',
      excerpt: 'في إطار التطوير المستمر للعملية الانتخابية، تم إطلاق النسخة المحدثة من نظام التصويت الإلكتروني...',
      date: '10 يناير 2024',
      category: 'تكنولوجيا',
      priority: 'عادي',
      image: '/api/placeholder/400/200'
    },
    {
      id: 4,
      title: 'ورش تدريبية للمراقبين المحليين والدوليين',
      excerpt: 'تنظم اللجنة سلسلة من الورش التدريبية للمراقبين لضمان سير العملية الانتخابية بأعلى معايير الشفافية...',
      date: '8 يناير 2024',
      category: 'تدريب',
      priority: 'عادي',
      image: '/api/placeholder/400/200'
    }
  ];

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'عاجل':
        return 'bg-red-500 text-white';
      case 'مهم':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'إعلانات رسمية':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'أخبار':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'تكنولوجيا':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'تدريب':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">الأخبار والإعلانات</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تابع آخر الأخبار والإعلانات الرسمية من اللجنة العليا للانتخابات
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <Card className="overflow-hidden shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold ml-3">
                    عاجل
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    إعلان رسمي
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  {news[0].title}
                </h3>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  {news[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-200">
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>{news[0].date}</span>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    اقرأ المزيد
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Calendar className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-white font-semibold">أخبار عاجلة</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.slice(1).map((item) => (
            <Card key={item.id} className="card-hover bg-white border-0 shadow-lg overflow-hidden">
              {/* News Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="text-gray-400 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">صورة الخبر</p>
                </div>
                
                {/* Priority Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getPriorityStyle(item.priority)}`}>
                  {item.priority}
                </div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryStyle(item.category)}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 ml-1" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>

                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium">
                  اقرأ المزيد ←
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* News Actions */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ابق على اطلاع دائم
            </h3>
            <p className="text-gray-600 mb-6">
              اشترك في النشرة الإخبارية لتصلك آخر الأخبار والتحديثات مباشرة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                📧 اشتراك في النشرة
              </Button>
              <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
                📱 تطبيق الإشعارات
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="fixed bottom-8 left-8 z-40">
          <Button 
            size="sm" 
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Calendar, FileText, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'تسجيل الناخبين', href: '#' },
    { name: 'محطات الاقتراع', href: '#' },
    { name: 'المرشحون', href: '#' },
    { name: 'النتائج', href: '#' },
    { name: 'القوانين', href: '#' },
    { name: 'الأخبار', href: '#' }
  ];

  const services = [
    { name: 'التحقق من التسجيل', href: '#' },
    { name: 'أوراق الاقتراع', href: '#' },
    { name: 'التقويم الانتخابي', href: '#' },
    { name: 'دليل الناخب', href: '#' },
    { name: 'الشكاوى والبلاغات', href: '#' },
    { name: 'المراقبة الدولية', href: '#' }
  ];

  const legalLinks = [
    { name: 'القانون الانتخابي', href: '#' },
    { name: 'اللوائح التنفيذية', href: '#' },
    { name: 'حقوق الناخبين', href: '#' },
    { name: 'سياسة الخصوصية', href: '#' },
    { name: 'شروط الاستخدام', href: '#' },
    { name: 'إخلاء المسؤولية', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold">اللجنة العليا للانتخابات</h3>
                <p className="text-gray-400 text-sm">الموقع الرسمي</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              نعمل على ضمان إجراء انتخابات حرة ونزيهة وشفافة، وتوفير بيئة مناسبة للمشاركة الديمقراطية لجميع المواطنين.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 ml-3 text-blue-400" />
                <span>الخط الساخن: 123-456-789</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 ml-3 text-blue-400" />
                <span>info@elections.gov</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 ml-3 text-blue-400" />
                <span>شارع الديمقراطية، المبنى الحكومي</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">الخدمات</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">النشرة الإخبارية</h4>
            <p className="text-gray-300 mb-4 text-sm">
              اشترك لتصلك آخر الأخبار والتحديثات الانتخابية
            </p>
            
            <div className="flex gap-2 mb-6">
              <Input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 px-4">
                اشتراك
              </Button>
            </div>

            <h5 className="font-semibold mb-4 text-gray-200">المعلومات القانونية</h5>
            <ul className="space-y-2">
              {legalLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center lg:text-right">
              © 2024 اللجنة العليا للانتخابات. جميع الحقوق محفوظة.
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {legalLinks.slice(3).map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">تابعنا:</span>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                  📘
                </Button>
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                  🐦
                </Button>
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                  📺
                </Button>
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                  📸
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

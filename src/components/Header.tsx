
import React, { useState } from 'react';
import { Search, User, Menu, X, LogOut, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  const menuItems = user ? [
    { name: 'لوحة التحكم', href: '/' },
    { name: 'تسجيل الناخبين', href: '#register' },
    { name: 'محطات الاقتراع', href: '#polling' },
    { name: 'المرشحون', href: '#candidates' },
    { name: 'النتائج', href: '#results' },
    { name: 'الإعدادات', href: '#settings' }
  ] : [
    { name: 'الرئيسية', href: '#' },
    { name: 'خدمات الناخبين', href: '#services' },
    { name: 'المرشحون', href: '#candidates' },
    { name: 'النتائج', href: '#results' },
    { name: 'القوانين', href: '#legal' },
    { name: 'الأخبار', href: '#news' }
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50" style={{ fontFamily: 'Cairo, sans-serif' }}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>🏛️ {user ? 'لوحة التحكم الشخصية' : 'الموقع الرسمي للانتخابات'}</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">📞 الخط الساخن: 123-456-789</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              English
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20"
              onClick={handleAuthClick}
            >
              {user ? (
                <>
                  <LogOut className="w-4 h-4 ml-2" />
                  تسجيل الخروج
                </>
              ) : (
                <>
                  <User className="w-4 h-4 ml-2" />
                  تسجيل الدخول
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl cursor-pointer"
                 onClick={() => navigate('/')}>
              ✓
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">اللجنة العليا للانتخابات</h1>
              <p className="text-sm text-gray-600">{user ? 'لوحة التحكم' : 'الموقع الرسمي'}</p>
              {user && (
                <p className="text-xs text-blue-600">مرحباً، {user.email}</p>
              )}
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder={user ? "البحث في الخدمات..." : "البحث في الموقع..."}
                className="pr-10 pl-4"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              بحث
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:block mt-4 border-t pt-4">
          <ul className="flex items-center gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder={user ? "البحث في الخدمات..." : "البحث في الموقع..."}
                  className="pr-10 pl-4"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                بحث
              </Button>
            </div>

            {/* Mobile Navigation */}
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

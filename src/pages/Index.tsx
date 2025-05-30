
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import Dashboard from './Dashboard';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" style={{ fontFamily: 'Cairo, sans-serif' }}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  // If user is logged in, show dashboard
  if (user) {
    return <Dashboard />;
  }

  // If user is not logged in, show landing page
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Cairo, sans-serif' }}>
      <Header />
      <Hero />
      <ServicesSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;

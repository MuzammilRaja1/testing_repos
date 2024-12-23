import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className="h-[100vh] flex flex-col">
      <Header />

      <main className="flex-grow ">
        {children}
      </main>
  
      <Footer />
    </div>
  );
};

export default PublicLayout;

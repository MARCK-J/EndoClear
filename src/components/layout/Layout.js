import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
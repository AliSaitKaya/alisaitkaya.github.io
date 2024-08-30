import React from 'react';

function MainContent() {
  return (
    <div
      style={{
        marginLeft: '4.5rem', // Sidebar genişliği kadar boşluk bırak
        padding: '20px',
        color: 'white', // Yazı rengi beyaz yapıldı
        backgroundColor: '#2c2c2c', // İçerik alanı için koyu bir arka plan rengi
      }}
    >
      <h1>Main Content Area</h1>
      <p>This is where your main content will go.</p>
      {/* Diğer içerikler burada yer alacak */}
    </div>
  );
}

export default MainContent;

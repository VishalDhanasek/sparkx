import React from 'react';
import Image from 'next/image';

export default function New() {
  return (
    <div className="relative bg-cover w-full rounded-tr-[100px]" style={{ backgroundImage: "url('/1trillion.jpg')" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-left pb-12 md:pb-6 relative">
          <div className="py-9 mt-0 mb-10"></div>
          <h2 className="h2 mt-10 mb-4 text-white" style={{ position: 'relative', zIndex: 2 }}>Contributing to TamilNadu's <br></br>1 trillion $ economy Dream</h2>
          <p className="text-xl text-white" data-aos="zoom-y-out" style={{ position: 'relative', zIndex: 2 }}>Towards a Trillion Dollar Economy by 2030</p>
        </div>
        <div className="justify-center md:pb-16 flex relative" style={{ zIndex: 2 }}>
          <div className="relative">
            
            <img src="/1trillion1.png" width="450" height="183" alt="Logos" style={{ position: 'relative', zIndex: 2 }} />
          </div>
        </div>
        <div className="py-9 mt-0 mb-10"></div>
      </div>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gradient1/90 to-gradient2/90 rounded-tr-[100px]" style={{ zIndex: 1 }}></div>
    </div>
  );
}

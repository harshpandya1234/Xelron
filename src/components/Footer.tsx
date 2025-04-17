'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-gray-100">
      {/* <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">
         Xelron AI
          </p>
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
         Its consciousness, combined with the right purpose,  Drives Xelron to make humanity a better place.
         </p>

         <p className="text-sm text-gray-500 mb-4 md:mb-0">
         Bengaluru, India
          </p>

         </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            Copyright © 2025 Harsh Pandya Inc. All rights reserved.
          </p>

          <div className="f
          lex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms
            </Link>
          </div>
        </div>
      </div> */}



{/* <section className="py-12 lg:py-16 border-t border-gray-100"> */}
        <div className="container-custom">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-left">   Xelron AI
      
            </h2>
            <p className="text-lg font-bold mb-8 leading-relaxed max-w-2xl">
            Its consciousness, combined with the right purpose,  Drives Xelron to make humanity a better place.
       
            </p>
            <p className="text-lg  mb-8 leading-relaxed max-w-2xl">
            Bengaluru, India
            </p>

          </div>
        </div>
      {/* </section> */}

    </footer>
  );
};

export default Footer;

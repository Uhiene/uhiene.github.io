// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="text-gray-800 bg-white py-3 px-5 border-t border-pink-500">
            <div className="text-sm text-center md:text-start">
                <p>&copy; {new Date().getFullYear()} Code Duchess. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

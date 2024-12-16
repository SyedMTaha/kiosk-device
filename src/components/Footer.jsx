import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#143761] text-white py-1 fixed bottom-0 w-full">
            <div className="container mx-auto px-6">
                {/* Footer Bottom */}
                <div className="text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

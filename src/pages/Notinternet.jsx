import React, { useState } from 'react';
import { ICONS } from '../component/Icons';
import Button from '../component/Button';

const NoInternet = () => {
    const [isRetrying, setIsRetrying] = useState(false);

    const handleRetry = () => {
        setIsRetrying(true);
        setTimeout(() => {
            setIsRetrying(false);
            window.location.reload();
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden">

            {/* Background floating shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-orange-200/30 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-16 w-12 sm:w-16 h-12 sm:h-16 bg-orange-300/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-20 left-20 w-20 sm:w-24 h-20 sm:h-24 bg-orange-200/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-32 right-10 w-10 sm:w-12 h-10 sm:h-12 bg-orange-300/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>

                {/* Floating WiFi/Globe Icons */}
                <div className="absolute top-1/4 left-1/4 text-orange-300/40 animate-float text-[1.5rem] sm:text-2xl">
                    <ICONS.globe className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <div className="absolute top-3/4 right-1/4 text-orange-300/40 animate-float text-[1rem] sm:text-xl" style={{ animationDelay: '2s' }}>
                    <ICONS.globe className="w-4 sm:w-6 h-4 sm:h-6" />
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg text-center">

                {/* No Internet Icon */}
                <div className="relative mb-8">
                    <div className="mx-auto w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-orange-200 animate-pulse">
                        <div className="relative">
                            <ICONS.globe className="w-12 sm:w-16 h-12 sm:h-16 text-orange-500" />
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 bg-red-500 rounded-full flex items-center justify-center animate-ping">
                                <ICONS.x className="w-2 sm:w-3 h-2 sm:h-3 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Signal waves */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-32 sm:w-40 h-32 sm:h-40 border-2 border-orange-300/30 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 h-40 sm:h-48 border-2 border-orange-300/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 h-48 sm:h-56 border-2 border-orange-300/10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-orange-100">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">No Internet Connection</h1>
                    <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                        Oops! It looks like you're not connected to the internet. Please check your connection and try again.
                    </p>

                    {/* Quick Tips */}
                    <div className="bg-orange-50 rounded-lg p-3 sm:p-4 mb-6 text-left">
                        <h3 className="font-semibold text-orange-800 mb-2 flex items-center text-sm sm:text-base">
                            <ICONS.lightbulb className="w-4 h-4 mr-2" /> Quick Tips:
                        </h3>
                        <ul className="text-xs sm:text-sm text-orange-700 space-y-1">
                            <li>• Check your WiFi or mobile data connection</li>
                            <li>• Try moving to a different location</li>
                            <li>• Restart your router or device</li>
                            <li>• Contact your internet service provider</li>
                        </ul>
                    </div>

                    {/* Retry Button */}
                    <Button
                        onClick={handleRetry}
                        disabled={isRetrying}
                        text={isRetrying ? "Retrying..." : "Try Again"}
                        className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 ${isRetrying
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                            }`}
                    />

                    {/* Footer Info */}
                    <div className="mt-6 pt-4 border-t border-orange-100">
                        <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center">
                            <ICONS.shield className="w-3 h-3 mr-1" /> Your data is safe with Zeniushub
                        </p>
                    </div>
                </div>

                {/* Contact Footer */}
                <div className="mt-6 sm:mt-8 text-center">
                    <p className="text-xs sm:text-sm text-gray-500">Having trouble? Contact our support team</p>
                    <div className="flex justify-center items-center space-x-2 sm:space-x-4 mt-1 sm:mt-2 text-xs sm:text-sm">
                        <a href="tel:+919257479576" className="text-orange-600 hover:text-orange-700 flex items-center">
                            <ICONS.phone className="w-3 h-3 mr-1" /> +91 92574 79576
                        </a>
                        <span className="text-gray-300">|</span>
                        <a href="mailto:support@zeniushub.in" className="text-orange-600 hover:text-orange-700 flex items-center">
                            <ICONS.mail className="w-3 h-3 mr-1" /> Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoInternet;

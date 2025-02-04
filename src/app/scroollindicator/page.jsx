'use client'

import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const percent = (scrollPosition / totalHeight) * 100;
        setScrollPercent(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-2 bg-gray-200">
            <div
                className="h-full bg-blue-500"
                style={{ width: scrollPercent }}
            ></div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="p-8 space-y-8">
            {/* Sample content to create scrollable area */}
            {[...Array(5)].map((_, index) => (
                <div key={index} className="h-40 bg-gray-300 rounded-lg p-4">
                    <h3 className="text-xl font-bold">Content Block {index + 1}</h3>
                    <p>This is some sample content for the scroll indicator demo.</p>
                </div>
            ))}
        </div>
    );
};

const Page = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <ScrollIndicator />
            <Content />
        </div>
    );
};

export default Page;

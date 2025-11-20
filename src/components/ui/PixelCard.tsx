import React, { useState, useEffect } from "react";

interface PixelCardProps {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export default function PixelCard({ children, className = "", contentClassName = "" }: PixelCardProps) {
    const [pixels, setPixels] = useState<number[]>([]);

    useEffect(() => {
        // Create a grid of pixels (e.g., 10x10 grid)
        const pixelCount = 40;
        setPixels(Array.from({ length: pixelCount }, (_, i) => i));
    }, []);

    return (
        <div className={`relative group ${className}`}>
            {/* The "Mirror" Card */}
            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] group-hover:border-white/40">

                {/* Glossy Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none" />

                {/* Content */}
                <div className={`relative z-20 p-4 md:p-6 ${contentClassName}`}>
                    {children}
                </div>

                {/* Pixel Overlay Grid */}
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-4 pointer-events-none z-30">
                    {pixels.map((i) => (
                        <div
                            key={i}
                            className="w-full h-full bg-white/30 opacity-0 transition-opacity duration-300 group-hover:animate-pixel-flicker"
                            style={{
                                animationDelay: `${Math.random() * 500}ms`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Styles for the animation */}
            <style>{`
        @keyframes pixel-flicker {
          0% { opacity: 0; }
          25% { opacity: 0.5; }
          50% { opacity: 0; }
          75% { opacity: 0.3; }
          100% { opacity: 0; }
        }
        .animate-pixel-flicker {
          animation: pixel-flicker 0.8s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}

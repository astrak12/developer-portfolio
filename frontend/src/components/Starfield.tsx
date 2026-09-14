// frontend/src/components/Starfield.tsx
import React, { useEffect, useState } from 'react';

export const Starfield: React.FC = () => {
    const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: string; size: string; fast: boolean }[]>([]);

    useEffect(() => {
        // Generate 100 bintang acak saat komponen dimuat
        const newStars = Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            size: `${Math.random() * 2 + 1}px`,
            fast: Math.random() > 0.8, // 20% bintang berkedip cepat
        }));
        setStars(newStars);
    }, []);

    return (
        // Tambahkan class 'hidden dark:block' di sini
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none hidden dark:block bg-[#050814]">
            {/* Gradasi Nebula Tersembunyi */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-space-nebula/20 blur-[120px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-space-starlight/10 blur-[150px]"></div>

            {/* Partikel Bintang */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className={`absolute bg-white rounded-full ${star.fast ? 'animate-twinkle-fast' : 'animate-twinkle'}`}
                    style={{
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.delay,
                        boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
                    }}
                ></div>
            ))}
        </div>
    );
};


'use client'
import { DotLottie } from '@lottiefiles/dotlottie-web';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function NotFound() {

  const canvasRef = useRef(null);

  useEffect(() => {
    new DotLottie({
      canvas: canvasRef.current,
      src: 'https://newsuncart.vercel.app/404.json',
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <canvas ref={canvasRef} style={{ width: '300px', height: '300px' }} />

      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-gray-500">Page not found</p>
      <Link href="/" className="mt-4 btn bg-[#f59e0b]">Go Home</Link>

    </div>
  );
}
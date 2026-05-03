// import Link from 'next/link';

// export default function NotFound() {
//   return (
//     <div className="h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl md:text-6xl font-bold text-red-500">
//         404
//       </h1>

//       <p className="mt-4 text-lg md:text-xl">
//         Page not found
//       </p>

//       <Link
//         href="/"
//         className="mt-6 px-5 py-2 bg-accent text-black rounded"
//       >
//         Go Home
//       </Link>
//     </div>
//   );
// }


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
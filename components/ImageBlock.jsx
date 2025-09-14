'use client';
import Image from 'next/image';

export default function ImageBlock({ src, alt, className='' }){
  // Using next/image offers optimized loading in Next.js deployments.
  return (
    <Image src={src} alt={alt} fill className={className} sizes="(max-width: 768px) 100vw, 50vw" style={{objectFit:'cover'}} />
  )
}

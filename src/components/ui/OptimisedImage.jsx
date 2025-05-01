// components/ui/OptimizedImage.js
import React from 'react';
import Image from 'next/image';

const OptimizedImage = ({ src, alt, className, priority = false, fill = false }) => {
  // Use fill mode for responsive images that should cover their container
  if (fill) {
    return (
      <div className={`relative ${className || 'w-full h-full'}`}>
        <Image
          src={src}
          alt={alt || 'Image'}
          fill={true}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }
  
  // Regular image with explicit width and height
  return (
    <Image
      src={src}
      alt={alt || 'Image'}
      width={500}
      height={300}
      priority={priority}
      className={`max-w-full h-auto ${className || ''}`}
    />
  );
};

export default OptimizedImage;
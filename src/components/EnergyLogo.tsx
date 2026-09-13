import React, { useState } from 'react';

interface EnergyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const EnergyLogo: React.FC<EnergyLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const [imgSrc, setImgSrc] = useState('/logo.png');

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={imgSrc}
        onError={() => {
          if (imgSrc !== 'https://i.ibb.co/VYBYP2zH/ALTA-ENETGY-400-X150.png') {
            setImgSrc('https://i.ibb.co/VYBYP2zH/ALTA-ENETGY-400-X150.png');
          }
        }}
        alt="Energy Manutenções - Assistência Técnica"
        className={`${sizeClasses[size]} w-auto object-contain max-w-[220px] sm:max-w-none`}
        loading="eager"
      />
    </div>
  );
};

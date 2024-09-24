import React from 'react';

const Avatar = ({ src, alt, size = 'w-10 h-10' }) => {
  return (
    <img
      className={`${size} rounded-full`}
      src={src || '/default-avatar.png'} // Fallback image
      alt={alt || 'User Avatar'}
    />
  );
};

export default Avatar;

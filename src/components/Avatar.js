import { Avatar } from '@mui/material';
import React from 'react';
// import defaultAvatar from '../assets/defaultAvatar.png';

const AvatarComponent = ({ src, alt, size = 'w-10 h-10' }) => {
  return (
    <Avatar
  sx={{ bgcolor: "green" }}
  alt="Remy Sharp"
  src="/broken-image.jpg"
>
  B
</Avatar>
  );
};

export default AvatarComponent;

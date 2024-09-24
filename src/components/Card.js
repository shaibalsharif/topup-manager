import React from 'react';

const Card = ({ title, children, actions, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <div>{children}</div>
      {actions && <div className="mt-4">{actions}</div>}
    </div>
  );
};

export default Card;

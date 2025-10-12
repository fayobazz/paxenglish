import React from 'react';

const Button2 = ({ title, containerClass, phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`} className={containerClass}>
        {/* [rgba(228,172,67,1.00)] */}

      <button style={{ padding: '10px 20px',backgroundColor: 'rgba(228,172,67,1.00)', color: '#fff', border: 'none', borderRadius: '5px' }}>
        {title}

      </button>
    </a>
  );
};

export default Button2;
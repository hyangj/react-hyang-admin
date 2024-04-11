import '@/assets/scss/components/_loader.scss';
import React, { useEffect, useState } from 'react';

interface LoaderType {
  size?: string;
}

function Loader({ size = 'sm' }: LoaderType) {
  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    if (size === 'sm') {
      setSizeClass('is-sm');
    }
  });

  return (
    <div className="loader__mask">
      <div className={`loader ${sizeClass}`}>
        <div className="spinner">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <div className="loading" style={{ display: 'none' }}>
        <svg className="loading__circle" viewBox="0 0 54 54">
          <circle cx="50%" cy="50%" r="25"></circle>
        </svg>
      </div>
    </div>
  );
}

export default React.memo(Loader);

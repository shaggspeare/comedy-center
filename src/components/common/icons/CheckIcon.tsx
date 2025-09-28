import React from 'react';

interface CheckIconProps {
  width?: string | number;
  height?: string | number;
}

const CheckIcon: React.FC<CheckIconProps> = ({ width, height }) => {
  return (
    <span className="check-icon">
      <svg width={width || '16'} height={height || '16'}>
        <use xlinkHref="#check-icon">
          <symbol id="check-icon" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </symbol>
        </use>
      </svg>
    </span>
  );
};

export default CheckIcon;

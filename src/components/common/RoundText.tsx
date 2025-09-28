import React from 'react';

interface RoundTextProps {
  style?: React.CSSProperties;
  text: string;
}

const RoundText: React.FC<RoundTextProps> = ({ style, text }) => {
  const character = text.split('');

  return (
    <p style={style}>
      {character.map((item, index) => (
        <span key={index} style={{ transform: `rotate(${index * 9.6}deg)` }}>
          {item}
        </span>
      ))}
    </p>
  );
};

export default RoundText;

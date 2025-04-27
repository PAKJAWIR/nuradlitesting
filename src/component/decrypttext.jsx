// components/DecryptText.jsx
import { useState, useEffect } from 'react';

const HoverDecryptText = ({ text, delay = 0, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*', className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    let currentIndex = 0;
    
    if (isHovered) {
      interval = setInterval(() => {
        setDisplayText(prev => {
          const newText = text.split('').map((char, index) => {
            if (index <= currentIndex) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          }).join('');
          
          currentIndex++;
          if (currentIndex >= text.length) clearInterval(interval);
          return newText;
        });
      }, 50);
    } else {
      setDisplayText(text.split('').map(() => characters[Math.floor(Math.random() * characters.length)]).join(''));
    }

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <span
      className={`relative cursor-default ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-200 text-2xl ${
            isHovered ? 'text-warna4' : 'text-warna3'
          } ${isHovered && index < text.length ? 'animate-glitch' : ''}`}
          style={{ transitionDelay: `${index * 20}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default HoverDecryptText;
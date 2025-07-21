// components/SlotSymbolCard.jsx
import React from 'react';

const SlotSymbolCard = ({ symbol, spinning }) => {
  return (
    <div className={`symbol ${spinning ? 'spinning' : ''}`}>
      <img src={symbol.image} alt={symbol.name} />
      <style jsx>{`
        .symbol {
          width: 100px;
          height: 100px;
          overflow: hidden;
          border-radius: 12px;
          background: #222;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          width: 100%;
          height: auto;
        }
        .spinning {
          animation: spin 0.5s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SlotSymbolCar
d;

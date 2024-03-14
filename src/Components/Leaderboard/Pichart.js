// PieChart.js
import React from 'react';
import './PieChart.css';

const PieChart = ({ data }) => {
  const total = data.reduce((acc, entry) => acc + entry.value, 0);
  let startAngle = 0;

  return (
    <div className="pie-chart">
      {data.map((entry, index) => {
        const percentage = (entry.value / total) * 100;
        const rotate = startAngle;
        startAngle += percentage;

        return (
          <div
            key={index}
            className="slice"
            style={{
              transform: `rotate(${rotate}deg)`,
              background: entry.color || getRandomColor(),
            }}
          ></div>
        );
      })}
    </div>
  );
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default PieChart;

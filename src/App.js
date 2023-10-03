import React from 'react';
import './App.css';
import BarChart from './Barchart';

const App = () => {
  const chartData = [
    {
      name: 'Series 1',
      data: [
        { x: 'Category 1', y: 20 },
        { x: 'Category 2', y: 35 },
        { x: 'Category 3', y: 15 },
      ],
    },
    {
      name: 'Series 2',
      data: [
        { x: 'Category 1', y: 10 },
        { x: 'Category 2', y: 25 },
        { x: 'Category 3', y: 30 },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Bar Chart with Modal</h1>
      <BarChart data={chartData} />
    </div>
  );
};

export default App;

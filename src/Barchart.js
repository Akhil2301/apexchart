import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = ({ data }) => {
  const [selectedData, setSelectedData] = useState(null);

  const handleClick = (event, chartContext, { dataPointIndex, seriesIndex }) => {
    // Get the selected data based on the clicked bar
    const selectedSeries = data[seriesIndex];
    const selectedCategory = selectedSeries.data[dataPointIndex];

    // Set the selected data in state
    setSelectedData({ series: selectedSeries.name, category: selectedCategory.x });
  };

  const chartOptions = {
    chart: {
      events: {
        dataPointSelection: handleClick,
      },
    },
    xaxis: {
      categories: data[0].data.map((item) => item.x), // Assuming all series have the same categories
    },
  };

  return (
    <div>
      <ApexCharts options={chartOptions} series={data} type="bar" height={350} />
      {selectedData && (
        <div className="modal">
          <h2>Selected Data</h2>
          <p>Series: {selectedData.series}</p>
          <p>Category: {selectedData.category}</p>
        </div>
      )}
    </div>
  );
};

export default BarChart;

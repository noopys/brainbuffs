import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const MissedConceptsChart = ({ chartData, shouldShowLegend }) => {
  const chartOptions = {
    chartArea: {
      left: 10,
      top: 20,
      width: '90%',
      height: '90%',
    },
    backgroundColor: '#f3f3f3',
    is3D: true,
    legend: shouldShowLegend
      ? {
          position: 'left',
          textStyle: {
            fontSize: 14,
          },
        }
      : { position: 'none' },
    pieSliceText: 'percentage',
    pieSliceTextStyle: {
      fontSize: 14,
    },
    colors: [
      '#2ECC71',
      '#3498DB',
      '#1ABC9C',
      '#27AE60',
      '#F1C40F',
      '#A5694F',
      '#9B59B6',
      '#FF5733',
    ],
  };

  useEffect(() => {
    // Additional logic or effects related to the chart options can be added here
  }, [shouldShowLegend]);

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={chartData}
      options={chartOptions}
    />
  );
};

export default MissedConceptsChart;

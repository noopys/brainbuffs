import React, { useState, useMemo } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

const MissedConceptsChart = ({ chartData, shouldShowLegend }) => {
  const [active, setActive] = useState(null);
  const width = 400;
  const half = width / 2;

  const colors = ['#2ECC71', '#3498DB', '#1ABC9C', '#27AE60', '#F1C40F', '#A5694F', '#9B59B6', '#FF5733'];

  const data = useMemo(() => {
    return chartData.slice(1).map(([label, value], index) => ({
      label,
      value: Number(value),
      color: colors[index % colors.length]
    }));
  }, [chartData]);

  const totalValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.value, 0);
  }, [data]);

  //Get font size
  // Function to determine the font size based on label length
  const getFontSize = (label) => {
    return label.length >= 20 ? 14 : 20; // Smaller font size for longer labels
  };

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={data}
            pieValue={dataItem => dataItem.value}
            outerRadius={half-20}
            innerRadius={({ data }) => {
              const size = active && data.label === active.label ? 68 : 50;
              return half - size;
            }}
            cornerRadius={3}
            padAngle={0.005}
          >
            {pie => {
              return pie.arcs.map(arc => {
                const [centroidX, centroidY] = pie.path.centroid(arc);
                return (
                  <g
                    key={arc.data.label}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                    {arc.data.label.length <= 10 && (
                      <Text
                        fill="black" // Font color is black
                        fontWeight="bold"
                        x={centroidX}
                        y={centroidY}
                        dy=".33em"
                        fontSize={15}
                        textAnchor="middle"
                        pointerEvents="none"
                      >
                        {arc.data.label}
                      </Text>
                    )}
                  </g>
                );
              });
            }}
          </Pie>

          {active && (
            <>
              <Text textAnchor="middle" fill="#111" fontSize={getFontSize(active.label)} dy={0}>
                {`${active.label} (${((active.value / totalValue) * 100).toFixed(1)}%)`}
              </Text>
              <Text
                textAnchor="middle"
                fill="#111" // Different color for weight
                fontSize={16} // Smaller font size for weight
                //x={half}
                //y={half + 20} // Position below the label
                dy="1.5em"
              >
                {`Questions Missed: ${active.value}`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
  );
};

export default MissedConceptsChart;

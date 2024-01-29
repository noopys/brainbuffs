import React, { useState, useMemo } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

const MissedConceptsChart = ({ chartData, shouldShowLegend }) => {
  const [active, setActive] = useState(null);
  const width = 400;
  const half = width / 2;

  const colors = [
    'rgba(32, 167, 161, 1.0)', 
    'rgba(241, 218, 196, 0.8)',
    'rgba(96, 108, 56, 0.8)',
    'rgba(91, 48, 0, 0.8)',
    'rgba(109, 69, 76, 0.8)',
    'rgba(109, 69, 76, 0.8)'
  ];

  const data = useMemo(() => {
    // Filter out data points with value of zero
    return chartData.slice(1).filter(([, value]) => Number(value) > 0).map(([label, value], index) => ({
      label,
      value: Number(value),
      color: colors[index % colors.length]
    }));
  }, [chartData]);

  const totalValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.value, 0);
  }, [data]);

  const getFontSize = (label) => {
    return label.length >= 20 ? 14 : 20;
  };

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={data}
            pieValue={dataItem => dataItem.value}
            outerRadius={half}
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
                    {arc.data.label.length <= 15 && (
                      <Text
                        fill="black"
                        fontWeight="bolder"
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

          {active ? (
            <>
              <Text textAnchor="middle" fill="#111" fontSize={getFontSize(active.label)} dy={0}>
                {`${active.label} (${((active.value / totalValue) * 100).toFixed(1)}%)`}
              </Text>
              <Text
                textAnchor="middle"
                fill="#111"
                fontSize={16}
                dy="1.5em"
              >
                {`Questions Missed: ${active.value}`}
              </Text>
            </>
          ) : (
            <Text textAnchor="middle" fill="#111" fontSize={14} fontWeight="bold">
              {"Hover over a section for more info"}
            </Text>
          )}
        </Group>
      </svg>
    </main>
  );
};

export default MissedConceptsChart;

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

const MissedConceptsChart = ({ chartData, shouldShowLegend }) => {
  const [active, setActive] = useState(null);
  const pieSize = 500; // Fixed size of the pie chart
  const halfPieSize = pieSize / 2;
  const ref = useRef(null);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const minAngleThreshold = 30; // Minimum angle (in degrees) to display label

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 0 || entries[0].target !== ref.current) {
        return;
      }

      const { width, height } = entries[0].contentRect;
      setSvgSize({ width, height });
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  const colors = [
    'rgba(32, 167, 161, 1.0)', 
    'rgba(241, 218, 196, 0.8)',
    'rgba(96, 108, 56, 0.8)',
    'rgba(91, 48, 0, 0.8)',
    'rgba(109, 69, 76, 0.8)',
    'rgba(109, 69, 76, 0.8)'
  ];

  const data = useMemo(() => {
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
    return label.length >= 20 ? 20 : 24;
  };

  // Function to calculate the angle of an arc
  const getArcAngle = (arc) => {
    return ((arc.endAngle - arc.startAngle) / (2 * Math.PI)) * 360;
  };

  return (
    <main ref={ref}>
      <svg width="500px" height="500px" viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}>
        <Group top={svgSize.height / 2} left={svgSize.width / 2}>
          <Pie
            data={data}
            pieValue={dataItem => dataItem.value}
            outerRadius={halfPieSize}
            innerRadius={({ data }) => {
              const size = active && data.label === active.label ? 68 : 50;
              return halfPieSize - size;
            }}
            cornerRadius={3}
            padAngle={0.005}
          >
            {pie => {
              return pie.arcs.map(arc => {
                const [centroidX, centroidY] = pie.path.centroid(arc);
                const arcAngle = getArcAngle(arc);

                return (
                  <g
                    key={arc.data.label}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                    {arc.data.label.length <= 15 && arcAngle > minAngleThreshold && (
                      <Text
                        fill="black"
                        fontWeight="bolder"
                        x={centroidX}
                        y={centroidY}
                        dy=".33em"
                        fontSize={20}
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
            <Text textAnchor="middle" fill="#111" fontSize={20} fontWeight="bold">
              {"Hover over a section for more info"}
            </Text>
          )}
        </Group>
      </svg>
    </main>
  );
};

export default MissedConceptsChart;

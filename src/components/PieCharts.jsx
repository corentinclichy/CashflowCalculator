import React from "react";
import { useState, useCallback } from "react";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Label,
  ResponsiveContainer,
  Sector,
} from "recharts";

// Helpers
import { numberWithSpaces } from "../utils/helpers";

function PieCharts() {
  // State to handle active sector
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  // Specific render for the active sector
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 5}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />

        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${numberWithSpaces(value)}€`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
          fontSize="12"
        >
          {`${payload.name}`}
        </text>
      </g>
    );
  };

  // Mock Data for the pie chart
  const data02 = [
    { name: "Prix du bien", value: 120000 },
    { name: "Travaux et ameublement", value: 10000 },
    { name: "Frais de notaire", value: 12000 },
    { name: "Frais bancaire", value: 3000 },
    { name: "Frais d'agence", value: 3500 },
  ];

  // total of the investment
  const total = data02.reduce((sum, { value }) => sum + value, 0);

  // Specific color for each sector
  const COLORS = ["#02500f", "#0f9236", "#20d14d", "#6bf198", "#b1cf28"];

  // Custome label for the pie chart center
  const CustomLabel = ({ viewBox, value1, value2 }) => {
    const { cx, cy } = viewBox;
    return (
      <text
        fill="#464646"
        className="recharts-text recharts-label flex flex-col"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan
          x={cx}
          y={170}
          fill="#37B981"
          alignmentBaseline="middle"
          fontSize="26"
          fontWeight="500"
        >
          {numberWithSpaces(value1)}€
        </tspan>
        <tspan x={cx} y={200} fontSize="14" fill="#9CA3AF">
          {value2}
        </tspan>
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="value"
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data02}
          innerRadius={100}
          outerRadius={130}
          paddingAngle={5}
          onMouseEnter={onPieEnter}
          isAnimationActive={false}
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}

          <Label
            width={20}
            position="center"
            content={<CustomLabel value1={total} value2="d'investissement" />}
          ></Label>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieCharts;

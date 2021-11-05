import React, { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1st",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2nd",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3rd",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4th",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5th",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6th",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7th",
    pv: 4300,
    amt: 2100,
  },
];

const Chart: FC = () => {
  return (
    <ResponsiveContainer  height={300}>
      <LineChart data={data} >
        <XAxis dataKey="name" axisLine={false} stroke="#BABABA" />
        <YAxis axisLine={false} stroke="#BABABA" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#0783C1"
          strokeWidth={4}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Chart;

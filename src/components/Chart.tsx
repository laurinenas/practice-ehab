import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function Chart({ data }: { data: any }) {
  // TODO define 😱 the data type!
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        name="Date"
        dataKey="timestamp"
        tickFormatter={(timestamp) => new Date(timestamp).toDateString()}
      />
      <YAxis dataKey="price" name="Price in USD" />
      <Tooltip />
      <Legend />
      <Line
        name="Price in USD"
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

import { makeStyles } from "@material-ui/core";
import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import SideBar from "./SideBar";
const useStyles = makeStyles((theme) => ({
  chartContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  chartTitle: {
    margin: theme.spacing(2),
  },
  chart: {
    margin: theme.spacing(2),
  },
}));
function Charts(props) {
  const classes = useStyles();
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400, value: 35 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210, value: 20 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290, value: 10 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000, value: 15 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181, value: 20 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500, value: 25 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100, value: 5 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className={classes.chartContainer}>
      <SideBar />
      <h2 className={classes.chartTitle}>Bar Chart</h2>
      <div className={classes.chart}>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>

      <h2 className={classes.chartTitle}>Line Chart</h2>
      <div className={classes.chart}>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </div>

      <h2 className={classes.chartTitle}>Pie Chart</h2>
      <div className={classes.chart}>
        <PieChart width={600} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default Charts;

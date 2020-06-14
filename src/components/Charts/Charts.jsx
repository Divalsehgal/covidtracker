import React, { useEffect, useState } from "react";
import { fetchDailyData } from "./../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";
const Charts = ({ data: { deaths, recovered, confirmed }, country }) => {
  const [dailyData, setdailyData] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      setdailyData(await fetchDailyData());
    };
    fetchapi();
  },[]);
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );
  const linechart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333fff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "Red",
            backgroundColor: "rgba(255,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>{country ? barChart : linechart}</div>
  );
};

export default Charts;

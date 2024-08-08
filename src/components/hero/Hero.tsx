"use client";

import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface ChartRef extends HTMLCanvasElement {
  chart: Chart;
}

const labels = [
  "Jan01",
  "Jan02",
  "Jan03",
  "Jan04",
  "Jan05",
  "Jan06",
  "Jan07",
  "Jan08",
  "Jan09",
  "Jan10",
  "Jan11",
  "Jan12",
  "Jan13",
  "Jan14",
  "Jan15",
  "Jan16",
  "Jan17",
  "Jan18",
  "Jan19",
  "Jan20",
  "Jan21",
  "Jan22",
  "Jan23",
  "Jan24",
  "Jan25",
  "Jan26",
  "Jan27",
  "Jan28",
  "Jan29",
  "Jan30",
  "Jan31",
  "Feb01",
  "Feb02",
  "Feb03",
  "Feb04",
  "Feb05",
  "Feb06",
  "Feb07",
  "Feb08",
  "Feb09",
  "Feb10",
  "Feb11",
  "Feb12",
  "Feb13",
  "Feb14",
  "Feb15",
  "Feb16",
  "Feb17",
  "Feb18",
  "Feb19",
  "Feb20",
  "Feb21",
  "Feb22",
  "Feb23",
  "Feb24",
  "Feb25",
  "Feb26",
  "Feb27",
  "Feb28",
  "Feb29",
  "Mar01",
  "Mar02",
  "Mar03",
  "Mar04",
  "Mar05",
  "Mar06",
];

const generateValues = () => {
  const values = [];
  const min = 600;
  const max = 1000;
  for (let i = 0; i < labels.length; i++) {
    values.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return values;
};

const Hero = () => {
  const chartRef = useRef<ChartRef>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const chart = new Chart(context!, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Balance",
              data: generateValues(),
              fill: "start",
              borderColor: "rgb(112, 112, 112)",
              backgroundColor: "rgb(250, 250, 250)",
            },
          ],
        },
        options: {
          responsive: true,
          aspectRatio: 4.6,
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              tension: 0,
            },
            point: {
              radius: 0,
              hoverRadius: 8,
            },
          },
        },
      });

      chartRef.current.chart = chart;
    }
  }, [chartRef.current]);

  return (
    <section className={styles.body}>
      <div className={styles.text}>
        <p className={styles.sub}>Balance (september - october)</p>
        <h2>€ 115 154,11</h2>
      </div>
      <canvas ref={chartRef} />
    </section>
  );
};

export default Hero;

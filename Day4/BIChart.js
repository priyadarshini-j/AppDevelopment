import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BIChart() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      textAlign: 'center',
    },
    header: {
      color: '#333',
      marginBottom: '20px',
    },
    chart: {
      margin: '0 auto',
      maxWidth: '1000px',
    },
  };

  // Example data for the chart (replace with your actual data)
  const data = [
    { name: 'Toy A', sales: 4000, stock: 2400, amt: 2400 },
    { name: 'Toy B', sales: 3000, stock: 1398, amt: 2210 },
    { name: 'Toy C', sales: 2000, stock: 9800, amt: 2290 },
    { name: 'Toy D', sales: 2780, stock: 3908, amt: 2000 },
    { name: 'Toy E', sales: 1890, stock: 4800, amt: 2181 },
    { name: 'Toy F', sales: 2390, stock: 3800, amt: 2500 },
    { name: 'Toy G', sales: 3490, stock: 4300, amt: 2100 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Reports</h2>
      <div style={styles.chart}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="stock" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BIChart;

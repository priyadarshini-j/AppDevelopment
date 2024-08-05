import React from 'react';

function OrderDetails() {
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
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '20px 0',
    },
    th: {
      padding: '10px',
      backgroundColor: '#d1185f',
      color: '#fff',
      border: '1px solid #ddd',
    },
    td: {
      padding: '10px',
      border: '1px solid #ddd',
      backgroundColor:'pink',
    },
    tr: {
      backgroundColor: '#f9f9f9',
    },
  };

  // Example order data (replace with your logic to fetch order details)
  const orders = [
    {
      id: 1,
      customer: 'Priya',
      date: '2024-07-20',
      total: '$150.00',
      status: 'Shipped',
      address: '123 Main St, Chennai',
      phone: '8148847753',
      items: 'Barbie,Car',
    },
    {
      id: 2,
      customer: 'Dharshini',
      date: '2024-07-21',
      total: '$200.00',
      status: 'Pending',
      address: '123,North Street,Chennai',
      phone: '1234567890',
      items: 'Car',
    },
    {
      id: 3,
      customer: 'Riya',
      date: '2024-07-22',
      total: '$300.00',
      status: 'Delivered',
      address: '173,ABC street ,Villupuram',
      phone: '9876543210',
      items: 'Teddy',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Sales</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Order ID</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Total</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Items Ordered</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} style={styles.tr}>
              <td style={styles.td}>{order.id}</td>
              <td style={styles.td}>{order.customer}</td>
              <td style={styles.td}>{order.date}</td>
              <td style={styles.td}>{order.total}</td>
              <td style={styles.td}>{order.status}</td>
              <td style={styles.td}>{order.address}</td>
              <td style={styles.td}>{order.phone}</td>
              <td style={styles.td}>{order.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetails;

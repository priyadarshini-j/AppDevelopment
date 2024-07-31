import React from 'react';

function TotalUsers() {
  const styles = {
    container: {
      padding: '20px',
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
    },
    tr: {
      backgroundColor: 'pink',
    },
  };

  // Example user data (replace with your logic to fetch users)
  const users = [
    { id: 1, name: 'Priya', email: 'priya@gmail.com' },
    { id: 2, name: 'Dharshini', email: 'dharshini@gmail.com' },
    { id: 3, name: 'Riya', email: 'riya@gmail.com' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Users List</h2>
      <p>Total Registered Users: {users.length}</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={styles.tr}>
              <td style={styles.td}>{user.id}</td>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TotalUsers;

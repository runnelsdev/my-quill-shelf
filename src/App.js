import React from 'react';

function App() {
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 'bold'
  };

  const subtitleStyle = {
    fontSize: '24px',
    marginBottom: '40px'
  };

  const buttonStyle = {
    background: 'white',
    color: '#667eea',
    padding: '15px 40px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    margin: '10px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>The Quill Shelf</h1>
      <p style={subtitleStyle}>Bible Study Subscription Platform</p>
      <div>
        <button style={buttonStyle}>Monthly $4.99</button>
        <button style={buttonStyle}>Annual $49</button>
        <button style={buttonStyle}>Lifetime $99</button>
      </div>
    </div>
  );
}

export default App;

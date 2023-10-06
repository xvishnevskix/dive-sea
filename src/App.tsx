import React from 'react';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", padding: 0, margin: 0}}>
      <Router />
    </div>
  )
}

export default App;

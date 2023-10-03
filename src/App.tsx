import React from 'react';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
      <Router />
    </div>
  )
}

export default App;

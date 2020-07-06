import React from 'react';
import Home from './components/Home'
import HolidayState from './context/holiday/holidayState'

function App() {
  return (
    <HolidayState>
      <div className="App">
        <Home/>
      </div>
    </HolidayState>
  );
}

export default App;

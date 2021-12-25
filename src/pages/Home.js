import React from 'react';
import Barchart from '../components/Barchart';
import Linechart from '../components/Linechart';


function Home() {
  return (
    <div className='home'>
      <div className='map'>Đây là map</div>
      <div className='chart'>
        <div><Barchart /></div>
        <div><Linechart /></div> 
        <div><PieChart /></div> 
      </div>
    </div>
  );
}

export default Home;

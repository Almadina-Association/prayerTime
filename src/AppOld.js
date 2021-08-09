import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



function App() {

  const [prayerTime, setPrayerTime] = useState([]);
  const [test, setTest] = useState('test');



  useEffect(() => {

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var time =  date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    console.log(
      time
    );

    console.log("Test");
    // console.log(prayerTime);
    axios.get(
      'https://sheetlabs.com/ACCT/AMA_APP_DATA?date=' + year + '-' + month + '-' + day + ''
      // 'https://sheetlabs.com/ACCT/AMA_APP_DATA'
    )
      .then(res => {
        const salatTime = res.data;
        setPrayerTime({salatTime})
        // console.log(salatTime);
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>" + salatTime[0].fajrna);

      })
  
  });

  const array1 = [1, 4, 9, 16];

  
  return (
    <div className="App">
      {
        // prayerTime.map((item, index) => {
        //   return(
        //     <div>
        //     item.fajrna
        //     </div>
        //   )
        // })
      }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

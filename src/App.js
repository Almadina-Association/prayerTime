import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTimeList: []
    }
  }


  componentDidMount() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
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
        this.setState({ prayerTimeList: salatTime })
        console.log(this.state.prayerTimeList[0]);
        console.log(this.state.prayerTimeList);
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>" + salatTime[0].fajrna);

      })

  }
  render() {
    return (
      <div>
        <div>
        </div>
        {
          this.state.prayerTimeList.length == 0
          ?
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2>
            Prayer time hasn't been updated for this month yet

            </h2>
          </div>
          :
          this.state.prayerTimeList.map((item, index) => {
            return (
              <div>
                {/* Fajr */}
                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, marginTop: 60 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="prayerTitle">
                      Fajr:
                    </div>
                    <div className="prayerTime">
                      {item.fajrna}
                    </div>
                  </div>
                </div>
                {/* iqmah */}
                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="iqamahTitle">
                        Iqamah:
                    </div>
                    <div className="iqamahTime">
                      {item.fajriqamah}
                    </div>
                  </div>
                </div>
                {/* Sunrise */}
                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="sunriseTitle">
                       Sunrise:
                    </div>
                    <div className="sunriseTime">
                      {item.sunrise}
                    </div>
                  </div>
                </div>
                {/* Zuhr */}
                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="prayerTitle">
                      Zuhr:
                    </div>
                    <div className="prayerTime">
                      {item.dhuhr}
                    </div>
                  </div>
                </div>
                          {/* iqmah */}
                          <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="iqamahTitle">
                        Iqamah:
                    </div>
                    <div className="iqamahTime">
                      {item.dhuhriqamah}
                    </div>
                  </div>
                </div>
                {/* Asr */}
                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="prayerTitle">
                      Asr:
                    </div>
                    <div className="prayerTime">
                      {item.asrhanafi}
                    </div>
                  </div>
                </div>
                          {/* iqmah */}
                          <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="iqamahTitle">
                        Iqamah:
                    </div>
                    <div className="iqamahTime">
                      {item.asriqamah}
                    </div>
                  </div>
                </div>
                {/* Maghrib */}
                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="prayerTitle">
                      Maghrib:
                    </div>
                    <div className="prayerTime">
                      {item.maghrib}
                    </div>
                  </div>
                </div>
                          {/* iqmah */}
                          <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="iqamahTitle">
                        Iqamah:
                    </div>
                    <div className="iqamahTime">
                      {item.maghribiqamah}
                    </div>
                  </div>
                </div>
                     {/* Isha */}
                     <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="prayerTitle">
                      Isha:
                    </div>
                    <div className="prayerTime">
                      {item.isha}
                    </div>
                  </div>
                </div>
                          {/* iqmah */}
                          <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{}} className="iqamahTitle">
                        Iqamah:
                    </div>
                    <div className="iqamahTime">
                      {item.ishaiqamah}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    );
  }
}

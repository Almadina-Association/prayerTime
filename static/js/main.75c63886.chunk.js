(this["webpackJsonpama-prayer-time"]=this["webpackJsonpama-prayer-time"]||[]).push([[0],{22:function(e,t,i){},41:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),a=i(12),c=i.n(a),r=(i(22),i(13)),l=i(14),j=i(17),d=i(16),h=i(15),m=i.n(h),y=(i(41),i(0)),o=function(e){Object(j.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={prayerTimeList:[,]},s}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this,t=new Date,i=t.getDate(),s=t.getMonth()+1,n=t.getFullYear(),a=t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});console.log(a),console.log("Test"),m.a.get("https://sheetlabs.com/ACCT/AMA_APP_DATA?date="+n+"-"+s+"-"+i).then((function(t){var i=t.data;e.setState({prayerTimeList:i}),console.log(e.state.prayerTimeList[0])}))}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{}),this.state.prayerTimeList.map((function(e,t){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"prayerTitle",children:"Fajr:"}),Object(y.jsx)("div",{className:"prayerTime",children:e.fajrna})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"iqamahTitle",children:"Iqamah:"}),Object(y.jsx)("div",{className:"iqamahTime",children:e.fajriqamah})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"sunriseTitle",children:"Sunrise:"}),Object(y.jsx)("div",{className:"sunriseTime",children:e.sunrise})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"prayerTitle",children:"Zuhr:"}),Object(y.jsx)("div",{className:"prayerTime",children:e.dhuhr})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"iqamahTitle",children:"Iqamah:"}),Object(y.jsx)("div",{className:"iqamahTime",children:e.dhuhriqamah})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"prayerTitle",children:"Asr:"}),Object(y.jsx)("div",{className:"prayerTime",children:e.asrhanafi})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"iqamahTitle",children:"Iqamah:"}),Object(y.jsx)("div",{className:"iqamahTime",children:e.asriqamah})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"prayerTitle",children:"Maghrib:"}),Object(y.jsx)("div",{className:"prayerTime",children:e.maghrib})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"iqamahTitle",children:"Iqamah:"}),Object(y.jsx)("div",{className:"iqamahTime",children:e.maghribiqamah})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"prayerTitle",children:"Isha:"}),Object(y.jsx)("div",{className:"prayerTime",children:e.isha})]})}),Object(y.jsx)("div",{style:{justifyContent:"center",alignItems:"center",marginTop:15},children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(y.jsx)("div",{style:{},className:"iqamahTitle",children:"Iqamah:"}),Object(y.jsx)("div",{className:"iqamahTime",children:e.ishaiqamah})]})})]})}))]})}}]),i}(s.Component),b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,44)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(o,{})}),document.getElementById("root")),b()}},[[43,1,2]]]);
//# sourceMappingURL=main.75c63886.chunk.js.map
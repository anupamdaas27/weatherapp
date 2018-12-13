(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},27:function(e,t,a){e.exports=a(48)},32:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(21),c=a.n(r),i=(a(32),a(4)),o=a(5),s=a(9),u=a(7),l=a(8),m=(a(14),a(50)),d=a(18),h=a(15),p="GET_FIVE_DAY_WEATHER";var f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={summary:a.props.info,keyindex:a.props.keyindex},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("li",{className:"nav-item",role:"tablist"},n.createElement("a",{role:"tab",className:"nav-link","data-toggle":"tab",href:"#day".concat(this.state.keyindex)},n.createElement("div",{className:"card"},n.createElement("h5",{className:"card-header"},this.state.summary.day),n.createElement("div",{className:"card-body"},n.createElement("p",{className:"card-text"},"Max ".concat(this.state.summary.temp[0],"\xb0C")),n.createElement("p",{className:"card-text"},"Min ".concat(this.state.summary.temp[1],"\xb0C")),n.createElement("p",{className:"card-text"},n.createElement("img",{src:this.state.summary.icon,alt:this.state.summary.description})),n.createElement("p",{className:"card-text"},"Details")))))}}]),t}(n.Component),y=a(6),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).displayInfo=function(e,t){return n.createElement("div",{className:"col",key:t},n.createElement("div",{className:"card"},n.createElement("h5",{className:"card-header"},e.time),n.createElement("div",{className:"card-body"},n.createElement("p",{className:"card-text"},e.temp),n.createElement("p",{className:"card-text"},n.createElement("img",{src:"https://openweathermap.org/img/w/".concat(e.icon,".png"),alt:e.description})),n.createElement("p",{className:"card-text"},e.windspeed),n.createElement("p",{className:"card-text"},"meter/sec"))))},a.state={hoursdata:a.props.hoursdata,hoursindex:a.props.hoursindex},a.displayInfo=a.displayInfo.bind(Object(y.a)(Object(y.a)(a))),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",{className:"row"},this.state.hoursdata.map(function(t,a){return e.displayInfo(t,a)}))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getHour=function(e){return e?new Date(e).getHours():(new Date).getHours()},a.getDate=function(e){return e?new Date(e).getDate():(new Date).getDate()},a._getHourlyInfo=function(e){return e.map(function(e){var t={};return t.temp=Math.round(e.main.temp)+"\xb0C",t.time=a.getHour(1e3*e.dt)+":00",t.icon=e.weather[0].icon,t.description=e.weather[0].description,t.windspeed=e.wind.speed,t})},a.state={dayitem:a.props.dayitem,dayindex:a.props.dayindex},a._getHourlyInfo=a._getHourlyInfo.bind(Object(y.a)(Object(y.a)(a))),a.getHour=a.getHour.bind(Object(y.a)(Object(y.a)(a))),a.getDate=a.getDate.bind(Object(y.a)(Object(y.a)(a))),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return e=this._getHourlyInfo(this.state.dayitem),n.createElement("div",{className:"tab-pane container",id:"day".concat(this.state.dayindex)},n.createElement(b,{hoursdata:e,hoursindex:this.state.dayindex,key:this.state.dayindex}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._groupByDays=function(e){return e.reduce(function(e,t){var a=t.dt_txt.substr(0,10);return e[a]=e[a]||[],e[a].push(t),e},{})},a._getDayInfo=function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(1e3*e[0].dt).getDay()]},a._getIcon=function(e){var t=e[0].weather[0].icon;return"https://openweathermap.org/img/w/".concat(t,".png")},a._getWeatherDecription=function(e){return e[0].weather[0].description},a._getInfo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];e.map(function(e){a.push(e.main.temp_max),t.push(e.main.temp_min),n.push(e.main.humidity)});var r={min:Math.round(Math.min.apply(Math,Object(d.a)(t))),max:Math.round(Math.max.apply(Math,Object(d.a)(a)))},c=Math.round(n.reduce(function(e,t){return e+t})/n.length);return[r.max,r.min,c]},a.state={weatherforecast:a.props.weatherforecast},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getFiveDayWeather()}},{key:"render",value:function(){var e=this,t="",a=[],r=[];if(void 0!==this.props.weatherforecast.list){0===this.props.weatherforecast.list.length&&"No weather data to display",t=this.props.weatherforecast.city.name;var c=this.props.weatherforecast.list,i=this._groupByDays(c),o=Object.keys(i).map(function(e){return i[e]});0!==(a=o.length>5?o.slice(0,5):o).length&&(r=a.map(function(t,a){var n={};return n.icon=e._getIcon(t),n.description=e._getWeatherDecription(t),n.day=e._getDayInfo(t),n.temp=e._getInfo(t),n.hourlyInfo=t,n}))}return n.createElement("div",{className:"container"},n.createElement("h1",null,"5 Day Weather Forecast Application"),n.createElement("div",null,t),n.createElement("ul",{className:"nav nav-tabs"},r.length>0&&void 0!==r.length?r.map(function(e,t){return n.createElement(f,{info:e,key:t,keyindex:t})}):""),n.createElement("div",{className:"tab-content"},r.length>0&&void 0!==r.length?r.map(function(e,t){return n.createElement(g,{dayitem:e.hourlyInfo,dayindex:t,key:t})}):""))}}]),t}(n.Component),w=Object(h.b)(function(e){return{weatherforecast:e.weatherforecast}},{getFiveDayWeather:function(){return function(e){return fetch("http://api.openweathermap.org/data/2.5/forecast?id=2641181&units=metric&APPID=ca2e495f97736a5c91c5770c25775436").then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:p,data:e}}(t))}).catch(function(e){return console.log(e)})}}})(v),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={fivedayweather:""},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"App"},n.createElement(m.a,{path:"/forecast/fivedayweather",component:w}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(12),E=a(24),x={weatherforecast:[]};var D=a(49),N=a(25),k=(a(40),a(42),a(43),a(46),Object(O.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(E.a)({},e,{weatherforecast:t.data});default:return e}},Object(O.c)(Object(O.a)(N.a))));c.a.render(n.createElement(h.a,{store:k},n.createElement(D.a,null,n.createElement(j,{name:"123"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.0e6064c2.chunk.js.map
(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{194:function(e,a,t){e.exports=t(413)},202:function(e,a,t){},203:function(e,a,t){},209:function(e,a,t){},210:function(e,a,t){},211:function(e,a,t){},213:function(e,a,t){},389:function(e,a,t){},390:function(e,a,t){},391:function(e,a,t){},392:function(e,a,t){},409:function(e,a,t){},412:function(e,a,t){},413:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(66),c=t.n(r),s=t(50);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(199),t(200),t(201),t(202);var i=t(33),m=(t(203),t(9)),o=t(10),d=t(13),u=t(11),h=t(12),p=(t(204),t(209),function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"header"},l.a.createElement("header",{className:"navbar"},l.a.createElement("section",{className:"logo navbar-section"},l.a.createElement("a",{href:"/"},l.a.createElement("span",null,"covid19"),l.a.createElement("span",null,"KSA"))),l.a.createElement("section",{className:"navbar-center"},l.a.createElement("a",{href:"/",className:"btn btn-link active"},"Home"),l.a.createElement("a",{href:"/",className:"btn btn-link false"},"Helpline"),l.a.createElement("a",{href:"/",className:"btn btn-link false"},"Sources"),l.a.createElement("a",{href:"/",className:"btn btn-link false"},"Test Centres"),l.a.createElement("a",{href:"/",className:"btn btn-link false"},"About")),l.a.createElement("section",{className:"navbar-section"})))}}]),a}(n.Component)),E=(t(210),function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{id:"footer",className:"navbar"},l.a.createElement("section",{className:"navbar-section"},l.a.createElement("span",null,"Created by\xa0"),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"#"},"DataPlume")),l.a.createElement("section",{className:"navbar-center"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:test@test.com"},"Report an Error")),l.a.createElement("section",{className:"navbar-section"},l.a.createElement("span",null,"Inspired by\xa0"),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://co.vid19.sg/"},"Upcode")))}}]),a}(n.Component)),v=(t(211),t(161)),b=t.n(v),f=t(51),y=t.n(f),N=(t(213),t(6)),g=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={key:e.name},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.name;return l.a.createElement(N.b,{width:171,height:20,data:a,margin:{top:5,right:0,left:0,bottom:5}},l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"recharts5-clip"},l.a.createElement("rect",{x:"5",y:"5",height:"10",width:"161"}))),l.a.createElement("defs",null,l.a.createElement("linearGradient",{id:"gradient_area",x1:"0",y1:"0",x2:"0",y2:"1"},l.a.createElement("stop",{offset:"25%",stopColor:"#7987a1",stopOpacity:"0.8"}),l.a.createElement("stop",{offset:"50%",stopColor:"#82ca9d",stopOpacity:"0"}))),t?l.a.createElement(N.a,{type:"linear",dataKey:t,stroke:"#7987a1",fillOpacity:.6,fill:"url(#gradient_area)"}):l.a.createElement("h2",null,"loading!"))}}]),a}(n.Component),k=(t(389),function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data,a=[];return e.forEach((function(e){var t=e.confirmed+e.recovered+e.deaths;t>0&&a.push({date:e.date,Total:t})})),l.a.createElement("div",{style:{width:"100%",height:300}},l.a.createElement(N.l,null,l.a.createElement(N.i,{data:a,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(N.e,{strokeDasharray:"3 3"}),l.a.createElement(N.n,{dataKey:"date"}),l.a.createElement(N.o,null),l.a.createElement(N.m,null),l.a.createElement(N.g,null),l.a.createElement(N.h,{type:"linear",dataKey:"Total",stroke:"#8884d8",activeDot:{r:8}}))))}}]),a}(n.Component)),C=(t(390),t(44)),j=t.n(C),O=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={data:[{name:"Jedah",cases:15},{name:"Jedah2",cases:20},{name:"Jedah3",cases:15},{name:"Jedah4",cases:37},{name:"Jedah5",cases:12},{name:"Jedah6",cases:50},{name:"Jedah7",cases:35},{name:"Jedah8",cases:10},{name:"Jedah9",cases:70}]},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{width:"100%",height:300}},l.a.createElement(N.l,null,l.a.createElement(N.d,{data:e,layout:"vertical"},l.a.createElement(N.n,{type:"number"}),l.a.createElement(N.o,{type:"category",padding:{left:20},dataKey:"name"}),l.a.createElement(N.c,{dataKey:"cases",fill:j()()},e.map((function(e,a){var t=j()();return l.a.createElement(N.f,{name:e.name,key:"cell-".concat(a),fill:t})})))))))}}]),a}(n.Component),S=(t(391),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={data:[{name:"1 Jan 2020",uv:4e3,pv:2400,amt:2400},{name:"9 Jan 2020",uv:3e3,pv:1398,amt:2210},{name:"15 Jan 2020",uv:2e3,pv:9800,amt:2290},{name:"21 Jan 2020",uv:2780,pv:3908,amt:2e3},{name:"12 Feb 2020",uv:1890,pv:4800,amt:2181},{name:"20 Feb 2020",uv:2390,pv:3800,amt:2500},{name:"25 Feb 2020",uv:3490,pv:4300,amt:2100}]},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{width:"100%",height:300}},l.a.createElement(N.l,null,l.a.createElement(N.d,{data:this.props.data},l.a.createElement(N.o,{type:"number"}),l.a.createElement(N.n,{type:"category",padding:{left:20},dataKey:"date"}),l.a.createElement(N.m,null),l.a.createElement(N.g,null),l.a.createElement(N.c,{dataKey:"confirmed",stackId:"a",fill:"#ffb700"}),l.a.createElement(N.c,{dataKey:"deaths",stackId:"a",fill:"#cc2225"}),l.a.createElement(N.c,{dataKey:"recovered",stackId:"a",fill:"#66cdaa"})))))}}]),a}(n.Component)),w=(t(392),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={data:[{name:"Saudi Arabian",value:400},{name:"Other Nationality",value:80}]},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement("div",{style:{width:"100%",height:300}},l.a.createElement(N.l,null,l.a.createElement(N.k,{onMouseEnter:this.onPieEnter},l.a.createElement(N.m,null),l.a.createElement(N.g,null),l.a.createElement(N.j,{data:e,cx:"50%",cy:"50%",innerRadius:50,outerRadius:100,fill:"#8884d8",paddingAngle:1,dataKey:"value"},e.map((function(e,a){return l.a.createElement(N.f,{name:e.name,key:"cell-".concat(a),fill:j()()})}))))))}}]),a}(n.Component)),D=t(69),A=t.n(D),T={getCases:function(e){switch(e){case 1:return new Promise((function(e,a){A.a.get("https://pomber.github.io/covid19/timeseries.json").then((function(t){t.data?e(t.data["Saudi Arabia"].filter((function(e){return!(0==e.confirmed&&0==e.deaths&&0==e.recovered)}))):a("no Data!")}))}));case 2:return new Promise((function(e,a){A.a.get("/api/data",{headers:{secret:"CoolSecret123"}}).then((function(t){t.data?e(t.data):a("no Data!")}))}))}},setCases:function(e){return new Promise((function(a,t){A.a.post("/api/data",e,{headers:{secret:"CoolSecret123"}}).then((function(e){e.data?a(e.data):t("no Data!")}))}))}},M=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={intensive:0,hospital:0,total:0,confirmed:0,recovered:0,deaths:0,critical:0,barCases2:[],date:{start:y()(),end:y()()},nationality:{in:0,out:0},source:{local:0,import:0},city:{Riyadh:0,Jeddah:0,Makkah:0,Medina:0,Dammam:0,Taif:0,Tabuk:0,Al_Kharj:0,Buraidah:0},ready:!1},t.handlePick=function(e,a){t.setState({date:{start:a.startDate,end:a.endDate}})},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.getCases(1).then((function(a){e.setState({barCases2:a});var t=a[a.length-1];e.setState({total:t.confirmed+t.recovered+t.deaths,confirmed:t.confirmed,recovered:t.recovered,deaths:t.deaths}),T.getCases(2).then((function(a){e.setState({intensive:a.intensive,hospital:a.hospital,nationality:{in:a.nationality.in,out:a.nationality.out},source:{local:a.source.local,import:a.source.import},city:{Riyadh:a.city.Riyadh,Jeddah:a.city.Jeddah,Makkah:a.city.Makkah,Medina:a.city.Medina,Dammam:a.city.Dammam,Taif:a.city.Taif,Tabuk:a.city.Tabuk,Al_Kharj:a.city.Al_Kharj,Buraidah:a.city.Buraidah}}),e.setState({ready:!0})}))}))}},{key:"formatData",value:function(e){var a=[];switch(e){case"pie1":a.push({name:"Saudi Arabian",value:parseInt(this.state.nationality.in)}),a.push({name:"Other Nationality",value:parseInt(this.state.nationality.out)});break;case"pie2":a.push({name:"Local",value:parseInt(this.state.source.local)}),a.push({name:"Imported",value:parseInt(this.state.source.import)});break;case"bar1":a.push({name:"Riyadh",cases:this.state.city.Riyadh}),a.push({name:"Tabuk",cases:this.state.city.Tabuk}),a.push({name:"Ta'if",cases:this.state.city.Taif}),a.push({name:"Jeddah",cases:this.state.city.Jeddah}),a.push({name:"Makkah",cases:this.state.city.Makkah}),a.push({name:"Medina",cases:this.state.city.Medina}),a.push({name:"Dammam",cases:this.state.city.Dammam}),a.push({name:"Al Kharj",cases:this.state.city.Al_Kharj}),a.push({name:"Buraidah",cases:this.state.city.Buraidah})}return a}},{key:"render",value:function(){return!0===this.state.ready?l.a.createElement("div",{id:"dashboard",className:"container"},l.a.createElement("div",{className:"columns flex-centered my-2"},l.a.createElement("div",{className:"column col-sm-12 col-9"},l.a.createElement("h5",null,"Coronavirus Outbreak in Saudi Arabia")),l.a.createElement("div",{className:"column col-sm-12 col-3"},l.a.createElement(b.a,{buttonClasses:["btn"],startDate:"1/1/2020",onEvent:this.handlePick},l.a.createElement("button",{className:"btn form-input date-wrapper"},l.a.createElement("span",{className:"date"},this.state.date.start.format("D MMM YYYY")),l.a.createElement("span",{className:"date-seperator"},"\u2192"),l.a.createElement("span",{className:"date"},this.state.date.end.format("D MMM YYYY")))))),l.a.createElement("div",{className:"number-graph-wrapper"},l.a.createElement("div",{className:"number-graph mr-2"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title "},l.a.createElement("h6",null,l.a.createElement("b",null,"CONFIRMED CASES")))),l.a.createElement("div",{className:"card-body status-confirmed"},l.a.createElement("div",{className:"cases-container"},l.a.createElement("h2",{className:"case"},this.state.confirmed),l.a.createElement("span",{className:"info"},(this.state.confirmed/this.state.total*100).toString().substring(0,3),"% of total cases")),l.a.createElement("div",{id:"lineChartContainer"},l.a.createElement(g,{data:this.state.barCases2,name:"confirmed"}))))),l.a.createElement("div",{className:"number-graph mr-2"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title "},l.a.createElement("h6",null,l.a.createElement("b",null,"HOSPITALIZED CASES")))),l.a.createElement("div",{className:"card-body status-hospitalized"},l.a.createElement("div",{className:"cases-container"},l.a.createElement("h2",{className:"case"},this.state.hospital),l.a.createElement("span",{className:"info"},(this.state.hospital/this.state.total*100).toString().substring(0,3),"% of total cases")),l.a.createElement("div",{id:"lineChartContainer"},l.a.createElement(g,{data:this.state.barCases2,name:"deaths"}))))),l.a.createElement("div",{className:"number-graph mr-2"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title "},l.a.createElement("h6",null,l.a.createElement("b",null,"CASES IN INTENSIVE CARE")))),l.a.createElement("div",{className:"card-body status-icu"},l.a.createElement("div",{className:"cases-container"},l.a.createElement("h2",{className:"case"},this.state.intensive),l.a.createElement("span",{className:"info"},(this.state.intensive/this.state.total*100).toString().substring(0,3),"% of total cases")),l.a.createElement("div",{id:"lineChartContainer"},l.a.createElement(g,{data:this.state.barCases2,name:"deaths"}))))),l.a.createElement("div",{className:"number-graph mr-2"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title "},l.a.createElement("h6",null,l.a.createElement("b",null,"RECOVERED CASES")))),l.a.createElement("div",{className:"card-body status-recovered"},l.a.createElement("div",{className:"cases-container"},l.a.createElement("h2",{className:"case"},this.state.recovered),l.a.createElement("span",{className:"info"},(this.state.recovered/this.state.total*100).toString().substring(0,3),"% of total cases")),l.a.createElement("div",{id:"lineChartContainer"},l.a.createElement(g,{data:this.state.barCases2,name:"recovered"}))))),l.a.createElement("div",{className:"number-graph mr-2"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title "},l.a.createElement("h6",null,l.a.createElement("b",null,"DEATHS")))),l.a.createElement("div",{className:"card-body status-died"},l.a.createElement("div",{className:"cases-container"},l.a.createElement("h2",{className:"case"},this.state.deaths),l.a.createElement("span",{className:"info"},(this.state.deaths/this.state.total*100).toString().substring(0,3),"% of total cases")),l.a.createElement("div",{id:"lineChartContainer"},l.a.createElement(g,{data:this.state.barCases2,name:"deaths"})))))),l.a.createElement("div",{className:"columns my-2"},l.a.createElement("div",{className:"column col-sm-12 col-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title h6"},"Rise Trend"),l.a.createElement("div",{className:"card-subtitle text-gray mt-1"},"30th Jan 2020 to Today")),l.a.createElement("div",{className:"card-body"},l.a.createElement(k,{data:this.state.barCases2}))))),l.a.createElement("div",{className:"columns my-2"},l.a.createElement("div",{className:"column col-sm-12 col-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title h6"},"Nationality")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{id:"pieChartContainer"},l.a.createElement(w,{data:this.formatData("pie1")}))))),l.a.createElement("div",{className:"column col-sm-12 col-6"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title h6"},"States")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{id:"verticalBarChartContainer",className:"chartDimensions"},l.a.createElement(O,{data:this.formatData("bar1")}))))),l.a.createElement("div",{className:"column col-sm-12 col-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title h6"},"Transmission Source")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{id:"pieChartContainer"},l.a.createElement(w,{data:this.formatData("pie2")})))))),l.a.createElement("div",{className:"columns my-2"},l.a.createElement("div",{className:"column col-sm-12 col-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-title h6"},"Confirmed COVID-19 Cases"),l.a.createElement("div",{className:"card-subtitle text-gray mt-1"},"22th Jan 2020 to Today")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{id:"stackedBarChartContainer",className:"stackedBarChartDimensions"},l.a.createElement(S,{data:this.state.barCases2}))))))):l.a.createElement("div",null,"Loading ...")}}]),a}(n.Component),J=t(31),I=(t(409),t(417)),K=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={email:"",password:"",error:!1},t.handleEmail=t.handleEmail.bind(Object(J.a)(t)),t.handlePassword=t.handlePassword.bind(Object(J.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(J.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){"admin@plume.lab"==this.state.email&&"@dminPass"==this.state.password?(localStorage.setItem("Auth",!0),this.forceUpdate()):this.setState({error:!0})}},{key:"render",value:function(){return localStorage.getItem("Auth")?l.a.createElement(i.a,{to:"/data"}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns flex-centered"},l.a.createElement("div",{className:"card"},l.a.createElement("article",{className:"card-body"},l.a.createElement("h4",{className:"card-title mb-4 mt-1"},"Sign in"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Your email"),l.a.createElement("input",{name:"",className:"form-control",placeholder:"Email",value:this.state.email,onChange:this.handleEmail,type:"email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Your password"),l.a.createElement("input",{className:"form-control",placeholder:"******",type:"password",value:this.state.password,onChange:this.handlePassword})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox"})," Save password"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"login"))),l.a.createElement(I.a,{isOpen:this.state.error,color:"danger"},"Wrong Password , Check Again")))))}}]),a}(n.Component),R=(t(412),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={ready:!1,intensive:0,hospital:0,nationality:{in:0,out:0},source:{local:0,import:0},city:{Riyadh:0,Jeddah:0,Makkah:0,Medina:0,Dammam:0,Taif:0,Tabuk:0,Al_Kharj:0,Buraidah:0}},t.handleSubmit=t.handleSubmit.bind(Object(J.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.getCases(2).then((function(a){e.setState({intensive:a.intensive,hospital:a.hospital,nationality:{in:a.nationality.in,out:a.nationality.out},source:{local:a.source.local,import:a.source.import},city:{Riyadh:a.city.Riyadh,Jeddah:a.city.Jeddah,Makkah:a.city.Makkah,Medina:a.city.Medina,Dammam:a.city.Dammam,Taif:a.city.Taif,Tabuk:a.city.Tabuk,Al_Kharj:a.city.Al_Kharj,Buraidah:a.city.Buraidah}}),e.setState({ready:!0})}))}},{key:"updateValue",value:function(e,a,t){e[a]=t.target.value,this.setState({val:e})}},{key:"handleSubmit",value:function(e){localStorage.removeItem("Auth");var a=this.state;delete a.val,T.setCases(a),this.forceUpdate()}},{key:"render",value:function(){var e=this;return localStorage.getItem("Auth")?!0===this.state.ready?l.a.createElement("div",{id:"dashboard",className:"container"},l.a.createElement("div",{className:"columns flex-centered my-2"},l.a.createElement("div",{style:{width:"60%"}},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("h1",{className:"mainColor"},"COVID Data Update")),l.a.createElement("hr",null),l.a.createElement("h4",null,"Cases"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"form-label",htmlFor:"validationDefault01"},"hospitalized cases"),l.a.createElement("input",{type:"number",min:"0",value:this.state.hospital,onChange:function(a){e.setState({hospital:a.target.value})},className:"form-input input-lg"})),l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"form-label",htmlFor:"validationDefault01"},"cases in intensive care"),l.a.createElement("input",{type:"number",min:"0",value:this.state.intensive,onChange:function(a){e.setState({intensive:a.target.value})},className:"form-input input-lg"}))),l.a.createElement("h4",null,"Nationality"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"form-label",htmlFor:"validationDefault01"},"Saudi Arabian"),l.a.createElement("input",{type:"number",min:"0",value:this.state.nationality.in,onChange:function(a){return e.updateValue(e.state.nationality,"in",a)},className:"form-input input-lg"})),l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"form-label",htmlFor:"validationDefault01"},"Other Nationality"),l.a.createElement("input",{type:"number",min:"0",value:this.state.nationality.out,onChange:function(a){return e.updateValue(e.state.nationality,"out",a)},className:"form-input input-lg"}))),l.a.createElement("h4",null,"Transmission Source"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"form-label",htmlFor:"validationDefault01"},"Local"),l.a.createElement("input",{type:"number",min:"0",value:this.state.source.local,onChange:function(a){return e.updateValue(e.state.source,"local",a)},className:"form-input input-lg"})),l.a.createElement("div",{className:"col-md-4 mb-3"},l.a.createElement("label",{className:"form-label",htmlFor:"validationDefault01"},"Imported"),l.a.createElement("input",{type:"number",min:"0",value:this.state.source.import,onChange:function(a){return e.updateValue(e.state.source,"import",a)},className:"form-input input-lg"}))),l.a.createElement("h4",null,"Numbers By City"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"},"Riyadh"," "),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Riyadh,onChange:function(a){return e.updateValue(e.state.city,"Riyadh",a)},className:"form-input input-lg",placeholder:"Riyadh"})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"},"Jeddah"," "),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Jeddah,onChange:function(a){return e.updateValue(e.state.city,"Jeddah",a)},className:"form-input input-lg",placeholder:"Jeddah "})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"},"Makkah"," "),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Makkah,onChange:function(a){return e.updateValue(e.state.city,"Makkah",a)},className:"form-input input-lg",placeholder:"Makkah "})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"}," ","Medina"," "),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Medina,onChange:function(a){return e.updateValue(e.state.city,"Medina",a)},className:"form-input input-lg",placeholder:"\tMedina "})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"},"Dammam"),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Dammam,onChange:function(a){return e.updateValue(e.state.city,"Dammam",a)},className:"form-input input-lg",placeholder:"\tDammam  "})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"},"Ta'if"),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Taif,onChange:function(a){return e.updateValue(e.state.city,"Taif",a)},className:"form-input input-lg",placeholder:"\tTa'if   "})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"},"Tabuk"),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Tabuk,onChange:function(a){return e.updateValue(e.state.city,"Tabuk",a)},className:"form-input input-lg",placeholder:"\tTabuk "})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"},"Al Kharj"),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Al_Kharj,onChange:function(a){return e.updateValue(e.state.city,"Al_Kharj",a)},className:"form-input input-lg",placeholder:"\tAl Kharj  "})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-8 mb-3"},l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon addon-lg"},"Buraidah"),l.a.createElement("input",{type:"number",min:"0",value:this.state.city.Buraidah,onChange:function(a){return e.updateValue(e.state.city,"Buraidah",a)},className:"form-input input-lg",placeholder:"\tBuraidah "})))),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit New Data"))))):l.a.createElement("div",null,"Loading..."):l.a.createElement(i.a,{to:"/login"})}}]),a}(n.Component));var B=function(){return l.a.createElement("div",{id:"app"},l.a.createElement(p,null),l.a.createElement("div",{className:"content"},l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/",component:M,exact:!0}),l.a.createElement(i.b,{path:"/login",component:K,exact:!0}),l.a.createElement(i.b,{path:"/data",component:R,exact:!0}))),l.a.createElement(E,null))};c.a.render(l.a.createElement(s.a,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[194,1,2]]]);
//# sourceMappingURL=main.5c4ea836.chunk.js.map
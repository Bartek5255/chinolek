(function(e){function t(t){for(var n,c,o=t[0],i=t[1],l=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0f29":function(e,t,a){},"483e":function(e,t,a){"use strict";a("0f29")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[0==e.stan?a("login",{on:{joined:e.joined}}):e._e(),1==e.stan?a("game"):e._e()],1)},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nazwaGracza,expression:"nazwaGracza"}],attrs:{type:"text",name:"nazwa",id:"nazwa"},domProps:{value:e.nazwaGracza},on:{input:function(t){t.target.composing||(e.nazwaGracza=t.target.value)}}}),a("button",{attrs:{type:"submit"},on:{click:e.loguj}},[e._v("wyslij")])])},o=[],i=a("bc3a"),l=a.n(i);l.a.defaults.withCredentials=!0;var u={name:"Login",data:function(){return{nazwaGracza:"?"}},props:[],methods:{loguj:function(){var e=this;console.log(this.nazwaGracza),l.a.get("http://localhost:3000/loged?name=".concat(this.nazwaGracza),null,{useCredentials:!0}).then((function(){e.$emit("joined")}))}}},d=u,f=(a("de44"),a("2877")),h=Object(f["a"])(d,c,o,!1,null,"008a0b72",null),p=h.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{attrs:{id:"gracze"}},[a("div",{class:{szaroBuro:e.daneGry.niebieski.status<2},attrs:{id:"niebieski"}},[e._v(e._s(e.daneGry.niebieski.name))]),a("div",{class:{szaroBuro:e.daneGry.zielony.status<2},attrs:{id:"zielony"}},[e._v(e._s(e.daneGry.zielony.name))]),a("div",{class:{szaroBuro:e.daneGry.czerwony.status<2},attrs:{id:"czerwony"}},[e._v(e._s(e.daneGry.czerwony.name))]),a("div",{class:{szaroBuro:e.daneGry.zolty.status<2},attrs:{id:"zolty"}},[e._v(e._s(e.daneGry.zolty.name))]),a("div",{attrs:{id:"ready"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",name:"czeck",id:"czeck"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:[function(t){var a=e.checked,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=null,c=e._i(a,s);n.checked?c<0&&(e.checked=a.concat([s])):c>-1&&(e.checked=a.slice(0,c).concat(a.slice(c+1)))}else e.checked=r},e.checkcheck]}}),e.checked?a("p",[e._v("chce juz grac")]):e._e(),e.checked?e._e():a("p",[e._v("czekam na ludzi")])]),e.daneGry.gameStart?a("p",[e._v("Gra działa :")]):e._e(),e.daneGry.gameStart?a("p",[e._v(": "+e._s(this.czas))]):e._e()]),a("div",{attrs:{id:"plansza"}},[a("img",{attrs:{src:"/assets/plansza.png",alt:""}})]),a("div",{attrs:{id:"kostka"}},["1"==this.roll?a("i",{staticClass:"fas fa-dice-one fa-10x"}):e._e(),"2"==this.roll?a("i",{staticClass:"fas fa-dice-two fa-10x"}):e._e(),"3"==this.roll?a("i",{staticClass:"fas fa-dice-three fa-10x"}):e._e(),"4"==this.roll?a("i",{staticClass:"fas fa-dice-four fa-10x"}):e._e(),"5"==this.roll?a("i",{staticClass:"fas fa-dice-five fa-10x"}):e._e(),"6"==this.roll?a("i",{staticClass:"fas fa-dice-six fa-10x"}):e._e()]),3==e.daneGry[e.me].status?a("button",{attrs:{id:"tuRzut"},on:{click:e.rzut}},[e._v("roll dice")]):e._e()])},v=[];a("b0c0");l.a.defaults.withCredentials=!0;var z={name:"Game",data:function(){return{daneGry:{niebieski:{name:""},zielony:{name:""},czerwony:{name:""},zolty:{name:""}},cyklicznosc:"",checked:!1,me:"",roll:"",czas:0,rzuconed:!1,statusGry:!1}},props:[],methods:{zapytajkaPoj:function(){var e=this;l.a.get("http://localhost:3000/gra",null,{useCredentials:!0}).then((function(t){e.daneGry=t.data.dane,e.me=t.data.name,e.czas=t.data.czas,e.statusGry=t.data.dane.gameStart,console.log(t.data),console.log(e.me),console.log(e.czas)})),this.czas<=0&&this.statusGry&&(this.tura(),this.rzuconed=!1)},checkcheck:function(){l.a.post("http://localhost:3000/gotowy",null,{useCredentials:!0})},zapytajkaConst:function(){this.cyklicznosc=setInterval(this.zapytajkaPoj,1e3)},rzut:function(){var e=this;l.a.get("http://localhost:3000/rzut",null,{useCredentials:!0}).then((function(t){e.roll=t.data,console.log(e.roll);var a=new SpeechSynthesisUtterance(e.roll);speechSynthesis.speak(a)}))},tura:function(){l.a.post("http://localhost:3000/nextTura",null,{useCredentials:!0})}},mounted:function(){this.zapytajkaConst()},destroyed:function(){clearInterval(this.cyklicznosc)}},m=z,k=(a("483e"),Object(f["a"])(m,y,v,!1,null,"6bad44e2",null)),_=k.exports,g={name:"App",data:function(){return{stan:!1}},components:{Login:p,Game:_},methods:{joined:function(){this.stan=!0}}},b=g,w=(a("034f"),Object(f["a"])(b,r,s,!1,null,null,null)),j=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,a){},"9c25":function(e,t,a){},de44:function(e,t,a){"use strict";a("9c25")}});
//# sourceMappingURL=app.52210c98.js.map
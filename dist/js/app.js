(()=>{var e={834:()=>{var e=[{name:"pineapple",calories:33,fat:0,carbs:11.8},{name:"apple",calories:57,fat:.7,carbs:12.1},{name:"orange",calories:51,fat:.2,carbs:11.3},{name:"cherries",calories:67,fat:.4,carbs:14.6}],t=document.querySelector(".app--values"),n=window.matchMedia("screen and (min-width: 500px )"),a=function(e){e?c():r()},r=function(){t.innerHTML="";var n=document.createElement("ul");e.forEach((function(e){var t=document.createElement("li"),a=document.createElement("div");a.innerHTML="<strong>Name: </strong>".concat(e.name);var r=document.createElement("div");r.innerHTML="<strong>Calories: </strong>".concat(e.calories);var c=document.createElement("div");c.innerHTML="<strong>Fat: </strong>".concat(e.fat);var o=document.createElement("div");o.innerHTML="<strong>Carbs: </strong>".concat(e.carbs),t.appendChild(a),t.appendChild(r),t.appendChild(c),t.appendChild(o),n.appendChild(t)})),t.appendChild(n)},c=function(){t.innerHTML="";var n=document.createElement("table"),a=document.createElement("thead");a.innerHTML="<tr> <th>Name</th>  <th>Calories</th>  <th>Fat</th>  <th>Carbs</th></tr>";var r=document.createElement("tbody");e.forEach((function(e){var t=document.createElement("tr");t.innerHTML="<td>".concat(e.name,"</td><td>").concat(e.calories,"</td><td>").concat(e.fat,"</td><td>").concat(e.carbs,"</td>"),r.appendChild(t)})),n.appendChild(a),n.appendChild(r),t.appendChild(n)};a(n.matches),n.addListener((function(e){a(e.matches)}))}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(834)})()})();
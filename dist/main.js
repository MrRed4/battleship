(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,":root {\n    --grid-colour: rgb(125, 255, 150);\n    --ship-colour: rgb(50, 225, 90);\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\n}\n\n#container {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    height: 100%;\n}\n\n#container > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.board {\n    border: 1px solid var(--grid-colour);\n    background-color: var(--grid-colour);\n    display: grid;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    gap: 1px;\n    rotate: -90deg;\n}\n\n.square {\n    background: white;\n    width: 48px;\n    height: 48px;\n    cursor: pointer;\n    user-select: none;\n}\n\n.square:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n}\n\n.list > ul {\n    list-style: none;\n    display: flex;\n    align-items: center;\n}\n\nul > li {\n    margin: 12px;\n    cursor: grab;\n}\n\n.ship, .hit {\n    background-color: var(--ship-colour);\n    outline: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.miss {\n    outline: 1px solid rgb(75, 75, 75);\n    background-color: gray;\n}\n\n.miss:hover {\n    background-color: rgb(75, 75, 75);\n}\n\n.ship-hit {\n    background-color: red;\n    outline: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.ship-hit:hover {\n    background-color: rgb(255, 110, 110);\n}\n\n.winner {\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n}\n\n.dock-ship-square {\n    border: 1px solid black;\n    border-top: none;\n    background-color: var(--ship-colour);\n    width: 16px;\n    height: 16px;\n}\n\n.destroyed {\n    border: 1px solid black;\n    border-top: none;\n    background-color: rgb(255, 40, 40) !important;\n    width: 16px;\n    height: 16px;\n}\n\nul * > :first-child {\n    border-top: 1px solid black;\n}\n\nli > div {\n    display: flex;\n    flex-direction: column;\n}\n\n.placed {\n    filter: grayscale(1);\n}\n\n.moving {\n    opacity: 0.5;\n}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),s=n(659),d=n.n(s),c=n(56),l=n.n(c),u=n(540),p=n.n(u),h=n(113),f=n.n(h),m=n(365),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(m.A,b),m.A&&m.A.locals&&m.A.locals;class v{constructor(e,t){this.name=e,this.length=t,this.timesHit=0}hit(){this.timesHit++}isSunk(){return this.length<=this.timesHit}}class g{constructor(){this.board=function(e,t=e){let n=[];for(let r=0;r<e;r++){n[r]=[];for(let e=0;e<t;e++)n[r][e]=""}return n}(10),this.missed=0,this.discovered=[],this.placed=[]}placeShip(e,t,n){let r=this.getShip(e);if(t>this.board.length||t<0||n>this.board.length||n<0||n+1-r.length<0)throw new Error(`Ship must be placed within bounds: ${r.name}, X: ${t}, Y: ${n}`);if(!this.board[t][n]){let e=r.length;for(let o=n;e>0;o--,e--)this.board[t][o]=r;this.placed.push(r)}}receiveAttack(e,t){this.board[e][t]instanceof v?this.board[e][t].hit():this.missed++,this.discovered.push([e,t])}isDiscovered(e,t){return this.discovered.some((n=>n[0]==e&&n[1]==t))}docks=[new v("Carrier",5),new v("Battleship",4),new v("Destroyer",3),new v("Submarine",3),new v("Patrol-Boat",2)];getShip(e){return this.docks.filter((t=>t.name.toLowerCase()===e.toLowerCase()))[0]}}class y{constructor(e="Player 1"){this.board=new g,this.name=e}get field(){return this.board.board}}const x=new y,k=new class extends y{constructor(e="Computer"){super(),this.name=e}#e(){return Math.floor(10*Math.random())}randomAttack(e){let t=this.#e(),n=this.#e();if(e.board.isDiscovered(t,n))return this.randomAttack(e);e.board.receiveAttack(t,n)}randomBoard(){this.board.docks.forEach((e=>{if(this.board.placed.includes(e))return;let t=Math.floor(Math.random()*(9-e.length)+e.length),n=this.#e();this.board.placeShip(e.name,n,t)})),5!=this.board.placed.length&&this.randomBoard()}};function S(){let e=k.board.placed.filter((e=>e.isSunk())),t=x.board.placed.filter((e=>e.isSunk()));return 5===e.length?x:5===t.length?k:void 0}function w(e){let t=e.target;k.board.isDiscovered(t.dataset.x,t.dataset.y)||S()||(k.board.receiveAttack(t.dataset.x,t.dataset.y),k.randomAttack(x),L(),C(),S()&&(document.querySelector(".winner").textContent=`${S().name} is the winner!`))}function C(){!function(){let e=document.querySelectorAll(".list > ul")[0];e.textContent="",x.board.docks.forEach((t=>{let n=document.createElement("li");n.classList.add(t.name),x.board.placed.includes(t)&&n.classList.add("placed"),e.appendChild(n);for(let e=0;e<t.length;e++){let e=document.createElement("div");x.board.placed[x.board.placed.indexOf(t)].isSunk()&&e.classList.add("destroyed"),e.classList.add("dock-ship-square"),n.appendChild(e)}}))}(),function(){let e=document.querySelectorAll(".list > ul")[1];e.textContent="",k.board.docks.forEach((t=>{let n=document.createElement("li");n.classList.add(t.name),k.board.placed.includes(t)&&n.classList.add("placed"),e.appendChild(n);for(let e=0;e<t.length;e++){let e=document.createElement("div");k.board.placed[k.board.placed.indexOf(t)].isSunk()&&e.classList.add("destroyed"),e.classList.add("dock-ship-square"),n.appendChild(e)}}))}()}function L(){!function(){document.querySelector(".second").textContent="";for(let e=0;e<10;e++)for(let t=0;t<10;t++){let n=k.field[e][t],r=document.createElement("div");r.addEventListener("click",w),r.classList.add("square"),r.dataset.x=e,r.dataset.y=t,k.board.isDiscovered(e,t)&&(n instanceof v?(r.classList.add("ship"),n.isSunk()&&(r.textContent="•")):r.classList.add("miss")),document.querySelector(".second").appendChild(r)}}(),function(){document.querySelector(".first").textContent="";for(let e=0;e<10;e++)for(let t=0;t<10;t++){let n=x.field[e][t],r=document.createElement("div");r.classList.add("square"),r.dataset.x=e,r.dataset.y=t,n instanceof v&&(r.classList.add("ship"),n.isSunk()&&(r.textContent="•")),x.board.isDiscovered(e,t)&&(n instanceof v?r.classList.add("ship-hit"):r.classList.add("miss")),document.querySelector(".first").appendChild(r)}}()}x.board.placeShip("Carrier",5,6),x.board.placeShip("Battleship",9,9),x.board.placeShip("Destroyer",8,5),x.board.placeShip("Submarine",9,3),x.board.placeShip("Patrol-Boat",0,1),k.randomBoard(),L(),C()})();
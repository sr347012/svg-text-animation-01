

// document.getElementById('my-form').setAttribute('contenteditable', true)
// console.log(d);
// console.log(d.split(' ').join());

const topX = document.getElementById('topX');
const topY = document.getElementById('topY');
const topCX = document.getElementById('topCX');
const topCY = document.getElementById('topCY');
const btmX = document.getElementById('btmX');
const btmY = document.getElementById('btmY');
const btmCX = document.getElementById('btmCX');
const btmCY = document.getElementById('btmCY');

var topX_new = 0;
var topY_new = 0;
var topCX_new = 0;
var topCY_new = 0;
var btmX_new = 0;
var btmY_new = 0;
var btmCX_new = 0;
var btmCY_new = 0;

var updated_path = "";
// var topX_ph = document.getElementsByName('topX-ph');

// topX_ph[0].placeholder = 490;


topX.placeholder = 490;
topY.placeholder = 118;
topCX.placeholder = 520;
topCY.placeholder = 423;
btmX.placeholder = 326;
btmY.placeholder = 461;
btmCX.placeholder = 416;
btmCY.placeholder = 455;

// document.getElementById('leftArcRed').setAttribute('d', "M490 118C520 423 416 455 326 461");

topX.addEventListener('change', (e) => {
    topX.innerText = e.target.value;
    topX_new = e.target.value;
    updateFunction();
  });
  topY.addEventListener('change', (e) => {
    topY.innerText = e.target.value;
    topY_new = e.target.value;
    updateFunction();
  });
  topCX.addEventListener('change', (e) => {
    topCX.innerText = e.target.value;
    topCX_new = e.target.value;
    updateFunction();
  });
  topCY.addEventListener('change', (e) => {
    topCY.innerText = e.target.value;
    topCY_new = e.target.value;
    updateFunction();
  });
  btmX.addEventListener('change', (e) => {
    btmX.innerText = e.target.value;
    btmX_new = e.target.value;
    updateFunction();
  });
  btmY.addEventListener('change', (e) => {
    btmY.innerText = e.target.value;
    btmY_new = e.target.value;
    updateFunction();
  });
  btmCX.addEventListener('change', (e) => {
    btmCX.innerText = e.target.value;
    btmCX_new = e.target.value;
    updateFunction();
  });
  btmCY.addEventListener('change', (e) => {
    btmCY.innerText = e.target.value;
    btmCY_new = e.target.value;
    updateFunction();
  });

  function updateFunction () {
    const d = document.getElementById('leftArcRed').getAttribute('d');
    const elem= d.split(' ');
    console.log("OLD---",d);
    var elems = [];
    for (const x in elem) {
        if (elem[x].indexOf('C') >= 0)  elem[x].split('C').forEach((y)=> elems.push(y));

        if (elem[x].indexOf('M') >= 0)  elems.push(elem[x].split('M').join(' ').trim());
        
        if (elem[x].indexOf('C') < 0 && elem[x].indexOf('M') < 0) elems.push(elem[x])
    }
    // console.log(elems);
    if (topX_new == 0) topX_new = elems[0];
    if (topY_new == 0) topY_new = elems[1];
    if (topCX_new == 0) topCX_new = elems[2];
    if (topCY_new == 0) topCY_new = elems[3];
    if (btmX_new == 0) btmX_new = elems[6];
    if (btmY_new == 0) btmY_new = elems[7];
    if (btmCX_new == 0) btmCX_new = elems[4];
    if (btmCY_new == 0) btmCY_new = elems[5];

    updated_path = 'M'+topX_new+' '+topY_new+'C'+topCX_new+' '+topCY_new+' '+btmCX_new
    +' '+btmCY_new+' '+btmX_new+' '+btmY_new;
    console.log("NEW---",updated_path);
    document.getElementById('leftArcRed').setAttribute('d', updated_path)
  }

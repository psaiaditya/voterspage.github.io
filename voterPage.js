var h1 = document.getElementById("bjp");
var h2 = document.getElementById("congress");
var h3 = document.getElementById("aap");
var h4 = document.getElementById("total");

let countBjp =parseInt(localStorage.getItem('countBjp'))|| 0;

function bjp() {

    countBjp += 1;
    h1.innerText = countBjp;
    localStorage.setItem('countBjp',countBjp);
}

let countCongress = parseInt(localStorage.getItem('countCongress'))|| 0;

function congress() {

    countCongress += 1;
    h2.innerText = countCongress;
    localStorage.setItem('countCongress',countCongress);
}

let countAap = parseInt(localStorage.getItem('countAap'))|| 0;

function aap() {

    countAap += 1;
    h3.innerText = countAap;
    localStorage.setItem('countAap',countAap);
}
let countTotal = 0;

function total() {
    // let t=h1.value;
    //let b=h2.value;
    countTotal = parseInt(countBjp) + parseInt(countCongress) + parseInt(countAap);
    h4.innerText = countTotal;
}
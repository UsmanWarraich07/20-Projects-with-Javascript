const main = document.getElementById('main');
const userBtn = document.getElementById('user');
const doubleBtn = document.getElementById('double');
const showMillionares = document.getElementById('show-millionares');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data =[];
randomUser();
randomUser();
randomUser();

//create random user
async function randomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  const user = data.results[0];

  const getUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  addData(getUser);
}
// duble money
function dubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 }
  })
  updateDOM()
}
// Sort by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money)
  updateDOM()
}

//showMillionare
function showMillionare() {
  data = data.filter(item => {
    return item.money > 1000000
  })
  updateDOM();
};
//calculate entire Wealth
function calculateWealth() {
   const wealth = data.reduce((acc, num) => (acc + num.money), 0)
   const wealthEl = document.createElement('div');
   wealthEl.innerHTML = `<h3>Total wealth: <strong>${moneyFormate(wealth)}</strong></h3>`;
   main.appendChild(wealthEl);
}
//add new obj to new arr
function addData(obj) {
  data.push(obj)
  updateDOM()
}

function updateDOM(providedData = data) {
  main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person')
    element.innerHTML = `<strong>${item.name}</strong> ${moneyFormate(item.money)}`
 
    main.appendChild(element)
  })

}
// Money formate
function moneyFormate(item) {
 return '$' + item.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//add EventListeners

//add user
userBtn.addEventListener('click', randomUser)
//dubble money
doubleBtn.addEventListener('click', dubleMoney)
//sort by richest
sortBtn.addEventListener('click', sortByRichest);
//Show Millionares persons
showMillionares.addEventListener('click', showMillionare);
calculateWealthBtn.addEventListener('click', calculateWealth)
const salaryValue = document.getElementById("salaryInput");
const form = document.getElementById("form");
const monthlySalary = document.getElementById("salary");
const monthlyTax = document.getElementById("tax");
const afterTax = document.getElementById("afterTax");
const yearSalary = document.getElementById("ySalary");
const yearTax = document.getElementById("yTax");
const yAfterTax = document.getElementById("yAfterTax");
//Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let salary = parseInt(salaryValue.value);

  let tax = 0;
  if (salary <= 10000) {
    tax = 0;
  } else if (salary <= 40000) {
    tax = (salary - 10000) * 0.05;
  } else if (salary <= 80000) {
    tax = (40000 - 10000) * 0.05 + (salary - 40000) * 0.1;
  } else if (salary <= 120000) {
    tax =
      (40000 - 10000) * 0.05 + (80000 - 40000) * 0.1 + (salary - 80000) * 0.15;
  } else if (salary <= 150000) {
    tax =
      (40000 - 10000) * 0.05 +
      (80000 - 40000) * 0.1 +
      (120000 - 80000) * 0.15 +
      (salary - 120000) * 0.175;
  } else if (salary <= 180000) {
    tax =
      (40000 - 10000) * 0.05 +
      (80000 - 40000) * 0.1 +
      (120000 - 80000) * 0.15 +
      (150000 - 120000) * 0.175 +
      (salary - 150000) * 0.2;
  } else if (salary <= 200000) {
    tax =
      (40000 - 10000) * 0.05 +
      (80000 - 40000) * 0.1 +
      (120000 - 80000) * 0.15 +
      (150000 - 120000) * 0.175 +
      (180000 - 150000) * 0.2 +
      (salary - 180000) * 0.225;
  } else {
    tax =
      (40000 - 10000) * 0.05 +
      (80000 - 40000) * 0.1 +
      (120000 - 80000) * 0.15 +
      (150000 - 120000) * 0.175 +
      (180000 - 150000) * 0.2 +
      (200000 - 180000) * 0.225 +
      (salary - 200000) * 0.25;
  }
  //return tax;
  //console.log(tax);
  monthlySalary.innerText = salary;
  monthlyTax.innerText = tax;
  afterTax.innerText = salary - tax;
  yearSalary.innerText = salary * 12;
  yearTax.innerText = tax * 12;
  yAfterTax.innerText = salary * 12 - tax * 12;

  salaryValue.value = " ";
});

const monthEl = document.querySelector(".date h1");
const dateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const requiredMonth = new Date().getMonth();

// Getting the last day of the current month
const lastDay = new Date(
  new Date().getFullYear(),
  requiredMonth + 1,
  0
).getDate();

// Getting the first day of the current month for a week starting from sunday rather than monday!
const firstDay = new Date(new Date().getFullYear(), requiredMonth, 1).getDay();

const curDate = new Date();
const curMonth = curDate.toLocaleDateString("default", { month: "long" });
monthEl.textContent = curMonth;

const curModifiedDate = curDate.toLocaleDateString("default", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

dateEl.textContent = curModifiedDate;

let days = "";

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}
for (let i = firstDay; i > 0; i--) {
  days = `<div class="empty"></div>` + days;
}

daysEl.innerHTML = days;

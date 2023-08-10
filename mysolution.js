const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const dailyResult = document.querySelectorAll(".card-time_daily");
const weeklyResult = document.querySelectorAll(".card-time_weekly");
const monthlyResult = document.querySelectorAll(".card-time_monthly");

daily.addEventListener("click", () => {
  dailyResult.forEach((resultDay) => {
    resultDay.style.display = "block";
  });
  weeklyResult.forEach((resultWeek) => {
    resultWeek.style.display = "none";
  });
  monthlyResult.forEach((resultMonth) => {
    resultMonth.style.display = "none";
  });
});
weekly.addEventListener("click", () => {
  dailyResult.forEach((resultDay) => {
    resultDay.style.display = "none";
  });
  weeklyResult.forEach((resultWeek) => {
    resultWeek.style.display = "block";
  });
  monthlyResult.forEach((resultMonth) => {
    resultMonth.style.display = "none";
  });
});
monthly.addEventListener("click", () => {
  dailyResult.forEach((resultDay) => {
    resultDay.style.display = "none";
  });
  weeklyResult.forEach((resultWeek) => {
    resultWeek.style.display = "none";
  });
  monthlyResult.forEach((resultMonth) => {
    resultMonth.style.display = "block";
  });
});

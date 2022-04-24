function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // (today.getUTCDay()||7) //if first val is 0 (false) (sunday) then it will print 7
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  let weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
}
export const result = getWeekNumber(new Date());

function getMondayOfCurrentWeek() {
  const today = new Date();
  const first = today.getDate() - (today.getDay() || 7) + 1; // (today.getDay()||7) //if first val is 0 (false) (sunday) then it will print 7
  const MonthsInfo = new Date(today.setDate(first));
  const mondayMonthsName = MonthsInfo.toLocaleString("default", {
    month: "short",
  });
  const monday = new Date(today.setDate(first)).getDate();
  // console.log(today.toLocaleString("default", {
  //   month: "short",
  // }));
  return [monday, mondayMonthsName];
}

export const mondayAndMonthOfCurrentWeek = getMondayOfCurrentWeek();

function getAllMondaysOfAYear() {
  let d = new Date(),
    mondays = [];

  // Get nearest Monday
  while (d.getDay() !== 1) {
    d.setDate(d.getDate() - 1);
  }

  // Get all the other Mondays in the month and year
  while (d.getMonth()) {
    let pushDate = new Date(d.getTime());
    const dateObj = {
      date: pushDate.getDate(),
      month: pushDate.toLocaleString("default", {
        month: "short",
      }),
      year: pushDate.getFullYear(),
    };
    mondays.push(dateObj);

    d.setDate(d.getDate() + 7);
  }
  return mondays;
}

export const allMondaysOfAYear = getAllMondaysOfAYear();

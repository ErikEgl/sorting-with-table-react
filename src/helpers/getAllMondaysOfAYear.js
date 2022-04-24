export default function getAllMondaysOfAYear() {
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

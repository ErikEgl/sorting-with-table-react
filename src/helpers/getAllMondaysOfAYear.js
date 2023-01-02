export default function getAllMondaysOfAYear() {
  let d = new Date();
  let mondays = [];
  // Get nearest Monday
  d.setDate(d.getDate() - (d.getDay() - 1));

  // Get all the other Mondays in the month and year
  const numWeeks = 52; // or 53 if it's a leap year
  for (let i = 0; i < numWeeks; i++) {
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

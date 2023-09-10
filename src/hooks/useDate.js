const useDate = (yourDate) => {
  // const myDate = yourDate.includes("/");
  // if (myDate) {
  // }
  const inputDate = yourDate;
  const [month, year] = inputDate.split("/");
  const date = new Date(year, month - 1, 1); // Subtract 1 from the month to adjust for zero-based indexing
  const options = { year: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString(undefined, options);

  // console.log(formattedDate);

  return formattedDate;
};

export default useDate;

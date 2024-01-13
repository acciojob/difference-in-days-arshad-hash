var dateDiffInDays = function (date1, date2) {
	let one =new Date (date1);
	let two= new Date (date2);  

return Math.floor(((two-one)/1000)/86400) ;
	
	
  //   write your code here
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

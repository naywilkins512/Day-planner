
function getHeaderDate() {
let currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate)
}

getHeaderDate();

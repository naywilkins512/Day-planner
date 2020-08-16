
function getHeaderDate() {
let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDate)
}

getHeaderDate();




function getHeaderDate() {
    let currentDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDate)
}

getHeaderDate();



let retrieveData = JSON.parse(localStorage.getItem("taskArr"))


let taskArr = []


// $("#form-control").each(function() {

$(".save-button").on("click", function(event) {
    event.preventDefault();

let hour = $(this).data("hour");
let task = $("#" + hour + "text").val();
taskArr.push(hour, task);
localStorage.setItem("taskArr", JSON.stringify(taskArr));


$(".btn-warning").click(function () {
    $("#9text").text("")

})

console.log(taskArr);
});
  
// });






//In terms of your question regarding the tasks, that’s really your call how you want to approach it. Remember you can use classes to target multiple elements, so one approach would be to ensure your textarea’s share a common class and some unique identifier and from there you can use jQuery target the class and loop over each element and write your logic to deal with the task


// In a nutshell, yes. The class would be for the selector that you’ll use to loop over the elements and the id would be used the identify the timeslot

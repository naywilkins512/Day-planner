
function getHeaderDate() {
    let currentDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDate)
}

getHeaderDate();





function getOldTasks() {
    JSON.parse(localStorage.getItem("taskArr"))
    taskArr.forEach
    //loop through the local storage array
    //append each task to its associated input field

}



let taskArr = []











// $("#form-control").each(function() {

$(".save-button").on("click", function (event) {
    event.preventDefault();

    let hour = $(this).data("hour");
    let task = $("#" + hour + "text").val();
    taskArr.push({ hour, task });
    localStorage.setItem("taskArr", JSON.stringify(taskArr));
    let retrieveData = JSON.parse(localStorage.getItem("taskArr"))
    console.log(retrieveData)


    // console.log(taskArr);
});

// });


$(".btn-warning").click(function () {
    $("#9text").text("")

})



//In terms of your question regarding the tasks, that’s really your call how you want to approach it. Remember you can use classes to target multiple elements, so one approach would be to ensure your textarea’s share a common class and some unique identifier and from there you can use jQuery target the class and loop over each element and write your logic to deal with the task


// In a nutshell, yes. The class would be for the selector that you’ll use to loop over the elements and the id would be used the identify the timeslot


//highlight text

$('textarea').focus(function () {
    $(this).css('background', 'white')
})

$('textarea').blur(function () {
    $(this).css('background', 'whitesmoke')
})



// So that would look something like this w/ JQuery:
// $("#myInput").html("walk the dog");
// or this with vanilla js
// document.getElementById("myInput").innerHTML = "walk the dog";
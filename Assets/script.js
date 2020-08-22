
let taskArr = JSON.parse(localStorage.getItem("taskArr")) || []


function getTimeClass() {


    $('.btn-success').each(function () {

        let timeslot = $(this).data("hour");
        let newinteger = parseInt(timeslot);
        let currentHour = parseInt(moment().format("HH"))
        const $form = $(this).parents("form");


        if (newinteger < currentHour) {
            $form.attr("class", "past");
        } else if (newinteger === currentHour) {
            $form.attr("class", "present");
        } else if (newinteger > currentHour) {
            $form.attr("class", "future");
        }

    })
}


// gets and displays Date

function getHeaderDate() {
    let currentDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDate)
}

// gets and displays stored tasks

function getTasks() {
    $.each(taskArr, function (index, taskObject) {
        $("#" + taskObject.hour + "text").val(taskObject.task)


    })
}

//calls the functions 

getTimeClass();
getHeaderDate();
getTasks()

// saves the tasks to local storage


$(".save-button").on("click", function (event) {
    event.preventDefault();

    let hour = $(this).data("hour")
    let task = $("#" + hour + "text").val();
    
    taskArr.push({ hour, task });
    localStorage.setItem("taskArr", JSON.stringify(taskArr));

});

//highlight text function

$('textarea').focus(function () {
    $(this).css('background', 'lightblue')
})

$('textarea').blur(function () {
    $(this).css('background', 'whitesmoke')
})


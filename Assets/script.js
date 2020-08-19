
let taskArr = JSON.parse(localStorage.getItem("taskArr")) || []


function getTimeClass() {




    $('button').each(function () {

        let timeslot = $(this).data("hour");
        let newinteger = parseInt(timeslot);
        // let newinteger = 

        if (parseInt(newinteger) < moment().format("HH")) {
            $('form').attr('class', 'past')

        } else if (parseInt(newinteger) === moment().format("HH")) {
            $('form').attr('class', 'present')

        } else if (parseInt(newinteger) > moment().format("HH")) {
            $('form').attr('class', 'future')

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

    let hour = $(this).data("hour");
    let task = $("#" + hour + "text").val();
    taskArr.push({ hour, task });
    localStorage.setItem("taskArr", JSON.stringify(taskArr));

});

//clears the task from the page


$(".btn-warning").click(function (event) {
    event.preventDefault();
    let hour = $(this).siblings(".save-button").data("hour");
    let task = $("#" + hour + "text").val("");
    taskArr.push([{ hour, task }]);
    localStorage.setItem("taskArr", JSON.stringify(taskArr));

});

//highlight text function

$('textarea').focus(function () {
    $(this).css('background', 'white')
})

$('textarea').blur(function () {
    $(this).css('background', 'whitesmoke')
})


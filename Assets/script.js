
function getHeaderDate() {
    let currentDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDate)
}

getHeaderDate();



$("#9amform").submit(function (e) {
    e.preventDefault();
    $("#9amtext").val
    alert("save is working")
});

$(".btn-warning").click(function () {
    alert("clear is working")
});
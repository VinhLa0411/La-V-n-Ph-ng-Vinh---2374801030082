$(document).ready(function () {
    $('#checkIn').datepicker({
        numberOfMonths: [1, 2],
        changeMonth: true,
        changeYear: true
    }).datepicker('setDate', '+0d');

    $('#checkOut').datepicker({
        numberOfMonths: [1, 2],
        changeMonth: true,
        changeYear: true
    });
});




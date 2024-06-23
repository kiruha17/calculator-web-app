$(".select-date").on('change', '#date', function() {
    let date = $(this).val();
    let currentDate = new Date();
    let selectedDate = new Date(date);
    
    let differenceInTime = selectedDate - currentDate;
    let isTooClose = false;
    let inPast = false;
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    if (differenceInDays < 1 && differenceInDays > -1) {isTooClose = true;}
    if (differenceInDays < -1) {inPast = true;}

    let message = "";
    if (isTooClose) {
        message = "The dates are too close and rounding errors are likely, please choose a further date.";
    } else if (inPast) {
        message = `The date you've entered is ${differenceInDays * -1} days ago.`;
    } else {
        message = `The date you've entered is ${differenceInDays} days from now.`
    }

    $('.output').text(message);
});

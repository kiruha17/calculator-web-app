function calculateTimes(startDate, endDate, interestDuration) {
    if (interestDuration === "annual") {
        let times = 0;
        let current = new Date(startDate);
        
        while (current <= endDate) {
            if (current.getMonth() === startDate.getMonth() && current.getDate() === startDate.getDate() && current.getYear() != startDate.getYear()) {
                times++;
            }
            current.setFullYear(current.getFullYear() + 1);
        }

        return times;
    }
    if (interestDuration === "monthly") {
        let duration = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

        let times = 0;
        let current = new Date(startDate);
        while (current < endDate) {
            current.setMonth(current.getMonth() + 1);
            if (current <= endDate) {
                times++;
            }
        }
        return times;
    }
}   

function calculateInterest(interestType, interest, amount, times) {
    amount = parseFloat(amount);
    interest = parseFloat(interest);

    if (interestType === "simple") {
        let addition = amount * (interest / 100);
        let finalAmount = (addition * times) + amount;
        return `The final amount is: ${finalAmount.toFixed(2)}`;
    }
    if (interestType === "compound") {
        let finalAmount = amount * Math.pow(1 + (interest / 100), times);
        return `The final amount is: ${finalAmount.toFixed(2)}`;
    }
    console.log("Something went wrong in calculateInterest");
    return "Something went wrong, ensure you have filled all the fields with valid information."
}

$("#calculate-button").on("click", function() {
    let interestType = $("#interest-select").val();
    let interestDuration = $("#interest-duration").val();
    let interest = $("#interest").val();
    let amount = $("#amount").val();
    let eDate = $("#end-date").val();
    let sDate = $("#start-date").val();
    let endDate = new Date(eDate);
    let startDate = new Date(sDate);

    let times = calculateTimes(startDate, endDate, interestDuration);

    $(".output").text(calculateInterest(interestType, interest, amount, times));
});
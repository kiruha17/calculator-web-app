$("#calculate-button").on("click", function() {
    let interestType = $("#interest-select").val();
    let interestDuration = $("#interest-duration").val();
    let interest = $("#interest").val();
    let amount = $("#amount").val();
    let date = $("#date").val();
    let endDate = new Date(date);

    console.log("Interest Type: " + interestType);
    console.log("Interest: " + interest);
    console.log("Starting Amount: " + amount);
    console.log("End Date: " + endDate);

    let result = calculateInterest(interestType, interest, amount, endDate);
    $(".output").text("Calculated Result: " + result);
});

function calculateInterest(interestType, interest, amount, endDate) {
    let currentDate = new Date();
}
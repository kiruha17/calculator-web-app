$('#interest-select').on('change', function() {
    let interestType = $(this).val();
    console.log("Interest Type: " + interestType);
});

$('#interest').on('input', function() {
    let interest = $(this).val();
    console.log("Interest: " + interest);
});

$('#amount').on('input', function() {
    let amount = $(this).val();
    console.log("Starting Amount: " + amount);
});

$('#date').on('change', function() {
    let endDate = $(this).val();
    console.log("End Date: " + endDate);
});
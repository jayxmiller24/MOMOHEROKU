
$("#tables").on("click", function () {
    $.get("/api/tables/", function (data) {
        console.log(data);
        let tablelist = data;
        let customerName = data.customerName;
        let customerEmail = data.customerEmail;
        let customerID = data.customerID;
        console.log(tablelist);

    });
    $.get("/api/waitlist/", function (data) {
        console.log(data);
        let waitlist = data;
        let customerName = data.customerName;
        let customerEmail = data.customerEmail;
        let customerID = data.customerID;
        console.log(waitlist);
    });
});

$("#submit").on("click", function () {
    event.preventDefault();
    let newTable = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        id: $("#id").val().trim()
    };
    $.post("/api/tables/", newTable)
        .then(function (data) {
            console.log("Adding html");
            $("#reservation-form")[0].reset();
        });
});

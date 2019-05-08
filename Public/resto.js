$("#tables").on("click", function () {
    $.get("/api/tables/", function (data) {
        console.log(data);
        
    });
    $.get("/api/waitlist/", function (data) {
        console.log(data);
    });
});

$("#submit").on("click", function () {
    $.get("/api/tables/", function(data) {

    });
});

$("#home").on("click", function () {

});
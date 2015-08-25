$(function() {
    var first = "";
    var second = "";
    var result;
    var how;
    var text;

    $("span").not("#calc").not("#cancel").click(function() {
        text = $("#screen").text() + $(this).text();
        if (first !== "") {
            second += $(this).text();
            second = parseInt(second);
        }
        $("#screen").text(text);
    });

    $(".operator").not('#calc').not("#cancel").click(function() {
        first = parseInt(text);
        how = $(this).text();
    });

    $("#calc").not("#cancel").click(function() {
        if (how == "\xF7") {
            result = first / second;
        } else if (how == "x") {
            result = first * second;
        } else if (how == "+") {
            result = first + second;
        } else if (how == "-") {
            result = first - second;
        }

        $("#screen").text(result);
    });


    $('#cancel').click(function() {
        first = "";
        second = "";
        how = "";
        $("#screen").text("");

    });

});

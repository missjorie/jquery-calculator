$(function() {
    var first = "";
    var second = "";
    var result;
    var resultStr;
    var change = "";
    var text;
    var opCount = 0;



    function calculate() {
        console.log( first + ', ' + second);
        if (change == "\xF7") {
            result = first / second;
        } else if (change == "x") {
            result = first * second;
        } else if (change == "+") {
            result = first + second;
        } else if (change == "-") {
            result = first - second;
        }

        resultStr = result.toString();
        resultStr = resultStr.substr(0, 15);

        $("#screen").text(resultStr);

    }


    function clear() {
        first = "";
        second = "";
        change = "";
        $("#screen").text("");
        opCount = 0;
    }

    $("span").not("#calc").not("#cancel").not(".operator").click(function() {


        if ($("#screen").text() === resultStr) {
            clear();
        }
        
        text = $("#screen").text() + $(this).text();


        if (opCount !== 0 || first !== "") {
            second += $(this).text();
            second = parseInt(second);
        }
        // else {
        //     first = text;
        //     opCount = 0;
        // }

        $("#screen").text(text);

    });


    $(".operator").not('#calc').not("#cancel").click(function() {

        // if (opCount === 0 || $(this).not('.operator')) {
        if (opCount === 0) {
            first = parseInt(text);
            change = $(this).text();
            text = $("#screen").text() + change;
            $("#screen").text(text);
            opCount++;
        } else {
            calculate();
            second = "";
            first = result;
            change = $(this).text();
            text = $("#screen").text() + change;
            $("#screen").text(text);
            // opCount = 0;
        }
        console.log(change + ", " + first + ", " + second + ", " + opCount);
        // }
    });


    $('#cancel').click(function() {
        clear();
    });

    $("#calc").not("#cancel").click(function() {
        calculate();
    });

});

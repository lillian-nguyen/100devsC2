/* function expression example */

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled."); }
)

/* callback function examples (showOK and showCancel) */

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled")
}

//showOk and showCancel passed in as arguments
ask("Do you agree to the terms?", showOk, showCancel)
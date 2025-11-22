
var form = document.getElementById("feedBack");

form.addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rating = document.getElementById("rating").value;
    var comments = document.getElementById("comments").value;

    // Simple check for missing fields
    if (name === "" || email === "" || rating === "" || comments === "") {
        alert("Please fill out all fields.");
        event.preventDefault();
        return;
    }

    // Simple email validation (just checks for @ and .)
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }
});
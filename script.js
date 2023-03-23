alert("Start!")

const whoIs = prompt("Who is it?");

if (whoIs === null) {
    alert("Entry is canceled.");

} else if (whoIs === "Admin") {

    const password = prompt("Please enter your password");

    if (password === null) {
        alert("Entry is canceled.");
    } else if (password === "Black Overlord") {
        alert("Welcome!");
    } else {
        alert("Password is wrong.");
    }

} else {
    alert("I don't know you.");
};
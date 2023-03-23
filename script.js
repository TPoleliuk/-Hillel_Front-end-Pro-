const task1Part1 = document.getElementById('task1Part1');
const task1Part2 = document.getElementById('task1Part2');
const task2 = document.getElementById('task2');

task1Part1.addEventListener('click', () => {
    const userName = prompt("Please enter your name");
    alert(userName || 'anonym');
});

task1Part2.addEventListener('click', () => {
    const isAdmin = prompt("Please enter your name") === "admin";
    alert (isAdmin && "Hello admin" || 'Welcome');
});

task2.addEventListener('click', () => {
    const login = prompt("Please enter your login");
    const password = prompt("Please enter your password");

    alert (login && password && 'welcome' || 'login or password incorrect');

    login || password || alert('login and password incorrect');
    login === "" && password && alert('login incorrect');
    login && password === "" && alert('password incorrect');
    
    const age = prompt("Please enter your age");
    alert (age && age >= 18 && age <= 28 && "Hello" || 'Goobay');
});

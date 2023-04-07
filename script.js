
//функція_1_визначення кількості повних років користувача
function userFullYears() {
    const nameCurrentUser = prompt("Enter your name");
    const birthDateCurrentUser = new Date(prompt("Enter your birthday in format yyyy.mm.dd"));
    const today = new Date();

    let ageCurrentUser = today.getFullYear() - birthDateCurrentUser.getFullYear();
    const months = today.getMonth() - birthDateCurrentUser.getMonth();
    const days = today.getDate() - birthDateCurrentUser.getDate();
   
    if (months < 0 || (months === 0 && days < 0)) {
        ageCurrentUser--;
    };
    
    const result = nameCurrentUser + ', ' + ageCurrentUser + ' years old'
    console.log('Result of userFullYears: ' + result);
};

//функція_2_виконання великого циклу
function hugeLoopExecuting() {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
      sum += i;
    };
    console.log('Result of hugeLoopExecuting: ' + sum);
};

//--------------------------------------------------------

function metricsDecorator(timeCheckedFunction) {
    return function () {
        const startTiming = performance.now();
        timeCheckedFunction();
        const endTiming = performance.now();
        return endTiming - startTiming;
    };
};

//--------------------------------------------------------

let analysePerfomace = metricsDecorator(userFullYears);
let time = analysePerfomace();
console.log('It took: ' + time + ' milliseconds.');

console.log('----------------------------------------');

analysePerfomace = metricsDecorator(hugeLoopExecuting);
time = analysePerfomace();
console.log('It took: ' + time + ' milliseconds.');

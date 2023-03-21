const firstUser = prompt("Зазначте cвій вік") + ' ' + prompt("Зазначте своє ім'я та прізвище");
const secondUser = prompt("Зазначте cвій вік") + ' ' + prompt("Зазначте своє ім'я та прізвище");
const thirdUser = prompt("Зазначте cвій вік") + ' ' + prompt("Зазначте своє ім'я та прізвище");

console.log('**************' + '\n' + '\n' +
'Список студентів, що зареєструвалися на вебінар:' + '\n' + '\n' +
'1.' + ' ' + firstUser + '\n' + '\n' +
'2.' + ' ' + secondUser + '\n' + '\n' +
'3.' + ' ' + thirdUser + '\n' + '\n' +
'--------------' + '\n' + '\n' +
'Середній вік студента:' + ' ' + Math.round((parseInt(firstUser) + parseInt(secondUser) + parseInt(thirdUser))/3) + '\n' + '\n' +
'--------------' + '\n' + '\n' +
'**************');
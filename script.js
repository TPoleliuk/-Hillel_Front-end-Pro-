let force = document.getElementById('force');
let mass = document.getElementById('mass');
let doubleLineBreak = '<br><br>';
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {

    let acceleration = force.value / mass.value;

    document.write('**************' + doubleLineBreak +
    'Ускорение тела при силе F = ' + force.value + ' и массе m = ' + mass.value + ':' + doubleLineBreak +
    '--------------------' + doubleLineBreak +
    'a = ' + acceleration +'.' + doubleLineBreak +
    '-------------------' + doubleLineBreak +
    'end.'
    );

});

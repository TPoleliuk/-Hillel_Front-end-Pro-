const force = document.getElementById('force');
const mass = document.getElementById('mass');
const doubleLineBreak = '<br><br>';
const calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {

    const acceleration = force.value / mass.value;

    document.write('**************' + doubleLineBreak +
    'Ускорение тела при силе F = ' + force.value + ' и массе m = ' + mass.value + ':' + doubleLineBreak +
    '--------------------' + doubleLineBreak +
    'a = ' + acceleration +'.' + doubleLineBreak +
    '-------------------' + doubleLineBreak +
    'end.'
    );

});

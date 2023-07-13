const outputs = {
    resolve: [1, 3, 5, 7],
    reject: [2, 4, 6, 8]
};

const getOutput = () => {
    let ouput = 0;

    return function(option) {
        return function(isNextResolve) {
            console.log(outputs[option][ouput++]);
            if(!isNextResolve) {
                throw new Error('Error');
            };
        };
    };
};

const firstPromiseOutput = getOutput();
const firstPromiseResolve = firstPromiseOutput('resolve');
const firstPromiseReject = firstPromiseOutput('reject');

const firstPromise = new Promise(function (resolve, reject) {
    console.log(0);
    resolve();
});

firstPromise
    .then(
        () => firstPromiseResolve(true),
        () => {}
    )
    .then(
        () => firstPromiseResolve(false),
        () => {}
    )
    .then(
        () => {},
        () => firstPromiseReject(false),
    )
    .then(
        () => {},
        () => firstPromiseReject(true),
    );

const secondPromiseOutput = getOutput();
const secondPromiseResolve = secondPromiseOutput('resolve');
const secondPromiseReject = secondPromiseOutput('reject');

setTimeout(() => {
    console.log('----------------')
})
    
const secondPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(0)
        reject()
    });
});

secondPromise
    .then(
        () => {},
        () => secondPromiseReject(true)
    )
    .then(
        () => secondPromiseResolve(false),
        () => {}
    )
    .then(
        () => {},
        () => secondPromiseReject(true)
    )
    .then(
        () => secondPromiseResolve(true),
        () => {}
    );





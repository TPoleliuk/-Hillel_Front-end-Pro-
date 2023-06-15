window.onload = function() {
    const body = document.querySelector('.body');
    const randomNumber = (min, max) => Math.round(Math.random() * (max - min + 1) + min - 0.5);

    const image = document.createElement('img');
    changeImg(image, 1);
    body.prepend(image);

    setInterval(() => {
        const numberImage = randomNumber(1, 9);
        changeImg(image, numberImage); 
    }, 1000);
};

function changeImg (img, number) {
    img.src = `./images/${number}.jpg`;
    img.alt = `${number}`; 
};
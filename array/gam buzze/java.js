window.onload = () => {
    changePic('image1');
    changePic('image2');
    changePic('image3');
    changePic('image4');
    changePic('image5');
}

var getRandomNumber = () => {
    return Math.floor((Math.random() * 3) + 1);
}

var dontRepeat;

function changePic(image) {
    var picSelect = document.getElementById(image).childNodes[1];
    var temp;

    do {
        temp = getRandomNumber();
    } while ((dontRepeat == temp) || (temp == parseInt(picSelect.alt.substring(4,3))) )

    dontRepeat = temp;

    var x = image.substring(image.length,image.length-1);

    picSelect.src = `./images/image${temp}/img_00${x}.jpg`;
    picSelect.alt = `image${temp}`;

    var image1 = document.getElementById('image1').childNodes[1].alt;
    var image2 = document.getElementById('image2').childNodes[1].alt;
    var image3 = document.getElementById('image3').childNodes[1].alt;
    var image4 = document.getElementById('image4').childNodes[1].alt;
    var image5 = document.getElementById('image5').childNodes[1].alt;

    if (image1==image2 && image1==image3 && image1==image4 && image1==image5)
        for (var i = 0; i<5; i++)
            document.querySelectorAll("img")[i].classList.add('correct');
    else
        for (var i = 0; i<5; i++)
            document.querySelectorAll("img")[i].classList.remove('correct');
}
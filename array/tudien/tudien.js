function check(a, b) {
    console.log("a");
    switch(b) {
        case 'english':
            for (let i = 0; i < eng.length; i++) {
                if (a == eng[i]) return vn[i];
            }
            break;
        case 'vietnamese':
            for (let i = 0; i < vn.length; i++) {
                if (a == vn[i]) return eng[i];
            }
            break;
    }
    return 'no word in dictionary';
}

const vn = ["xin chao", "tam biet", 'su kien', "hien thi", "chuc ngu ngon", "tinh yeu", "tien", "don gian", "tu dien"];
const eng = ["hello", "bye", 'even' , "display", "goodnight", "love", "money", "simple","dictionary"];

const input = document.getElementById('word');
const select = document.getElementById('select');
const display = document.getElementById('display');

input.addEventListener('input', () => {
    let result = check(input.value, select.value);
    display.innerText = result;
});

select.addEventListener('change', () => {
    let result = checkWord(input.value, select.value);
    display.innerText = result;
});
const ARRAY_MAP = [];
const VALUE_POS = [];
let map = document.getElementById('map');

function CreateMap() {
    for (let i = 0; i < 20; i++) {
        ARRAY_MAP[i] = [];
        VALUE_POS[i] = [];
        let str = "";
        for (let j = 0; j < 20; j++) {
            str += "<div class='box' id='" + i + "-" + j +
                "' onclick='choose(" + i + "," + j + ");'> </div>";
            ARRAY_MAP[i][j] = i + "-" + j;
            VALUE_POS[i][j] = "";
        }
        str += "</br><div class='clear'></div>";
        map.innerHTML += str;
    }
}

/*
let Player = function (value, color) {
    this.value = value;
    this.color = color
    this.move = function () {
        return "<b style='color:" + this.color + ";'>" + value + "</b>";
    }
}
let first_player = new Player("X", "blue");
let second_player = new Player("O", "red");

let turn = 1;

function choose(x, y) {
    let element = document.getElementById(ARRAY_MAP[x][y]);
    if (element.innerHTML == " ") {
        if (turn == 1) {
            element.innerHTML = first_player.move();
            VALUE_POS[x][y] = first_player.value;
            turn += 1;
        } else if (turn == 2) {
            element.innerHTML = second_player.move();
            VALUE_POS[x][y] = second_player.value;
            turn -= 1;
        }
        check(x, y);
    }


}

function check(x, y) {
    checkX(x, y);
    checkY(x, y);
    checkXYUp(x, y);
    checkXYDown(x, y);
}

function checkX(x, y) {
    let count = 0;
    let i = x - 4, j = x + 4;
    while (i <= j) {
        if (document.getElementById(ARRAY_MAP[i][y]).innerText == VALUE_POS[x][y]) {
            count++;
        }
        i++;
    }
    endGame(count, VALUE_POS[x][y]);
}

function checkY(x, y) {
    let count = 0;
    let i = x - 4, j = x + 4;
    while (i <= j) {
        if (document.getElementById(ARRAY_MAP[x][i]).innerText == VALUE_POS[x][y]) {
            count++;
        }
        i++;
    }
    endGame(count, VALUE_POS[x][y]);
}

function checkXYUp(x, y) {
    let count = 0;
    let i = x - 4, ik = x + 4;
    let j = y - 4, jk = y + 4;
    while (i <= ik) {
        if (document.getElementById(ARRAY_MAP[i][j]).innerText == VALUE_POS[x][y]) {
            count++;
        }
        i++;
        j++;
    }
    endGame(count, VALUE_POS[x][y]);
}

function checkXYDown(x, y) {
    let count = 0;
    let i = x - 4, ik = x + 4;
    let j = y + 4, jk = y - 4;
    while (i <= ik) {
        if (document.getElementById(ARRAY_MAP[i][j]).innerText == VALUE_POS[x][y]) {
            count++;
        }
        i++;
        j--;
    }
    endGame(count, VALUE_POS[x][y]);
}

function endGame(count, value) {
    if (count >= 5) {
        alert(value + " !, you won");
        window.location.reload();
    }
}//
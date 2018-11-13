function usdConverter(valNum){
    var vaNum = parseFloat(valNum);
    document.getElementById("outinputvnd").innerHTML=valNum*23000 + " vnd";
}
function vndConverter(valNum){
    var vaNum = parseFloat(valNum);
    document.getElementById("outinputusd").innerHTML=valNum/23000 + " usd";
}
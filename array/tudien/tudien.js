var vn = ["xin chao", "tam biet"];
var en = ["hello", "bye"];
var text = "";


function tracuu()
{
    for (var i = 0; i < vn.length; i++)
    {
        if (document.getElementById("input").value == vn[i])
        {
            text = en[i];
            document.getElementById("display").innerHTML = text;
            break;
        }
        else
        {
            document.getElementById("display").innerHTML = "khong co tu nay trong tu dien";
        }
    }
}

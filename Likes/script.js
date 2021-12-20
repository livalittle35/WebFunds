var count1 = 9
var count2 = 12
var count3 = 9

function addNum(_id) {
    var idElement = document.querySelector(_id)
    if(_id =="#count1"){
        count1++
        idElement.innerText =  count1 + " like(s)";
    }
    else if(_id =="#count2"){
        count2++
        idElement.innerText =  count2 + " like(s)";
    }
    else if(_id =="#count3"){
        count3++
        idElement.innerText =  count3 + " like(s)";
    }

}

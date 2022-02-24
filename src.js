var value = "X"

function playGame(id){
    let _teste = document.getElementById(id).innerHTML
    if(_teste == ''){
        document.getElementById(id).innerHTML = value

        test_result()

    }
}

function setState() {
    value = "X"
    array = document.querySelectorAll(".file")
    document.getElementById("res").innerHTML = `It's ${value} time to play`
    for(var i = 0; i < 9; i++){
        array[i].innerHTML = ''
    }
    
} 

function testDraw(array){
    var test = true

    for(var i = 0; i < 9; i++){
        if(array[i].innerHTML == ''){
            test = false
            break
        }
    }
    return test
}

function test_result(){
    var array = document.querySelectorAll(".file")

    if (array[0].innerHTML == array[1].innerHTML && array[1].innerHTML == array[2].innerHTML && array[0].innerHTML != ''){
        document.getElementById("res").innerHTML = `${value} Venceu`
        replayGame() 
    }
    else if (array[3].innerHTML == array[4].innerHTML && array[4].innerHTML == array[5].innerHTML && array[3].innerHTML != ''){
        document.getElementById("res").innerHTML = `${value} Venceu`
        replayGame()
    }
    else if (array[6].innerHTML == array[7].innerHTML && array[7].innerHTML == array[8].innerHTML && array[6].innerHTML != ''){
        document.getElementById("res").innerHTML = `${value} Venceu`
        replayGame()
    }
    else if (array[0].innerHTML == array[4].innerHTML && array[4].innerHTML == array[8].innerHTML && array[0].innerHTML != ''){
        document.getElementById("res").innerHTML = `${value} Venceu`
        replayGame()
    }
    else if (array[2].innerHTML == array[4].innerHTML && array[4].innerHTML == array[6].innerHTML && array[2].innerHTML != ''){
        document.getElementById("res").innerHTML = `${value} Venceu`
        replayGame()
    }
    else if (array[0].innerHTML == array[3].innerHTML && array[3].innerHTML == array[6].innerHTML && array[0].innerHTML != ''){
        document.getElementById("res").innerHTML = `${value} Venceu`
        replayGame()
    }
    else if (array[1].innerHTML == array[4].innerHTML && array[4].innerHTML == array[7].innerHTML && array[1].innerHTML != ''){
        document.getElementById("res").innerHTML = `${value} Venceu`
        replayGame()
    }
    else if (array[2].innerHTML == array[5].innerHTML && array[5].innerHTML == array[8].innerHTML && array[2].innerHTML != ''){
        document.getElementById("res").innerHTML = `${value} Venceu`
        replayGame()
    }
    else if(testDraw(array)){
        document.getElementById("res").innerHTML = "Empate"
        replayGame()
    }
    else{
        if(value == "X") {
            value = "O"
        }
        else {
            value = "X"
        }
        document.getElementById("res").innerHTML = `It's ${value} time to play`
    }
}

function replayGame(){
    document.getElementById("res").innerHTML += "<br><br> <button onclick='setState()'>Play Again</button>"
    for(var i = 0; i < 9; i++){
        if(array[i].innerHTML == ''){
            array[i].innerHTML = ' '
        }
    }
}
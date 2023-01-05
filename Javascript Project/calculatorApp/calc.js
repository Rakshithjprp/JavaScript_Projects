display()
function display(val){

    document.getElementById('result').value += val

    return val

}

solve()
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

clearScreen()
// This function is called when the user clicks on the C or the clear button. 

function clearScreen(){

    document.getElementById('result').value = '0'

}
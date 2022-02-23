function showMessage(){
    let a = document.getElementById('dauvao').value;
    a= parseInt(a)
    let x = a/23000
    document.getElementById('result').innerHTML= 'result: ' + x +'$'
}

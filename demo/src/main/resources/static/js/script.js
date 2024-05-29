// var n = window.prompt("name?","Manjosh")
// console.log("hello " + n)

// for(var i = 0 ; i<10; i++)
//     {
//         console.log(i)
//     }

// objects
var person = {
    name: 'Manjosh',
    age: 21,
    email: 'mba152@sfu.ca',
    address:{
        number: '123',
        street: 'abc',
    }
}

// functions
// var a = 9
// function myfunc(){
//     console.log('hello world')
//     console.log(a)  
// }

// another way of creating functions
// var myfunc2 = function(){
//     console.log('hello world 2')
// }

// myfunc2()

// callbacks
function asc(a, b){
    return a-b
}


// this is for setting window intervals 
// var i = 0
// window.setInterval(function(){
//     console.log(i)
//     i++
// },1000)

window.addEventListener('keypress',processKey)

function processKey(evt){
    console.log(evt.key)
}

var button = document.querySelector('input[value="SEND"]')
button.addEventListener('click',function(evt){
    evt.preventDefault()
    var text = document.getElementById('uname').value
    document.getElementsByTagName('legend')[0].innerHTML = text
})
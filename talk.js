
var btn=document.querySelector("#button")
var textInput=document.querySelector("#text")
var output=document.querySelector(".output")

//console.log(text)
//output.innerHTML="hi i am vinit"

var url="https://api.funtranslations.com/translate/numbers.json"
//var url="https://api.funtranslations.com/translate/minion.json"

function surl(text){
    return url + '?' +"text="+text
}

function errorhandler(error){
    console.log("error occurs",error);
    alert("There is Error Plz try again after some time")
}

btn.addEventListener("click", function () {
    var inputText=textInput.value
 fetch(surl(inputText))
 .then(response=>response.json())
 .then(json=>{
    output.innerHTML=json.contents.translated})
.catch(errorhandler)
// console.log("press the button")
// console.log("input",textInput.value)  
 //output.innerHTML="output is here " + textInput.value          
})
var select = document.getElementById("select");
var text = document.getElementById("text");
var result = document.getElementById("result");


text.addEventListener("input",()=>{
    make_decode();
})

select.addEventListener("change",()=>{
    make_decode();
})

function make_decode(){
    if(select.value == "encode"){
        result.value= atob(text.value);
    } else{
        result.value= btoa(text.value);
    }
}
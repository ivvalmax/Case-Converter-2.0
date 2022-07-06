/*
document.getElementById("textarea").addEventListener("")*/
let textArea = document.querySelector("textarea");
let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let saveText = document.getElementById("save-text-file");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function propcs() {
    let txt = textArea.value.split(" ");
    let newText = "";
    for(let i = 0; i < txt.length; i++){
        newText = newText + txt[i].toUpperCase().slice(0,1) + txt[i].toLowerCase().slice(1) + " ";
    }
    textArea.value = newText.slice(0, -1);
}

function sent_cs() {
    let txt = textArea.value.split(". ");
    let newText = "";
    for(let i = 0; i < txt.length; i++){
        newText = newText + txt[i].toUpperCase().slice(0,1) + txt[i].toLowerCase().slice(1) + ". ";
    }
    textArea.value = newText.slice(0, -2);
}


upperCase.addEventListener("click", function(){
    upperCase.style.backgroundColor = 'cyan'; 
    upperCase.style.color= 'black'; 
    
    textArea.value = textArea.value.toUpperCase();
});
upperCase.addEventListener("mouseenter", function(){
    upperCase.style.boxShadow = "1px 1px 1px #999";
});
upperCase.addEventListener("mouseleave", function(){
    upperCase.style.backgroundColor = 'coral';
    upperCase.style.color= 'black'; 
    upperCase.style.boxShadow = "none";
    /*upperCase.style.*/
});



lowerCase.addEventListener("click", function(TXT){
    lowerCase.style.backgroundColor = 'cyan';  
    lowerCase.style.color= 'black';
    textArea.value = textArea.value.toLowerCase();
});
lowerCase.addEventListener("mouseenter", function(){
    lowerCase.style.boxShadow = "1px 1px 1px #999"; 

});
lowerCase.addEventListener("mouseleave", function(){
    lowerCase.style.backgroundColor = 'coral';
    lowerCase.style.color = 'black'; 
    lowerCase.style.boxShadow = "none";

    /*upperCase.style.*/
});



properCase.addEventListener("click", function(){
    properCase.style.backgroundColor = 'cyan';  
    properCase.style.color= 'black'; 
    propcs();
});
properCase.addEventListener("mouseenter", function(){
    properCase.style.boxShadow = "1px 1px 1px #999";
});
properCase.addEventListener("mouseleave", function(){
    properCase.style.backgroundColor = 'coral';
    properCase.style.color = 'black';
    properCase.style.boxShadow = "none";
    /*upperCase.style.*/
});



sentenceCase.addEventListener("click", function(){
    sentenceCase.style.backgroundColor = 'cyan'; 
    sentenceCase.style.color = 'black'; 
    sent_cs();
});
sentenceCase.addEventListener("mouseenter", function(){
    sentenceCase.style.boxShadow = "1px 1px 1px #999";
});
sentenceCase.addEventListener("mouseleave", function(){
    sentenceCase.style.backgroundColor = 'coral';
    sentenceCase.style.color = 'black'; 
    sentenceCase.style.boxShadow = "none"; 

    
});


saveText.addEventListener("mouseenter", function(){
    saveText.style.boxShadow = "1px 1px 1px #999"; 
});
saveText.addEventListener("mouseleave", function(){
    saveText.style.backgroundColor = 'coral';
    saveText.style.color = 'black';
    saveText.style.boxShadow = "none"; 
    /*upperCase.style.*/
});   
saveText.addEventListener("click", function(){
    let text = textArea.value;
    saveText.style.backgroundColor = 'cyan'; 
    saveText.style.color = 'black'; 
    download("text.txt", text);
});

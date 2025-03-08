function changeDisplayOn(daClassName, newAttribute){
    document.getElementsByClassName(daClassName).item(0).style.display = newAttribute
}

function changeDisplayOff(daClassName){
    document.getElementsByClassName(daClassName).item(0).style.display = "none"
}

function clickedThis(daClassName){
    if (daClassName == "mainpage"){
        changeDisplayOn("mainpage", "grid")
        changeDisplayOff("contactpage")
        changeDisplayOff("questionpage")
    }
    if(daClassName == "contactpage" ){
        changeDisplayOff("mainpage")
        changeDisplayOn("contactpage", "grid")
        changeDisplayOff("questionpage")
    }
    if(daClassName == "questionpage"){
        changeDisplayOff("mainpage")
        changeDisplayOff("contactpage")
        changeDisplayOn("questionpage", "grid")
    }
}


function clickmain(){
    clickedThis("mainpage")
}

function clickcontact(){
    clickedThis("contactpage")
}

function clickquestion(){
    clickedThis("questionpage")
}





/*function changeDisplayOn(daClassName){
    document.getElementsByClassName(daClassName).item(0).style.display = "inline-block"
}

function changeDisplayOff(daClassName){
    document.getElementsByClassName(daClassName).item(0).style.display = "none"
}

function clickedThis(daClassName){
    if (daClassName == "")
}


function clickmain(){
    changeDisplayOn("mainpage")
    changeDisplayOff("contactpage")
    changeDisplayOff("questionpage")
}

function clickcontact(){
    changeDisplayOff("mainpage")
    changeDisplayOn("contactpage")
    changeDisplayOff("questionpage")
}

function clickquestion(){
    changeDisplayOff("mainpage")
    changeDisplayOff("contactpage")
    changeDisplayOn("questionpage")
}*/
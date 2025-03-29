let onOrOff = false //for determining if the theme is already in place or not.
                    //I did this because I didn't just want to copy from link
                    //that y'all gave us to show how to do this. I wanted to
                    //do it in a way that I understand it.

function changeDaTheme(){let newSheet = document.createElement("link")
    if (onOrOff == false){
        let newSheet = document.createElement("link")
        newSheet.rel = "stylesheet"
        newSheet.href = "theme.css"
        newSheet.style.id="secondSheet"
        document.getElementsByTagName("head")[0].appendChild(newSheet)
        onOrOff = true
    } else{
        let myHead = document.getElementsByTagName("head")[0]
        myHead.removeChild(myHead.lastChild)
        onOrOff = false
    }

}


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

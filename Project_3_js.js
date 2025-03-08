/*Here are my reflections comments.
This was a hard project. I learned a lot, especially about how CSS actually works.
I wish I could have started sooner, but I am happy with what I got done.
My biggest regret is that I didn't have more content in my website, but I am satisfied with the CSS,
Javascript, and HTML that I was able to put together. I think it all came together pretty well. I hope 
the time and effort that I put in shows in this
*/



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

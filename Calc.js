function getPrevious(){
    return document.getElementById("previous-value").innerText;
}

function printPrevious(num){
    document.getElementById("previous-value").innerText=num;
}

function getCurrent(){
    return document.getElementById("current-value").innerText;
}

function printCurrent(num){
    if(num===""){
        document.getElementById("current-value").innerText=num;
    }
    else{
        document.getElementById("current-value").innerText=getNumberFormat(num);
    }
}

function getNumberFormat(num){
    if(num==="-"){
        return "";
    }
    let n = Number(num);
    return n.toLocaleString("en");
}

function reverseFormat(num){                //Setting back to normal format of the number
    return Number(num.replace(/,/g,''));
}

let operator = document.getElementsByClassName("operator");
for(let i = 0; i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        if(this.id==="clear"){                          //to clear the screen
            printPrevious("");
            printCurrent("");
        }
        else if(this.id==="backspace"){                             //deleting input by reducing a single number from the end
            let current = reverseFormat(getCurrent()).toString();
            if(current){
                current = current.substr(0,current.length-1);
                printCurrent(current);
            }
        }
        else{
            let current = getCurrent();
            let previous = getPrevious();
            if(current==="" && previous!==""){
                if(isNaN(previous[previous.length-1])){
                    previous= previous.substr(0,previous.length-1);
                }
            }
            if(current!=="" || previous!==""){
                current= current===""?current:reverseFormat(current);
                previous = previous + current;
                if(this.id==="equals"){
                    let result=eval(previous);
                    printCurrent(result);
                    printPrevious("");
                }
                else{
                    previous=previous+this.id;
                    printPrevious(previous);
                    printCurrent("");
                }
            }
        }
    });
}
let number = document.getElementsByClassName("number");
for(let i = 0; i<number.length;i++){
    number[i].addEventListener('click', function(){
        let current = reverseFormat(getCurrent());
        if(!isNaN(current)){
            current = current + this.id;
            printCurrent(current);
        }
    });
}




    
var cp=0;
var ce = 0;
    console.log("Linked perfectly")

isActive = "pencil";
let pencilOptions=  document.querySelector(".pencil-options");
let eraserOptions = document.querySelector(".eraser-options");
function handleClick(tool){
    console.log(tool);
    // console.log(pencilOptions)
    
    if(tool=='pencil'){
        cp+=1;
        ce=0;
        ctx.strokeStyle="white";
        eraserOptions.classList.remove("show");
        if(cp==2){
           pencilOptions.classList.add("show");
           
           console.log("show class added")
        }
       
    }
    else if(tool=='eraser'){
        
        ctx.strokeStyle = "black"
        cp=0;
        ce+=1;

        pencilOptions.classList.remove("show")
        if(ce==2){
            eraserOptions.classList.add("show")
            
        }
        
    }
    else{
        eraserOptions.classList.remove("show");
        pencilOptions.classList.remove("show")
        cp=0;
        ce=0;

        createsticky();
    }

}


let inputArr = document.getElementsByTagName("input");
inputArr[0].addEventListener("change",function(e){
    ctx.lineWidth = inputArr[0].value;
})
inputArr[1].addEventListener("change",function(e){
    ctx.lineWidth = inputArr[1].value;
})

// function handleColor(col){

//     console.log(col);
//     if(col=='red'){
//         console.log("color changed to red");
//         ctx.strokeStyle="red";
//     }
//     else if(col=='green'){
//         ctx.strokeStyle="green";
//     }
//     else if(col=='blue'){
//         ctx.strokeStyle="blue";
//     }
// }
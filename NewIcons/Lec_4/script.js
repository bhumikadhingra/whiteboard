let ismousedown = false
    board.addEventListener("mousedown", function(e){
        var X = e.clientX;
        var Y = e.clientY;
        const {x,y} = getLocation(X,Y)
        ctx.beginPath();
        ctx.moveTo(x,y);
        ismousedown = true;
        // console.log("\n",X,Y);
        
    })
    board.addEventListener("mouseup",function(e){
        ctx.closePath();
        ismousedown=false;
    })
    board.addEventListener("mousemove",function(ex){
// console.log(e);
            if(!ismousedown)
                return;

            const {x,y} = getLocation(ex.clientX, ex.clientY)
            ctx.lineTo(x,y);
            ctx.stroke();
            
    

    })

    // document.getElementsByClassName("red").addEventListener("click", function(){
    //     ctx.strokeStyle="red";
    //   });

    // board.addEventListener("click", function(e){
    //     ctx.strokeStyle="red";
    //   });

    //   const red=document.getElementsByClassName("pencil");
    //   red.addEventListener("click", function(e){
    //     ctx.strokeStyle="red";
    //   });
      


    function getLocation(clientX,clientY){
    const {x,y} = board.getBoundingClientRect();
    return {
        x:clientX-x,
        y:clientY-y
    }

    }
        


function createsticky(){
    const body = document.querySelector("body");
    const stickyPad = document.createElement("div");
    const NavBar = document.createElement("div");
    const writingPad = document.createElement("div");
    const textArea = document.createElement("textArea");

    stickyPad.setAttribute("class","sticky");
    NavBar.setAttribute("class","nav-bar");
    writingPad.setAttribute("class","writing-pad");
    textArea.setAttribute("class","text-area");
    

    body.appendChild(stickyPad);
    stickyPad.appendChild(NavBar);
    stickyPad.appendChild(writingPad);
    writingPad.appendChild(textArea);
}





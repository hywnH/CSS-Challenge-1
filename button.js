const BUTTON = document.querySelector(".js-button");

function reset(){
    BUTTON.classList.remove("clicked");
    BUTTON.classList.remove("unclicked");
}

function handleClick(){
    if(BUTTON.classList.contains("clicked")){
        BUTTON.classList.remove("clicked");
        BUTTON.classList.add("unclicked");
    } else {
        BUTTON.classList.remove("unclicked");
        BUTTON.classList.add("clicked");
    }
}

function init(){
    BUTTON.addEventListener("click", handleClick);
}

init();
let button = document.querySelector("#btn1");
let currmode = "light";
button.innerText = "🌑 Mode";
let body = document.querySelector("body");

button.addEventListener("click", () => {
    if(currmode==="light"){
        button.innerText = "☀️ Mode";
        // document.querySelector("#btn1").style.backgroundColor = "grey";
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        button.classList.add("buttondarkmode");
        button.classList.remove("buttonlightmode");



    }
    else{
        button.innerText = "🌑 Mode";
        // document.querySelector("#btn1").style.backgroundColor = "white";
        currmode = "light"
        body.classList.add("light");
        body.classList.remove("dark");
        button.classList.add("buttonlightmode");
        button.classList.remove("buttondarkmode");

    }
    console.log(currmode);
});
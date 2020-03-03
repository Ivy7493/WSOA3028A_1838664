


let y = document.getElementsByClassName("Y")[0];
y.addEventListener("click",function(){

    location.href = newFunction();
    alert("Ivan!");
});
function newFunction() {
    return "blog.html";
}




let BlogButton = document.createElement("button");
BlogButton.innerHTML = "Blog";

let x = document.getElementsByClassName("Navigation")[0];
x.appendChild(BlogButton);

BlogButton.addEventListener("click", function(){
    
    location.href = "blog.html";
    alert("U R GOING TO BLOG!");
    });
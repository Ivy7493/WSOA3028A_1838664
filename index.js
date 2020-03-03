

//let BlogButton = document.createElement("button");
//BlogButton.innerHTML = "Blog";
//find the button by class name
//let x = document.getElementsByClassName("Navigation")[0];
let y = document.getElementsByClassName("Y")[0];
//this is how you append a button
//x.appendChild(BlogButton);

y.addEventListener("click",function(){

    location.href = "blog.html";
    alert("Ivan!");
});

//BlogButton.addEventListener("click", function(){
    
  //  location.href = "blog.html";
    //alert("U R GOING TO BLOG!");
    //});
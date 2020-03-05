


let Development_Button = document.getElementsByClassName("Development_Button")[0];
let Contact_Button = document.getElementsByClassName("Contact_Button")[0];

Contact_Button.addEventListener("click",function(){

    location.href = "contact.html";
    alert("Contact page");

});

Development_Button.addEventListener("click",function(){

   location.href = "blog.html";
    alert("Blog page");
});


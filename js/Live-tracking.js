let Tracking = document.querySelector("#Live-tracking");
let Com = document.querySelector("#Comment");
let a =  Math.floor((Math.random() * 5) + 1);

if (a == 1){
   // Tracking.innerHTML += "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.404725251236!2d28.042905814866728!3d-26.18350948344703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c3c4ebbc2a7%3A0x19124d946ff424e8!2s8%20Princess%20Pl%2C%20Parktown%2C%20Johannesburg%2C%202193!5e0!3m2!1sen!2sza!4v1585044391867!5m2!1sen!2sza' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
    Tracking.innerHTML += "<img class = 'Map' alt = 'Live location' src = 'Pictures/Location_1.png'>";
    Com.innerHTML += "<p class = 'BoxDescription'>This is the documented home of Carter. When at this location, sureillance on internet usage rather than location is suggested.</p>";
}else if (a == 2){
   // Tracking.innerHTML += "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5448568360334!2d28.039279314866114!3d-26.14637918346368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c8d37b50aaf%3A0x14ea91e5828c79e9!2sRosebank%20Mall!5e0!3m2!1sen!2sza!4v1587718261230!5m2!1sen!2sza' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
    Tracking.innerHTML += "<img class = 'Map' alt = 'Live location' src = 'Pictures/Location_2.png'>"
    Com.innerHTML += "<p class = 'BoxDescription'>Carter normally comes here to have some fun. Nothing suspicious. Light sureillance needed.</p>"
}else if (a == 3){
    //Tracking.innerHTML += "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.1563923641465!2d28.03266631486626!3d-26.159035683458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c6238f5d9d9%3A0xe3ac9ddf628744ea!2sJan%20Smuts%20Ave%2C%20Randburg%2C%202132!5e0!3m2!1sen!2sza!4v1587718447689!5m2!1sen!2sza' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
    Tracking.innerHTML += "<img class = 'Map' alt = 'Live location' src = 'Pictures/Location_3.png'>"
    Com.innerHTML += "<p class = 'BoxDescription'>This is an old age home in Hillbrow. To our knowledge, Carter doesn't have any family that would be in an old age home but recent sureillance has reported that it could be his neighbour which moved into the home. This could explain some of Carter's unhindged behaviour recently. We believe his neighbour played a crucial role in his support structure.</p>"
}else if(a == 4){
   // Tracking.innerHTML += "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7161.297972539872!2d28.00290457457809!3d-26.17555883380224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b8fe464a28b%3A0x20d3bbacba6c24e9!2sMelville%2C%20Johannesburg%2C%202109!5e0!3m2!1sen!2sza!4v1587718603450!5m2!1sen!2sza' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
   Tracking.innerHTML += "<img class = 'Map' alt = 'Live location' src = 'Pictures/Location_4.png'>"
   Com.innerHTML += "<p class = 'BoxDescription'>Carter is known not to like the performing arts, he finds them boring. This location has been flagged as suspicious and sureillance agents need to been on the look out for any behavior or movement out of the norme when Carter is here.</p>";
}else if(a == 5){
    //Tracking.innerHTML += "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128598.27715059581!2d27.993758534355162!3d-26.188490817906132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95092fa45b4141%3A0xb6c992120ae67baf!2sGold%20Reef%20City!5e0!3m2!1sen!2sza!4v1587718793230!5m2!1sen!2sza' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"
    Tracking.innerHTML += "<img class = 'Map' alt = 'Live location' src = 'Pictures/Location_5.png'>";
    Com.innerHTML += "<p class = 'BoxDescription'>This is Carter's typical shopping mall. We believe he visits Killarney because this is where his dad used to shop alot, He often visits the pick n pay here. Nothing to suspicous when at this location but still key an eye out for unusual behavior.</p>";
}



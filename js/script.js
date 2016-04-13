/**var clickOk=0;
var catImage= "#catImage";
$(catImage).click(function(){

clickOk++;
$("#counter").text("The photo has been clicked " + clickOk + " times");
});

var catImage2= "#catImage2";
var clickOk2=0;
$(catImage2).click(function(){

clickOk2++;
$("#counter2").text("The photo has been clicked " + clickOk2 + " times");
});**/

var listCat = document.getElementsByTagName("li");
var imgCat = $("#imgCat img");
var contDisplay= document.getElementsByClassName("gContainer");
var cat= {
  "catty": [{
    "name": "Nano: The puppy",
    "image": "image/cat.jpg",
    "click": 0,

  }, {
    "name": "Lucy: The hidden",
    "image": "image/cat2.jpg",
      "click": 0,
  }, {
    "name": "Duna: The curious",
    "image": "image/cat3.jpg",
  "click": 0,
  }, {
    "name": "Herbie: The Hunter",
    "image": "image/cat4.jpg",
  "click": 0,
  }, {
    "name": "Emy: The Sleeper",
    "image": "image/cat5.jpg",
  "click": 0,
  }, {
    "name": "Cat: The Laziness",
    "image": "image/cat6.jpg",
  "click": 0,
  }]

};


for(i=0; i<cat.catty.length; i++){

  var listItems = listCat[i];

  var currentObj = cat.catty[i];
  var names = currentObj.name;
  var images = currentObj.image;


  $(listItems).click( (function(name, source){

    return function(){
      $("#nameCat").text(name);
      $("#imgCat img").attr("src", source);
    }

  })(names, images));
}

var images = currentObj.image;

for(i=0; i<images.length; i++){
  var clickTot= currentObj.click;

  var diffImage = imgCat[i];

    console.log(imgCat);
  $(diffImage).click( (function(clickOk, imgCats){

    return function(){
      clickTot++;
      $("#counter").text("The photo has been clicked " + clickTot + " times");
  }
})(clickTot, images));



}


/*
var clickOk = 0;
for (i=0; i<listCat.length; i++){
  var cat= listCat[i];

  console.log(cat[0]);
  $(listCat).click(function(){
  clickOk++;
  $(".counter").text("The photo has been clicked " + clickOk + " times");
});
}*/

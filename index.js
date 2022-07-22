// $(function() {
//   $.fx.interval = 0;
//   (function cycleBgImage(elem, bgimg) {
//     // `elem`:`#slideshow`
//     // set, reset, delay to `1000` after background image reset
//     elem.css("backgroundImage", bgimg)
//       // fade in background image
//       .fadeTo(3000, 1, "linear", function() {
//         // fade in background image
//         $(this).delay(3000, "fx").fadeTo(3000, 0, "linear", function() {
//           // split background image string at comma , creating array
//           var img = $(this).css("backgroundImage").split(","),
//             // concat first background image to `img` array,
//             // remove first background image from `img` array
//             bgimg = img.concat(img[0]).splice(1).join(",");
//           // recursively call `cycleBgImage`
//           cycleBgImage(elem, bgimg);
//         });
//       });
//   }($("#slideshow")));
// });
































// var i = 1;
// setInterval(function() { 
//     e = document.getElementById('background-slideshow');
//     switch (i) {
//         case 0:
//             e.style.backgroundPosition = 'center top, center top, center top';
//             break;
//         case 1:
//             e.style.backgroundPosition = window.innerWidth + 'px top, center top, center top';
//             break;
//         case 2:
//             e.style.backgroundPosition = window.innerWidth + 'px top, ' + window.innerWidth + 'px top, center top';
//             break;
//     }
//     i++;    
//     if (i > 2) i = 0;   
// }, 3000);



























// var bgImageArray = ["lonely.jpg", "uluwatu.jpg", "carezza-lake.jpg", "batu-bolong-temple.jpg"],
// base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-",
// secs = 4;
// bgImageArray.forEach(function(img){
//     new Image().src = base + img; 
//     // caches images, avoiding white flash between background replacements
// });

// function backgroundSequence() {
// 	window.clearTimeout();
// 	var k = 0;
// 	for (i = 0; i < bgImageArray.length; i++) {
// 		setTimeout(function(){ 
// 			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
// 			document.documentElement.style.backgroundSize ="cover";
// 		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
// 		}, (secs * 1000) * i)	
// 	}
// }
// backgroundSequence();
































// const carouselText = [
//     {text: "Welcome", color: "red"},
//     {text: "Orange", color: "orange"},
//     {text: "Lemon", color: "yellow"}
//   ]
  
//   document.ready(async function() {
//     carousel(carouselText, "#feature-text")
//   });
  
//   async function typeSentence(sentence, eleRef, delay = 100) {
//     const letters = sentence.split("");
//     let i = 0;
//     while(i < letters.length) {
//       await waitForMs(delay);
//       $(eleRef).append(letters[i]);
//       i++
//     }
//     return;
//   }
  
//   async function deleteSentence(eleRef) {
//     const sentence = $(eleRef).html();
//     const letters = sentence.split("");
//     let i = 0;
//     while(letters.length > 0) {
//       await waitForMs(100);
//       letters.pop();
//       $(eleRef).html(letters.join(""));
//     }
//   }
  
//   async function carousel(carouselList, eleRef) {
//       var i = 0;
//       while(true) {
//         updateFontColor(eleRef, carouselList[i].color)
//         await typeSentence(carouselList[i].text, eleRef);
//         await waitForMs(1500);
//         await deleteSentence(eleRef);
//         await waitForMs(500);
//         i++
//         if(i >= carouselList.length) {i = 0;}
//       }
//   }
  
//   function updateFontColor(eleRef, color) {
//     $(eleRef).css('color', color);
//   }
  
//   function waitForMs(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
//   }
var featureRight = {
  origin: 'left',
  delay    : 0,
  distance : '75px',
  easing   : 'ease-in-out',
  scale    : 0.9
};

var featureLeft = {
  origin: 'right',
  delay    : 0,
  distance : '75px',
  easing   : 'ease-in-out',
  scale    : 0.9
};


window.sr = ScrollReveal();
sr.reveal('.explore', featureRight);
sr.reveal('.tailor', featureLeft);
sr.reveal('.create', { delay: 0, scale: 0.9 });


// var controller = new ScrollMagic({
//     globalSceneOptions: {
//         triggerHook: "onLeave"
//     }
// });

// var pinani = new TimelineMax()
//     // panel wipe uno
//     .add(TweenMax.to("#hero", 1, {transform: "translateY(0)"}))

//     // panel slide translateX
//     .add(TweenMax.to("#slide-dos", 1, {transform: "translateX(0)"}))

//     // panel unpinned
//     .add(TweenMax.from("#unpin", .5, {top: "100%"}));


// // panel section pin
// var scene = new ScrollScene({
//         triggerElement: "header#hero",
//         duration: 1100
//     })
//     .setTween(pinani)
//     .setPin("header#hero")
//     .addTo(controller);

//         scene.addIndicators();
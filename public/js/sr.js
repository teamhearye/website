var featureRight = {
  origin: 'left',
  delay    : 100,
  distance : '100px',
  easing   : 'ease-in-out',
  scale    : 0.9
};

var featureLeft = {
  origin: 'right',
  delay    : 100,
  distance : '100px',
  easing   : 'ease-in-out',
  scale    : 0.9
};


window.sr = ScrollReveal();
sr.reveal('.explore', featureRight);
sr.reveal('.tailor', featureLeft);
sr.reveal('.create', { delay: 200, scale: 0.9 });
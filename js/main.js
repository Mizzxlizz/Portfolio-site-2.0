//SmoothScroll
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//Typed
let options = {
  strings: ['Photographer^750', 'Gamer^750','Web-developer^750', 'Mountainbiker^750', 'Software-developer^750', 'Ik ben Jelle.'],
  typeSpeed: 50,
  smartBackspace: true,
  backSpeed: 40,
  showCursor: false
};

let typed = new Typed('.typed', options);

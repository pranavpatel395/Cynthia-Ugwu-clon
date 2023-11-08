const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function homeAnimation(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity: 0,
        duration:2,
        esae: Expo.eseInOut
    })

    .to(".animationelem",{
        y:'0',
        delay:-1,
        esae: Expo.eseInOut,
        duration:2,
        stagger : .2
    })
    
    .from("#homefooter",{
        y:-10,
        opacity: 0,
        duration:1,
        esae: Expo.eseInOut,
        // delay:-1,
      
    })
}


function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#mousepoint"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }



function mousepoint() {
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#mousepoint").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

mousepoint();
homeAnimation();
circleChaptaKaro();


document.querySelectorAll(".elem").forEach(function(elem){
  var rotate= 0;
  var diffrot = 0;


  elem.addEventListener("mouseleave",function(details){
  
  
   gsap.to(elem.querySelector("img"), {
    opacity: 0,
    ease :Power1,
   
   })
  });


  elem.addEventListener("mousemove",function(details){
    var diff = details.clientY - elem.getBoundingClientRect().top;
    diffrot = details.clientX-rotate;
    rotate = details.clientX ; 
   gsap.to(elem.querySelector("img"), {
    opacity: 1,
    // ease : power1,
    ease :Power1,
    top : details.clientY,
    left : details.clientX,
    top : diff,
    left : details.clientX,
    rotate : gsap.utils.clamp(-20, 20, diffrot * 0.5),
   })
  });
});

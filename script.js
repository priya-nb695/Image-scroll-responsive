
//first page
var tl=gsap.timeline({scrollTrigger:{
  trigger:".text-1",
  start:"top bottom",
  end:"bottom top",
  scrub:true,
  markers:false
}})

tl.from(".text-1",{
    x:'60px',
    y:'20px'

  })
  tl.to(".text-1",{
   
    y:'500px'

  })

var tal=gsap.timeline({scrollTrigger:{
  trigger:".img1-container",
  start:"top bottom",
  end:"bottom top",
  scrub:true,
  markers:false
}})
tal.from(".img1-container",{
  x:'60px',
  y:'20px'

})
tal.to(".img1-container",{
  // x:'-200px',
  y:'-100px'

})
//second page 
var t2=gsap.timeline({scrollTrigger:{
  trigger:".text-2",
  start:"top bottom",
  end:"bottom top",
  scrub:true,
  markers:false
}})

t2.from(".text-2",{
    x:'60px',
    y:'20px'

  })
  t2.to(".text-2",{
    // x:'60px',
    y:'500px'

  })
 

//svg path driver

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {

  var controller = new ScrollMagic.Controller();

  // Get the total number of sections
  var sections = document.querySelectorAll('.page');
  var totalSections = sections.length;

  // Function to update text based on section
  function updateText(section) {
      switch (section) {
          case 'page-1':
              document.getElementById('headerText').textContent = '   ';
              document.getElementById('mainText').textContent = '25M+ Downloads';
              document.getElementById('subText').textContent = 'on appstore & google playstore';
              break;
          case 'page-2':
              document.getElementById('headerText').textContent = 'The Next Big';
              document.getElementById('mainText').textContent = 'Blockchain';
              document.getElementById('subText').textContent = 'Revolution';
              break;
          case 'page-3':
                document.getElementById('headerText').textContent = 'powered by advance';
                document.getElementById('mainText').textContent = 'NASA';
                document.getElementById('subText').textContent = 'algorithms';
                break;
          case 'page-4':
                  document.getElementById('headerText').textContent = 'Redefining';
                  document.getElementById('mainText').textContent = 'UX Strategy';
                  document.getElementById('subText').textContent = 'and UI design';
                  break;
          case 'page-5':
                  document.getElementById('headerText').textContent = 'Text Headline';
                  document.getElementById('mainText').textContent = 'Text Headline';
                  document.getElementById('subText').textContent = 'Footer Headline';
                  break;
          case 'page-6':
                  document.getElementById('headerText').textContent = 'Developing ERP Solution for';
                  document.getElementById('mainText').textContent = 'Text Headline';
                  document.getElementById('subText').textContent = 'in futre industry';
                  break;
          case 'page-7':
                  document.getElementById('headerText').textContent = 'Biggest Classifieds';
                  document.getElementById('mainText').textContent = 'East Asia';
                  document.getElementById('subText').textContent = 'Countries';
                  break;
        
          default:
              break;
      }
  }

  // Create a timeline for the stroke animation
  var timeline = gsap.timeline();

 
  var dashArray = 1000;
  var dashOffsetStep = dashArray / totalSections;

  var sectionColors = [
          'rgb(153, 33, 233)', 'rgb(108, 88, 223)', 'rgb(99, 74, 240)', 'rgb(3, 25, 34)', 'rgb(40, 110, 238)','rgb(43, 92, 250)','rgb(14, 122, 81)'
      ];

 
  // Create a scene for each section
  sections.forEach(function(section, index) {
      var scene = new ScrollMagic.Scene({
          triggerElement: section,
          // duration: "100%",
          // triggerHook: 0
          duration: section.clientHeight,
          triggerHook: 0.5
      })
      .on("enter", function () {
          // Animate the stroke to the next dot
          gsap.to("#Opaque_Ring", {
              strokeDashoffset: dashArray - dashOffsetStep * (index + 1),
              strokeWidth: 10,
              duration: 1,
              // ease: "power1.inOut"
              opacity: 0,
              ease: "rough"
          });

          // Animate the section to become visible
          gsap.to(section, {
              autoAlpha: 1,
              duration: 0.5,
              ease: "power1.inOut"
          });

          // Change the background color of the SVG
          gsap.to("#transring", {
              backgroundColor: sectionColors[index],
              duration: 1,
              ease: "power1.inOut"
          });

          var sectionId = section.getAttribute('id');
          updateText(sectionId); 
      })
      .on("leave", function () {
          // Animate the section to become hidden
          gsap.to(section, {
              autoAlpha: 0,
              duration: 1,
              ease: "power1.inOut"
          });
      })
      .addTo(controller);
  });

  // Smooth scroll functionality
  controller.scrollTo(function (newpos) {
      gsap.to(window, 1, {
          scrollTo: { y: newpos },
          ease: "power2.inOut"
      });
  });

  $(document).on("click", "a[href^='#']", function(e) {
      var id = $(this).attr("href");
      if ($(id).length > 0) {
          e.preventDefault();
          controller.scrollTo(id);
          if (window.history && window.history.pushState) {
              history.pushState("", document.title, id);
          }
      }
  });
});

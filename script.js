function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init()

var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+10+"px"
    crsr.style.top=dets.y+10+"px"
})

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        
        start:"top 27%",
        end:"top 0",
        scrub:3
        
    }
})
tl.to(".page1 h1",{
    x:-110,
    

      
},"anim")

tl.to(".page1 h2",{
    x:110,

},"anim")

tl.to(".page1 video",{
    width:"90%",
},"anim")




// page2
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        
        start:"top -110%",
        end:"top -130%",
        scrub:3
        
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
})


// page4

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
       
        start:"top -350%",
        end:"top -380%",
        scrub:3
        
    }
})

tl3.to(".main",{
    backgroundColor:"#0f0f0d"
})

// page5

var boxes=document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.style.backgroundColor="red"
        var att=elem.getAttribute("data-image")
        crsr.style.width="350px"
        crsr.style.height="250px"
        crsr.style.borderRadius="0"
        crsr.style.backgroundImage=`url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor="transparent"
        crsr.style.width="20px"
        crsr.style.height="20px"
        crsr.style.borderRadius="50%"
        crsr.style.backgroundImage=`none`
    })
})

// nav elements underlline effect
// Add the following JavaScript code to handle the underline effect

var h4Items = document.querySelectorAll("#nav h4");
var activeH4 = document.querySelector("#nav h4.active");

h4Items.forEach(function (h4) {
  h4.addEventListener("mouseenter", function () {
    activeH4.classList.remove("active");
    h4.classList.add("active");
    activeH4 = h4;
  });
});

// By default, the Home h4 element is underlined
activeH4.classList.add("active");



// nav-hover new purple div
var h4=document.querySelectorAll("#nav h4")
var purple=document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.visibility="visible"
        
        purple.style.opacity="1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.visibility="hidden"
        purple.style.opacity="0"
    })
})


// Add the following JavaScript code to set the running text chain inside the purple div

var purple = document.querySelector("#purple");
var runningText = document.createElement("div");
runningText.classList.add("running-text");
purple.appendChild(runningText);

var h4Items = document.querySelectorAll("#nav h4");
var currentH4 = null; // Track the current hovered h4 item

h4Items.forEach(function (h4) {
  h4.addEventListener("mouseenter", function () {
    if (currentH4 !== h4) {
      // Reset the animation if hovering a different h4 item
      currentH4 = h4;
      runningText.style.animation = "none";
      runningText.offsetHeight; // Trigger a reflow
      runningText.style.animation = "runText 8s linear infinite";
    }

    purple.style.visibility = "visible";
    purple.style.opacity = "1";

    // Duplicate the h4 text content multiple times to form a chain
    const chainLength = 10; // Adjust the number of duplications
    const textChain = Array.from({ length: chainLength }, () => h4.innerText).join(" • ");
    runningText.innerText = textChain;
  });
  h4.addEventListener("mouseleave", function () {
    purple.style.visibility = "hidden";
    purple.style.opacity = "0";
  });
});



// // Add the following JavaScript code to set the running text chain inside the purple div

// var purple = document.querySelector("#purple");
// var runningText = document.createElement("div");
// runningText.classList.add("running-text");
// purple.appendChild(runningText);

// var h4Items = document.querySelectorAll("#nav h4");
// h4Items.forEach(function (h4) {
//   h4.addEventListener("mouseenter", function () {
//     purple.style.visibility = "visible";
//     purple.style.opacity = "1";

//     // Duplicate the h4 text content multiple times to form a chain
//     const chainLength = 10; // Adjust the number of duplications
//     const textChain = Array.from({ length: chainLength }, () => h4.innerText).join(" • ");
//     runningText.innerText = textChain;
//   });
//   h4.addEventListener("mouseleave", function () {
//     purple.style.visibility = "hidden";
//     purple.style.opacity = "0";
//   });
// });

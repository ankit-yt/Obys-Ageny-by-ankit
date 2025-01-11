function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth:true
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





// each time the window upates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}


function loadinganimation(){
    var tl = gsap.timeline()

tl.from(".ld1 h1,.ld2 h1,.ld3 .left",{
    y: 100,
    duration: 0.7,
    stagger:0.1
})

tl.from(".wait",{
    opacity:0,
    duration:0.5
})

gsap.from(".ld1 .left",{
    opacity:0,
    duration:1
})

tl.to(".loaderText,.wait",{
    opacity:0,
    duration:1,
    delay:1,
    // stagger:0.5
})
tl.to(".loader",{
    display:"none"
})


gsap.from(".page1",{
    y:1200,
    duration:1,
    ease: "circ.out",
    delay:4
   
})


gsap.from(".nav",{

    opacity:0,
    delay:4.6
})

gsap.from(" .page1 .center::before",{
  y:100
})

gsap.from(".center .hero h4 ",{
    y:120,
    duration:0.5,
    stagger:0.1,
    delay:4.9
})



var timer = document.querySelector(".ld1 .left span")
var count = 0;
var interval  = setInterval(function(){
    if(count==100){
          clearInterval(interval);
          
    }
    else{
    count += 1;
    timer.textContent = count;
    }
},15)
}
function cursor_animation(){
    var cursor  = document.querySelector(".cursor")
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y,
            duration:0.01
    })

})

Shery.makeMagnet(".nav .right ul li" /* Element to target.*/, {
    ease: "slow(0.7,0.7,false)",
  duration: 0.5
  
  
});
}

function page1Animation(){
  var flag = document.querySelector(".flag")
  var hoveredText = document.querySelector(".page1 .center .center_bottom .hero")
  hoveredText.addEventListener("mouseenter",function(){
    hoveredText.addEventListener("mousemove",function(dets){
      gsap.to(".flag",{
        left:dets.x -500,
        top:dets.y - 300,
        opacity:1,
        duration:0.3
      })
    })
  })

  hoveredText.addEventListener("mouseleave",function(){
    gsap.to(".flag",{
      opacity:0
    })
  })
}

function page2Animation(){
  var video_cursor = document.querySelector(".video_cursor")
  var video = document.querySelector(".page2 video")
  var videoCont = document.querySelector(".page2 .container")
  videoCont.addEventListener("mouseenter",function(){
    // alert("mouse enter")
    videoCont.addEventListener("mousemove",function(dets){
      gsap.to(".cursor",{
        opacity:0
      })
      gsap.to(".video_cursor",{
        left:dets.x - 500,
        top:dets.y - 200,
        duration:0.5
      })
    })
  })
  videoCont.addEventListener("mouseleave",function(){
  gsap.to(".cursor",{
    opacity:1
  })
    gsap.to(".video_cursor",{
      top:"-7%",
      left:"68%",
      duration:0.5
    })
  })
var flag = 0;
  videoCont.addEventListener("click",function(){
    if(flag == 0){
    video.play();
    video.style.opacity = 1;
     video_cursor.innerHTML = `<svg class="button__pause-icon" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="visibility: inherit; opacity: 1;">
                              <path d="M0 24V0H7.36842V24H0Z" fill="white"></path>
                              <path d="M12.6316 24V0H20V24H12.6316Z" fill="white"></path></svg>`
    gsap.to(".video_cursor",{
      scale:"0.8"
    })
    flag = 1;
  }
  else{
    video.pause();
    video.style.opacity = 0;
    video_cursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z">
                        </path>
                    </svg>`
    gsap.to(".video_cursor",{
      scale:"1"
    })
    flag = 0;
                    

  }
  })
}

function page3Animations(){

Shery.imageEffect(".page3 .image-div1", {
    style: 5,
    // debug: true,
    gooey: true,
    config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":0.56,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7851915406458663},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

  Shery.imageEffect(".page3 .image-div2", {
    style: 5,
    // debug: true,
    gooey: true,
    config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":0.56,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7851915406458663},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

  Shery.imageEffect(".page3 .image-div3", {
    style: 5,
    // debug: true,
    gooey: true,
    config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":0.56,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7851915406458663},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

  Shery.imageEffect(".page3 .image-div4", {
    style: 5,
    // debug: true,
    gooey: true,
    config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":0.56,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7851915406458663},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

  Shery.imageEffect(".page3 .image-div5", {
    style: 5,
    // debug: true,
    gooey: true,
    config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":0.56,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7851915406458663},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

  Shery.imageEffect(".page3 .image-div6", {
    style: 5,
    // debug: true,
    gooey: true,
    config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":0.56,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7851915406458663},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

}



page1Animation()
page2Animation()
locomotive()
loadinganimation()
cursor_animation()
page3Animations()


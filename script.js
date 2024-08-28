const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation(){
    var videoay = document.querySelector("#video1")
    var videocon = document.querySelector("#video-cnt")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(
        playbtn,{
            scale:1,
            opacity:1
        }
    )
    
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(
        playbtn,{
            scale:0,
            opacity:0
        }
    )
    
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
            left:dets.x-50,
            top:dets.y-100
        }
    )
    
})
playbtn.addEventListener("onclick",function(){
    video1.pause()
})

}
videoconAnimation()
function loadingAnima(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.2
    })
    gsap.from("#page1 #video-cnt",{
       scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.3,
        stagger:0.2
    })
}
loadingAnima()
document.addEventListener("mousemove",function(dets){
gsap.to('#cursor',{
    left:dets.x,
    top:dets.y
})
})
document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'

    })
})
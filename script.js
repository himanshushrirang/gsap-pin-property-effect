gsap.to("#page2 #image", {
    width:"100%",
    scrollTrigger:{
        trigger:"#page2", // when we use pin then trigger the parent of the element
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true 
    }
})
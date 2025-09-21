let tl = gsap.timeline()

tl.from(".sec1 h3", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1
})


tl.from(".part2 h4", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})


tl.from(".sec2 h1", {
    x: -20,
    opacity: 0,
    duration: 1,
    
})

tl.from(".sec2 p", {
    x: 20,
    opacity: 0,
    duration: 1,
    
})

tl.from(".sec2 .circle", {
    scale:0,
    opacity: 0,
    duration: 0.4,
    ease: "back.out(2)"
    
})

tl.from(".sec2 img", {
    y: 15,
    opacity: 0,
    duration: 1,
    
})

tl.from(".sec3 .marquee", {
   
 opacity: 0,
   
    
})


gsap.from(".sec4 h2", {
  y: 15,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".sec4 h2",
    start: "top 80%",        // jab h2 viewport me aaye
    toggleActions: "play none none reverse"
  }
});

gsap.from(".sec4 .skills .box", {
  scale: 0,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".sec4 .skills",
    start: "top 80%",        // pura skills section jab aaye
    toggleActions: "play none none reverse"
  }
});


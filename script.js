const timeLine = gsap.timeline();

timeLine.from("nav h1",{
    y: -50,
    opacity: 0,
    duration: .8
})

timeLine.from(".links h4",{
    y:-50,
    opacity:0,
    duration:.8,
    stagger:.2
})

timeLine.from(".links button",{
    y:-50,
    opacity:0,
    duration:.5
},"-=.2")
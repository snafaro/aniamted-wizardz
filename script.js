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

timeLine.from(".navBtn",{
    y:-50,
    opacity:0,
    duration:.5
},"-=.6")

timeLine.from(".hero .part1 h1,p,.heroBtn",{
    y:50,
    opacity:0,
    duration:.8,
    stagger:.3
})

timeLine.from(".hero .part2 img",{
    x:300,
    opacity:0,
    duration:.5
},"-=.8")

timeLine.from(".logo-collection img",{
    y: 50,
    duration: .3,
    opacity:0,
    stagger: .2
})
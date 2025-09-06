function sectionOneAnimation(){
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
}

const timeLineTwo = gsap.timeline({scrollTrigger:{
    trigger: ".section2",
    scroller: "body",
    markers: true,
    start: "top 80%",
    scrub:2
    

}})

timeLineTwo.from(".text-content h1",{
    y:50,
    opacity:0,
    duration:.3
})

timeLineTwo.from(".text-content p",{
    y:50,
    opacity:0,
    duration:.3
})

timeLineTwo.from(".one",{
    x:-300,
    opacity:0,
    duration:.5
},"line1")

timeLineTwo.from(".two",{
    x:300,
    opacity:0,
    duration:.5
},"line1")

timeLineTwo.from(".three",{
    x:-300,
    opacity:0,
    duration:.5
},"line2")

timeLineTwo.from(".four",{
    x:300,
    opacity:0,
    duration:.5
},"line2")